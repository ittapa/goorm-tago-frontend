import { Font, FONT_STR } from "../Font/template";
import * as S from "./style";

function Loading() {
  return (
    <S.Wrapper>
      <Font size={FONT_STR.S26} align="center">
        경로를 찾고 있어요.
      </Font>
      <S.Image src="/images/dangn.png" alt="로딩 이미지" />
    </S.Wrapper>
  );
}

export default Loading;
