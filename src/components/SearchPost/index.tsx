import { SearchPostContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchPostInput = z.infer<typeof searchFormSchema>;

export function SearchPost() {
  const { register, handleSubmit, reset } = useForm<SearchPostInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearch() {
    console.log("foi");
    reset();
  }

  return (
    <SearchPostContainer>
      <div className="content">
        <h2>Publicações</h2>
        <span>6 publicações</span>
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
