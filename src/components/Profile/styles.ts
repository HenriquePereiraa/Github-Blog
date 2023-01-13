import styled from "styled-components";

export const InfoProfile = styled.div`
  position: relative;
  width: 100%;
  min-height: 212px;
  padding: 1.5rem;
  margin-top: -4rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme["gray-800"]};

  a {
    position: absolute;
    top: 45px;
    right: 40px;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 148px;
    height: 148px;
    border-radius: 10px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 160%;
    font-weight: 400;
  }

  .more-information {
    display: flex;
    gap: 1.5rem;

    .more-information_single {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      span {
        line-height: 160%;
        color: ${(props) => props.theme["gray-200"]};
      }
    }
  }
`;
