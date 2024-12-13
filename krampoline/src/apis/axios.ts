import axios from "axios";

const instance = axios.create({
  baseURL: "https://k28f46a14160fa.user-app.krampoline.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getUserInfo = async () => {
  const result = await instance.get(`/api/json-data`);
  const parsedResult = JSON.stringify(result.data);
  console.log(parsedResult);
  return parsedResult;
};

const postReserve = async ({
  user_id,
  starting_point,
  arrival_point,
  reservation_phone_number,
  reservation_datetime,
}: {
  user_id: string;
  starting_point: string;
  arrival_point: string;
  reservation_phone_number: string;
  reservation_datetime: string;
}) => {
  const result = await instance.post(
    "https://ec1e-59-8-75-201.ngrok-free.app/reservation/taxi?callType=now",
    {
      header: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
      params: {
        user_id,
        starting_point,
        arrival_point,
        reservation_phone_number,
        reservation_datetime,
      },
      withCredentials: true,
    }
  );

  if (result.status === 200) {
    return true;
  } else {
    return false;
  }
};

export { instance, getUserInfo, postReserve };
