import { useParams } from "react-router-dom";
import { InfoPost, InfoPostContainer } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { FaCalendarDay, FaComment } from "react-icons/fa";
import { PostContent } from "./PostContent";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostBlogContext } from "../../context/PostBlogContext";
import { api } from "../../lib/axios";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Post {
  id: number;
  created_at: string;
  title: string;
  body: string;
  user: {
    login: string;
  };
  html_url:string
  comments: number;
  number: number;
}

export function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<Post>();

  async function fetchOnlyPost(id: string) {
    const response = await api.get(
      `repos/HenriquePereiraa/Github-Blog/issues/${id}`
    );

    setPost(response.data);
  }

  useEffect(() => {
    if (id) fetchOnlyPost(id);
  }, []);

  let formateDate: string;
  if(post?.created_at) {
    formateDate = formatDistance(
      new Date(), new Date(post.created_at), {locale: ptBR, addSuffix: true}
    )
  }

  return (
    <InfoPostContainer>
      <InfoPost>
        <div className="header__post-info">
          <Link to="/">
            <MdOutlineKeyboardArrowLeft size={20} fill="#3294F8" />
            voltar
          </Link>
          <a href={post?.html_url} target="_blank">
            ver no github
            <RiShareBoxFill size={20} fill="#3294F8" />
          </a>
        </div>

        <div className="content__post-info">
          <h1>{post?.title}</h1>

          <div className="more-information__post-info">
            <div className="info__more-information">
              <AiFillGithub size={20} fill="#7B96B2" />
              <span>{post?.user.login}</span>
            </div>
            <div className="info__more-information">
              <FaCalendarDay size={20} fill="#7B96B2" />
              <span>{formateDate}</span>
            </div>
            <div className="info__more-information">
              <FaComment size={20} fill="#7B96B2" />
              <span>
                {post?.comments && post?.comments > 1
                  ? `${post?.comments} comentários`
                  : `${post?.comments} comentário`}
              </span>
            </div>
          </div>
        </div>
      </InfoPost>

      <PostContent body={post?.body} />
    </InfoPostContainer>
  );
}
