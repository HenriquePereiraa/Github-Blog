import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto 1rem auto;
  padding: 0 2%;

  .posts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;


