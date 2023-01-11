import styled from "styled-components";

export const InfoPostContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto 1rem auto;
  padding: 0 2%;
`;

export const InfoPost = styled.div`
  width: 100%;
  min-height: 168px;
  padding: 1.5rem;
  margin-top: -4rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  background: ${(props) => props.theme["gray-800"]};

  .header__post-info {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none;

      color: ${(props) => props.theme.blue};

      &:first-child {
        gap: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .content__post-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-100"]};
      light-height: 2rem;
    }

    .more-information__post-info {
      display: flex;
      align-items: center;
      gap: 2rem;

      .info__more-information {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        font-size: 1rem;
        light-height: 1.5rem;
        font-weight: 400;
        color: ${(props) => props.theme["gray-400"]};
      }
    }
  }
`;
