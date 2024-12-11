import React, { useState } from "react";
import { instance } from "@apis/axios";
import Frame from "@components/Frame/template";

function Test() {
  const [apiTest, setApiTest] = useState(false);
  const [dbTest, setDbTest] = useState(false);

  const handleApiOnclick = async () => {
    try {
      await instance.get("/test");
      setApiTest(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDbOnClick = async () => {
    try {
      await instance.get("/db");
      setDbTest(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Frame>
      <div>Hello 이은옹</div>
      <div>
        <button onClick={handleApiOnclick}>API TEST</button>
        <div>{apiTest ? "CONNECT" : "NOT YET"}</div>
      </div>
      <div>
        <button onClick={handleDbOnClick}>DB TEST</button>
        <div>{dbTest ? "CONNECT" : "NOT YET"}</div>
      </div>
    </Frame>
  );
}

export default Test;
