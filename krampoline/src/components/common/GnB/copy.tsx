import { useGnBStore } from "src/stores";
import { Font } from "../Font/template";
import * as S from "./style";
import { FONT_STR, ROUTES } from "@constants/index";

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
    iconActive: (
      <img src="/images/my.png" alt="내정보" width={40} height={40} />
    ),
    iconDisable: (
      <img src="/images/my.png" alt="내정보" width={40} height={40} />
    ),
  },
];

const GnBComponent = () => {
  const { activeMenu, setActiveMenu } = useGnBStore();

  return (
    <S.Wrapper>
      {menus.map((menu) => (
        <S.GnBButton key={menu.id} onClick={() => setActiveMenu(menu.id)}>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {activeMenu === menu.id ? menu.iconActive : menu.iconDisable}
          </span>
          <Font align="center" size={FONT_STR.S14}>
            <span
              style={{
                color:
                  activeMenu === menu.id && menu.id !== 3
                    ? "var(--primary-50)"
                    : "var(--gray-40)",
              }}
            >
              {menu.name}
            </span>
          </Font>
        </S.GnBButton>
      ))}
    </S.Wrapper>
  );
};

const COMPONENTS = {
  DEFAULT: <GnBComponent />,
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
