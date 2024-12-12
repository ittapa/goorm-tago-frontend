import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ConfirmButton } from "@components/recommend";
import Loading from "@components/common/Loading/template";
import { Font, FONT_STR } from "@components/common/Font/template";
import Button from "@components/common/Button/template";

function Recommend() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const dest = params.get("dest") ?? "default"; // 목적지
  const type = params.get("type") ?? "default"; // group, alone

  useEffect(() => {
    function getServer() {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

    getServer();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // confrim 파라미터가 필요한지는 미지수 결정해야함
  function handleConfirm(confirm: boolean) {
    navigate(`/confirm?confirm=${confirm}`);
  }

  return (
    <>
      <Font align="left" size={FONT_STR.S26}>
        <span>
          <span style={{ color: "var(--primary-50)" }}>오전 9~12시</span> 사이에
          출발하면
        </span>
      </Font>
      <Font align="left" size={FONT_STR.S26}>
        <span>
          <span style={{ color: "var(--primary-50)" }}>5,200원</span>을 아낄 수
          있어요.
        </span>
      </Font>
      <Font align="left" size={FONT_STR.S26}>
        이 시간에 출발할까요?
      </Font>
      <img
        src="/images/four.png"
        alt="four"
        width={210}
        height={210}
        style={{
          marginTop: "87px",
          marginBottom: "201px",
          alignSelf: "center",
        }}
      />
      <ConfirmButton handleConfirm={handleConfirm} />
    </>
  );
}

export default Recommend;
