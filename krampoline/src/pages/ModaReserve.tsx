import { SelectDate, SelectTime } from "@components/reserve";
import { STEP } from "@components/reserve/copy";
import { StepType } from "@components/reserve/type";
import { Font } from "@components/common/Font/template";
import { getTitle } from "@components/schedule/logic";
import { FONT_STR } from "@constants/index";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ModaReserve() {
  const [params] = useSearchParams();
  // 쿠키에서 dest 정보 매핑해야함: 아들집: 경기도 남양주시... 매핑 필요
  // dest 정보 없으면 에러
  const dest = params.get("dest") ?? "default";
  const step = params.get("step") ?? "date";

  console.log(step);
  const [ReserveStep, setReserveStep] = useState<StepType>(step as StepType);

  function handleRouteStep(step: StepType) {
    setReserveStep(step);
  }

  return (
    <>
      <Font align="left" size={FONT_STR.S26}>
        {getTitle(dest)}
      </Font>
      {ReserveStep === STEP.DATE && <SelectDate dest={dest} />}
      {ReserveStep === STEP.TIME && <SelectTime dest={dest} />}
    </>
  );
}

export default ModaReserve;
