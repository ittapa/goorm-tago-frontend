import { Font, FONT_STR } from "@components/common/Font/template";
import Button from "@components/common/Button/template";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@components/confirm/style";

function Confirm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  // const dest = params.get("dest") ?? "default"; // 목적지
  // const type = params.get("type") ?? "default"; // group, alone

  // const reseve

  // 서버 통신 필요 (로딩 화면도 필요)

  // 오늘인지 예약인지, 목적지 정보, 결제 금액, 이웃 수, 출발 시간, 날짜 정보,
  function handleClickButton() {
    navigate(`/complete`);
  }

  return (
    <>
      <Font align="left" size={FONT_STR.S26}>
        아래 일정으로 예약할게요.
      </Font>
      <S.InfoWrapper style={{ marginTop: "20px" }}>
        <S.Info>
          <img src="/images/ping.png" alt="출발지" width={30} height={30} />
          <Font align="left" size={FONT_STR.R18}>
            출발
          </Font>
        </S.Info>
        <Font align="left" size={FONT_STR.M18}>
          제주 서귀포시 성산읍 시흥로 54
        </Font>
      </S.InfoWrapper>
      <hr style={{ width: "100%", border: "1px solid var(--gray-10)" }} />
      <S.InfoWrapper>
        <S.Info>
          <img src="/images/flag.png" alt="출발지" width={30} height={30} />
          <Font align="left" size={FONT_STR.R18}>
            도착
          </Font>
        </S.Info>
        <Font align="left" size={FONT_STR.M18}>
          한국은행 성산지점
        </Font>
      </S.InfoWrapper>

      <div
        style={{
          width: "100%",
          height: "6px",
          backgroundColor: "var(--gray-10)",
          position: "absolute",
          top: "263px",
          left: "0",
        }}
      />
      <S.ReserveInfo>
        <Font align="left" size={FONT_STR.B18}>
          예약 정보
        </Font>
        <S.Reserve>
          <Font align="center" size={FONT_STR.R18}>
            출발 시간
          </Font>
          <Font align="center" size={FONT_STR.M18}>
            {"12.13(금) 12:00"}
          </Font>
        </S.Reserve>
        <S.Reserve>
          <Font align="center" size={FONT_STR.R18}>
            운행 요금
          </Font>
          <Font align="center" size={FONT_STR.M18}>
            {"4,600원"}
          </Font>
        </S.Reserve>
      </S.ReserveInfo>

      <Button
        font={FONT_STR.B16}
        size={{ width: "full", height: "64px" }}
        style={{ marginTop: "278px" }}
        handleClickButton={handleClickButton}
      >
        예약하기
      </Button>
    </>
  );
}

export default Confirm;
