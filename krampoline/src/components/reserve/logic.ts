import { STEP } from "./copy";

export const getTitle = (step: string, dest: string) => {
  switch (step) {
    case STEP.TIME:
      return `${dest}으로 언제 이동하시겠어요?`;
    case STEP.DATE:
      return `출발 날짜를 선택해주세요.`;
    default:
      return "";
  }
};
