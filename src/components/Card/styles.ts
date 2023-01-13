import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 400px;
  width: 100%;
  min-height: 260px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    transition: border .2s;
    border: 2px solid ${(props) => props.theme["gray-500"]};
    cursor: pointer;
  }

  .header__card {
    display: flex;
    justify-content: space-between;

    h2 {
      width: 82%;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 2rem;
      color: ${(props) => props.theme["gray-100"]};
    }

    span {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 2rem;
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  .content__card {
    p {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
      color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
