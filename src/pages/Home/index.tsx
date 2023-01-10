import { ContentInfo, HomeContainer, InfoProfile } from "./styles";
import imgProfile from "../../assets/avatar.png";
import { AiFillGithub } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";

export function Home() {
  return (
    <HomeContainer>
      <InfoProfile>
        <img src={imgProfile} alt="" />
        <ContentInfo>
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <a href="">
            Github <RiShareBoxFill size={14.4} />
          </a>

          <div className="more-information">
            <div className="more-information_single">
              <AiFillGithub size={20} fill="#C4D4E3" />
              <span>cameronwll</span>
            </div>
            <div className="more-information_single">
              <FaBuilding size={20} fill="#C4D4E3" />
              <span>Rocketseat</span>
            </div>
            <div className="more-information_single">
              <FaUserFriends size={20} fill="#C4D4E3" />
              <span>32 seguidores</span>
            </div>
          </div>
        </ContentInfo>
      </InfoProfile>
    </HomeContainer>
  );
}
