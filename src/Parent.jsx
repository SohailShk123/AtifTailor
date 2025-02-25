import React, { useState } from "react";
import Child1 from "./Child1";
import MyContext from "./MyContext";

const Parent = () => {
  const value = "Present Here 👋";
  const value2 = "Present Here 👋 already";
  const [num, setNum] = useState(0);

  const obj = {
    num: num,
    setNum: setNum,
    // num ,
    // setNum ,
  };
  return (
    <div>
      {/* <MyContext.Provider value={value2}> */}
      <MyContext.Provider value={obj}>
        <h1>Parent</h1>
        <Child1 value={value} />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;
