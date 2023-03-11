import React from "react";

export default function FunctionClick() {
  function clickHandler() {
    console.log("Func button clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
}
