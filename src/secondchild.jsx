import React from "react";
import useStore from "./store";

function SecondChild() {
  const selectedButton = useStore((state) => state.selectedButton);
  const count = useStore((state) => state.count);

  return (
    <div>
      <h1>두번째 자식</h1>
      <p>카운트: {count}</p>
      <p>선택한 버튼: {selectedButton}</p>
    </div>
  );
}

export default SecondChild;
