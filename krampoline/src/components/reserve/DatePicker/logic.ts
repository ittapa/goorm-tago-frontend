export const formatDay = (day: number) => {
  switch (day) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
};

export const formatDate = (date: Date) => {
  const day = formatDay(date.getDay());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  return `${year}/${month}/${dayOfMonth} (${day})`;
};
