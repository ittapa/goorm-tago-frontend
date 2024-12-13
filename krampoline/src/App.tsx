import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "@components/common/Layout/template";
import Main from "@pages/Main";
import Schedule from "@pages/Schedule";
import Reserve from "@pages/Reserve";
import Recommend from "@pages/Recommend";
import Confirm from "@pages/Confirm";

import Test from "@pages/Test";
import Complete from "@pages/Complete";
import ModaSchedule from "@pages/ModaSchedule";
import ModaReserve from "@pages/ModaReserve";
import ModaConfirm from "@pages/ModalConfirm";
import ModaComplete from "@pages/ModaComplete";
import ModaNotice from "@pages/ModaNotice";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/moda/schedule" element={<ModaSchedule />} />
          <Route path="/moda/reserve" element={<ModaReserve />} />
          <Route path="/moda/confirm" element={<ModaConfirm />} />
          <Route path="/moda/notice" element={<ModaNotice />} />
          <Route path="/moda/complete" element={<ModaComplete />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
