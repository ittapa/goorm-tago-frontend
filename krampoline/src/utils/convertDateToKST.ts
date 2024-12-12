export function convertDateToKST(date: Date) {
  // Date 객체를 ISO 문자열로 변환
  const utcISOString = date.toISOString();

  // UTC 시간을 한국 시간 (UTC +9)으로 변환
  const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  // 년, 월, 일, 시, 분, 초 추출
  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 +1
  const day = String(kstDate.getDate()).padStart(2, "0");
  const hours = String(kstDate.getHours()).padStart(2, "0");
  const minutes = String(kstDate.getMinutes()).padStart(2, "0");

  // ISO 형식에서 ".000Z" 제거하고 한국 시간으로 반환
  return `${year}-${month}-${day}T${hours}:${minutes}:00`;
}
