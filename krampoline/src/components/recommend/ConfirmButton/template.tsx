import Button from "@components/common/Button/template";
import * as S from "./style";
import { FONT_STR } from "@components/common/Font/template";

function ConfirmButton({
  handleConfirm,
}: {
  handleConfirm: (confirm: boolean) => void;
}) {
  return (
    <S.Wrapper>
      <Button
        font={FONT_STR.M19}
        theme="sky"
        size={{ width: "164px", height: "64px" }}
        handleClickButton={() => handleConfirm(false)}
        disabled={true}
        style={{ cursor: "auto" }}
      >
        다른 시간 선택
      </Button>
      <Button
        font={FONT_STR.M19}
        theme="blue"
        size={{ width: "164px", height: "64px" }}
        handleClickButton={() => handleConfirm(true)}
      >
        네
      </Button>
    </S.Wrapper>
  );
}

export default ConfirmButton;
