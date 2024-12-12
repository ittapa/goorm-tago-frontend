import BackButton from "./BackButton/template";
import * as S from "./style";
import { ROUTES } from "@constants/index";
import Alert from "@assets/svgs/Alert";

const COMPONENTS = {
  DEFAULT: (
    <S.Wrapper>
      <S.Logo src="/images/logo.png" alt="모다가" />
      <Alert />
    </S.Wrapper>
  ),
  BACK: (
    <S.Wrapper>
      <BackButton />
      <></>
    </S.Wrapper>
  ),
  NONE: <></>,
};

export const HEADER = {
  [ROUTES.MAIN]: COMPONENTS.DEFAULT,
  [ROUTES.SCHEDULE]: COMPONENTS.BACK,
  [ROUTES.RESERVE]: COMPONENTS.BACK,
  [ROUTES.RECOMMEND]: COMPONENTS.BACK,
  [ROUTES.CONFIRM]: COMPONENTS.BACK,
  [ROUTES.COMPLETE]: COMPONENTS.NONE,
};
