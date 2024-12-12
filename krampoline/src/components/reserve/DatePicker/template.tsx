import { useState } from "react";
import * as S from "./style";
import { Font, FONT_STR } from "@components/common/Font/template";
import { formatDate } from "./logic";
import LeftActive from "@assets/svgs/LeftActive";
import LeftDisable from "@assets/svgs/LeftDisable";
import RightActive from "@assets/svgs/RightActive";

function DatePicker({ dest }: { dest: string }) {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(1);

  function handleAddDay() {
    setDate(new Date(date.setDate(date.getDate() + 1)));
    setDay(day + 1);
  }

  function handleSubtractDay() {
    setDate(new Date(date.setDate(date.getDate() - 1)));
    setDay(day - 1);
  }

  return (
    <S.Wrapper>
      <Font align="center" size={FONT_STR.M20}>
        {formatDate(date)}
      </Font>
      <S.DatePickerWrapper>
        <S.CircleButton onClick={handleSubtractDay} disabled={day === 1}>
          {day === 1 ? <LeftDisable /> : <LeftActive />}
        </S.CircleButton>
        <Font align="center" size={FONT_STR.M20}>{`${day}일 뒤`}</Font>
        <S.CircleButton onClick={handleAddDay}>
          <RightActive />
        </S.CircleButton>
      </S.DatePickerWrapper>
    </S.Wrapper>
  );
}

export default DatePicker;
