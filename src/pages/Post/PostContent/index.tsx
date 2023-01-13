import ReactMarkdown from "react-markdown";
import { PostContentContainer } from "./styles";

interface PostContentProps {
  body: string | '';
}

export function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={body} />
    </PostContentContainer>
  );
}
