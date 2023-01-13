import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";
import { format, formatDistance } from "date-fns";
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

  const formateDate = formatDistance(
    new Date(), new Date(created_at), {locale: ptBR, addSuffix: true}
  )

  return (
    <CardContainer onClick={handleNavigation}>
      <div className="header__card">
        <h2>{title}</h2>
        <span>{formateDate}</span>
      </div>

      <div className="content__card">
        <p>{body}</p>
      </div>
    </CardContainer>
  );
}
