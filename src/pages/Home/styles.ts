import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2%;
`;

export const InfoProfile = styled.div`
  width: 100%;
  min-height: 212px;
  padding: 1.5rem;
  margin-top: -4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme["gray-800"]};

  img {
    width: 148px;
    height: 148px;
  }
`;

export const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 1rem;

  p {
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1rem;
    line-height: 160%;
    font-weight: 400;
  }

  a {
    position: absolute;
    top:10px;
    right:0;
    display: flex;
    align-items:center;
    gap:.3rem;

    color:${props => props.theme['blue']};
    text-decoration:none;
    font-weight:700;
    font-size:0.9rem;

    :hover {
        text-decoration:underline;
    }
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
