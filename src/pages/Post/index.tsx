import { useParams } from "react-router-dom";
import { InfoPost, InfoPostContainer } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { FaCalendarDay, FaComment } from "react-icons/fa";
import { PostContent } from "./PostContent";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  return (
    <InfoPostContainer>
      <InfoPost>
        <div className="header__post-info">
          <Link to="/">
            <MdOutlineKeyboardArrowLeft size={20} fill="#3294F8" />
            voltar
          </Link>
          <Link to="">
            ver no github
            <RiShareBoxFill size={20} fill="#3294F8" />
          </Link>
        </div>

        <div className="content__post-info">
          <h1>JavaScript data types and data structures</h1>

          <div className="more-information__post-info">
            <div className="info__more-information">
              <AiFillGithub size={20} fill="#7B96B2" />
              <span>cameronwll</span>
            </div>
            <div className="info__more-information">
              <FaCalendarDay size={20} fill="#7B96B2" />
              <span>Há 1 dia</span>
            </div>
            <div className="info__more-information">
              <FaComment size={20} fill="#7B96B2" />
              <span>5 comentários</span>
            </div>
          </div>
        </div>
      </InfoPost>

      <PostContent />
    </InfoPostContainer>
  );
}
