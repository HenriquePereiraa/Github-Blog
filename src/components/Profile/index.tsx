import { useEffect, useState } from "react";
import { ContentInfo, InfoProfile } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { FaBuilding, FaUserFriends } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { api } from "../../lib/axios";

interface UserType {
  name: "";
  avatar: string;
  bio: string;
  github: string;
  company?: string;
  followers: number;
}

export default function ProfileBlog() {
  const initialValue = {
    name: "",
    avatar: "",
    bio: "",
    github: "",
    company: "",
    followers: 0,
  } as UserType;

  const [user, setUser] = useState<UserType>(initialValue);

  async function getUser() {
    const response = await api.get("users/HenriquePereiraa");

    const user = {
      name: response.data.name,
      avatar: response.data.avatar_url,
      bio: response.data.bio,
      github: response.data.login,
      company: response.data.company,
      followers: response.data.followers,
    };
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <InfoProfile>
        <a href="">
          Github <RiShareBoxFill size={14.4} />
        </a>
        <img src={user?.avatar} alt="" />
        <ContentInfo>
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>

          <div className="more-information">
            <div className="more-information_single">
              <AiFillGithub size={20} fill="#C4D4E3" />
              <span>{user?.github}</span>
            </div>
            {user?.company && (
              <div className="more-information_single">
                <FaBuilding size={20} fill="#C4D4E3" />
                <span>{user?.company}</span>
              </div>
            )}
            <div className="more-information_single">
              <FaUserFriends size={20} fill="#C4D4E3" />
              <span>{user?.followers} seguidores</span>
            </div>
          </div>
        </ContentInfo>
      </InfoProfile>
    </>
  );
}
