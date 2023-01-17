import React from "react";

import "./List.css";

import { toDos } from "../mocks/toDos";
function List() {
  return (
    <div className="List">
      <div className="List__container">
        {toDos.map((item, index) => (
          <div className="item"> {item.texto} </div>
        ))}
      </div>
    </div>
  );
}

export default List;
