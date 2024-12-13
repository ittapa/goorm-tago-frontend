import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "@components/common/Banner/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import Button, { IconButton } from "@components/common/Button/template";
import ButtonGrid from "@components/main/ButtonGrid/template";
import { title, buttonList } from "@components/main/copy";
import * as S from "@styles/index";
import RightActive from "@assets/svgs/RightActive";
import { speakText, stopText } from "@utils/textToSpeach";
import { useGnBStore, useUserInfo } from "src/stores";
import { getUserInfo } from "@apis/axios";
import Cookies from "js-cookie";

function Main() {
  const navigate = useNavigate();
  const { activeMenu } = useGnBStore();
  const { userInfo, setUserInfo } = useUserInfo();
  interface UserInfo {
    bookmarks?: typeof buttonList;
    // add other properties if needed
  }

  function handleClickButton(dest: string) {
    navigate(`schedule?dest=${dest}`);
  }

  useEffect(() => {
    const handleUserInteraction = () => {
      speakText(
        activeMenu === 1
          ? "어디로 갈까요? 목적지를 선택해 주세요."
          : "함께할 모다벗을 찾아볼까요?"
      );
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      stopText();
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (activeMenu === 1) {
      speakText("어디로 갈까요? 목적지를 선택해 주세요.");
    } else if (activeMenu === 2) {
      speakText("함께할 모다벗을 찾아볼까요?");
    }
  }, [activeMenu]);

  useEffect(() => {
    getUserInfo().then((response) => {
      if (!response) return;
      console.log("user info", response, response);

      // 쿠키 설정
      const zeroOrTwo = Math.random() < 0.5 ? 0 : 1;
      const parsed = JSON.parse(response);
      const user = parsed[zeroOrTwo];
      setUserInfo(user);
      const userStr = JSON.stringify(user);
      console.log(userStr);
      Cookies.set("user", userStr, { path: "/", secure: false });
    });
  }, []);

  return (
    <S.Wrapper>
      {activeMenu === 1 && (
        <>
          <Font size={FONT_STR.S26} padding={"0 0 0 4px"}>
            {title}
          </Font>
          <ButtonGrid
            buttonList={
              userInfo?.bookmarks ?? [
                {
                  location_name: "한라산 등산로 입구",
                  road_address: "제주특별자치도 제주시 한라산길 123",
                  longitude: "126.533008",
                  latitude: "33.361667",
                },
              ]
            }
            handleClickButton={handleClickButton}
          />
          <Button
            size={{ width: "full", height: "48px" }}
            theme="white"
            font={FONT_STR.R17}
            handleClickButton={() => {}}
            disabled={true}
            style={{ cursor: "auto" }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              다른 곳으로 갈래요 <RightActive />
            </span>
          </Button>
          <Banner />
          <div style={{ width: "100%", height: "100px" }}></div>
        </>
      )}
      {activeMenu === 2 && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            gap: "36px",
          }}
        >
          <img
            src="/images/together.png"
            alt="모다벗_이미지"
            width={280}
            height={204}
            style={{ alignSelf: "center" }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              gap: "15px",
            }}
          >
            <Font size={FONT_STR.S26} align="center">
              함께할 모다벗을 찾아볼까요?
            </Font>
            <Font size={FONT_STR.R17} align="center">
              <span style={{ color: "var(--gray-60)", whiteSpace: "pre-line" }}>
                {"모다벗은 특정 목적지에\n정기적으로 함께 갈 이웃이에요."}
              </span>
            </Font>
          </div>
          <Button
            size={{ width: "full", height: "64px" }}
            theme="blue"
            font={FONT_STR.M19}
            handleClickButton={() => {
              navigate("/moda/schedule");
            }}
            style={{ marginTop: "100px" }}
          >
            모다벗 찾아보기
          </Button>
        </div>
      )}
    </S.Wrapper>
  );
}

export default Main;
