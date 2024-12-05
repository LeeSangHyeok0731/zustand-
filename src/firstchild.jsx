import React from "react";
import useStore from "./store";

function FirstChild() {
  const Button = useStore((state) => state.setSelectedButton);
  const increase = useStore((state) => state.incrementCount);
  const remove = useStore((state) => state.removeCount);

  const handleClick = (button) => {
    Button(button);
  };

  return (
    <div>
      <h1>첫번째 자식</h1>
      <div>
        <button onClick={() => handleClick("O")}>O</button>
        <button onClick={() => handleClick("X")}>X</button>
      </div>
      <div>
        <button onClick={increase}>카운트 증가</button>
        <button onClick={remove}>카운트 감소</button>
      </div>
    </div>
  );
}

export default FirstChild;
