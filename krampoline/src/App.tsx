import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "@components/Layout/template";
import Test from "./pages/Test";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
