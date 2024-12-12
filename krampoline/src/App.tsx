import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "@components/common/Layout/template";
import Main from "@pages/Main";
import Schedule from "@pages/Schedule";
import Reserve from "@pages/Reserve";
import Recommend from "@pages/Recommend";
import Confirm from "@pages/Confirm";

import Test from "@pages/Test";
import Complete from "@pages/Complete";

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
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
