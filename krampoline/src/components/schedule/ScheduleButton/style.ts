import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
`;
