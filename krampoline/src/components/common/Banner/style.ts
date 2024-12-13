import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  height: 180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 20px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
