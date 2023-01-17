import React from "react";
import "./AddBar.css";
import { toDos } from "mocks/toDos";



function AddBar() {
    return (
      <div className="AddBar">
        <div className="AddBar__container">
          <article className="Art_add">
            <p className="txt_add">Adicionar</p>
          </article>
          <div className="Bar"></div>
          <div className="Btn_add">
            <img
              className="Img_add"
              src={require("../assets/img/icons/add-file.png")}
              alt="Paleta de Doce de Leite"
            />
          </div>
        </div>
      </div>
    );
}





export default AddBar;