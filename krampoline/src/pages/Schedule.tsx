import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getTitle } from "@components/schedule/logic";
import { type ScheduleType, SCHEDULE } from "@components/schedule";
import { Font, FONT_STR } from "@components/common/Font/template";
import ScheduleButton from "@components/schedule/ScheduleButton/template";

// 목적지 정보가 서치 파람스에 없을 경우 alert 띄우고 이전 페이지로 이동해야함
function Schedule() {
  const [params] = useSearchParams();
  const dest = params.get("dest") ?? "default";

  const navigate = useNavigate();

  function handleNavigate(schedule: ScheduleType) {
    const isNow = schedule === SCHEDULE.NOW;
    const step = isNow ? "time" : "date";
    navigate(`/reserve?dest=${dest}&step=${step}`);
  }

  function handleClickButton(schedule: ScheduleType) {
    switch (schedule) {
      case SCHEDULE.NOW:
        handleNavigate(SCHEDULE.NOW);
        break;
      case SCHEDULE.LATER:
        handleNavigate(SCHEDULE.LATER);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Font align="left" size={FONT_STR.S26}>
        <p>
          <span style={{ color: "#246beb" }}>{dest}</span>
          <span>{"으로\n"}</span>
        </p>
        <p>{"언제 출발할까요?"}</p>
      </Font>
      <ScheduleButton dest={dest} handleClickButton={handleClickButton} />
    </>
  );
}

export default Schedule;
