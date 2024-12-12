import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  height: 180px;
  position: relative;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
