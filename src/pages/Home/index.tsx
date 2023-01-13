import { HomeContainer } from "./styles";
import { SearchPost } from "../../components/SearchPost";
import { Card } from "../../components/Card";
import ProfileBlog from "../../components/Profile";
import { useContext } from "react";
import { PostBlogContext } from "../../context/PostBlogContext";

export function Home() {
  const { posts } = useContext(PostBlogContext);

  return (
    <HomeContainer>
      <ProfileBlog />
      <SearchPost />

      <main className="posts">
        {posts.map((post) => {
          return (
            <Card
              id={post.number}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              key={post.id}
            />
          );
        })}
      </main>
    </HomeContainer>
  );
}
