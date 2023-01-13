import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CardProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Card({ id, title, body, created_at }: CardProps) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/post/${id}`);
  }

  const publishedDateFormatted = format(
    new Date(created_at),
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  return (
    <CardContainer onClick={handleNavigation}>
      <div className="header__card">
        <h2>{title}</h2>
        <span>
          <time title={publishedDateFormatted} dateTime={created_at}>
            {publishedDateFormatted}
          </time>
        </span>
      </div>

      <div className="content__card">
        <p>{body}</p>
      </div>
    </CardContainer>
  );
}
