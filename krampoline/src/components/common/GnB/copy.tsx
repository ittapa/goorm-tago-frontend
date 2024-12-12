import * as S from "./style";
import { ROUTES } from "@constants/index";

export const menus = [
  {
    id: 1,
    name: "택시 호출",
    iconActive: (
      <img
        src="/images/car_active.png"
        alt="택시 호출 활성화"
        width={40}
        height={40}
      />
    ),
    iconDisable: (
      <img
        src="/images/car_disable.png"
        width={40}
        height={40}
        alt="택시 호출 비활성화"
      />
    ),
  },
  {
    id: 2,
    name: "모다벗",
    iconActive: (
      <img
        src="/images/modabut_active.png"
        alt="모다벗"
        width={40}
        height={40}
      />
    ),
    iconDisable: (
      <img
        src="/images/modabut_disable.png"
        alt="모다벗"
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 3,
    name: "내 정보",
    iconActive: undefined,
    iconDisable: undefined,
  },
];

const COMPONENTS = {
  DEFAULT: (
    <S.Wrapper>
      {menus.map((menu) => (
        <S.GnBButton key={menu.id}>{menu.name}</S.GnBButton>
      ))}
    </S.Wrapper>
  ),
  NONE: <></>,
};

export const GnB = {
  [ROUTES.MAIN]: COMPONENTS.DEFAULT,
  [ROUTES.SCHEDULE]: COMPONENTS.NONE,
  [ROUTES.RESERVE]: COMPONENTS.NONE,
  [ROUTES.RECOMMEND]: COMPONENTS.NONE,
  [ROUTES.CONFIRM]: COMPONENTS.NONE,
  [ROUTES.COMPLETE]: COMPONENTS.NONE,
};
