import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface Post {
  id: number;
  created_at: string;
  title: string;
  body: string;
  comments: number;
  number: number;
}

interface PostBlogProps {
  children: ReactNode;
}

interface PostBlogContextType {
  posts: Post[];
  fetchPosts: (searchTerm: string) => Promise<void>;
}

export const PostBlogContext = createContext({} as PostBlogContextType);

export function PostBlogProvider({ children }: PostBlogProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    const response = await api.get(`repos/HenriquePereiraa/Github-Blog/issues`);

    setPosts(response.data);
  }, []);

  async function fetchPosts(searchTerm: string) {
    const response = await api.get(
      `search/issues?q=${searchTerm.query}%20repo:HenriquePereiraa/Github-Blog`
    );

    setPosts(response.data.items);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostBlogContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostBlogContext.Provider>
  );
}
