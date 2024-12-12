import { useNavigate } from "react-router-dom";
import Button from "@components/common/Button/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import * as S from "./style";

function SelectTime({ dest }: { dest: string }) {
  const navigate = useNavigate();
  function handleRouteToRecommend() {
    navigate(`/recommend?dest=${dest}`);
  }
  return (
    <S.Wrapper>
      <Font align="center" size={FONT_STR.B16}>
        시간 선택
      </Font>
      <Button
        font={FONT_STR.B16}
        size={{ width: "full", height: "64px" }}
        handleClickButton={handleRouteToRecommend}
      >
        선택 완료 다음으로 넘어가귀
      </Button>
    </S.Wrapper>
  );
}

export default SelectTime;
