import { SearchPostContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PostBlogContext } from "../../context/PostBlogContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchPostInput = z.infer<typeof searchFormSchema>;

export function SearchPost() {
  const { register, handleSubmit, reset } = useForm<SearchPostInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const { fetchPosts, posts } = useContext(PostBlogContext);

  const amountedPost = posts.length;

  function handleSearch(query: any) {
    fetchPosts(query);
    reset();
  }

  return (
    <SearchPostContainer>
      <div className="content">
        <h2>Publicações</h2>
        <span>
          {amountedPost > 1
            ? `${amountedPost} publicações`
            : `${amountedPost} publicação`}
        </span>
      </div>

      <form action="" onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </SearchPostContainer>
  );
}
