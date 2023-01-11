import styled from "styled-components";

export const SearchPostContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 5rem auto  3rem auto;
  display: flex;
  flex-direction:column;
  gap: 1rem;

  .content {
    display: flex;
    justify-content: space-between;
  }

  form {
    display: flex;

    input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid ${props => props.theme['gray-600']};
      border-radius: 6px;
      background-color:${props => props.theme.black};
      color:${props => props.theme['gray-500']};
      font-size:1rem;

      &::placeholder {
        color:${props => props.theme['gray-500']};
      }
    }
  }
`;
