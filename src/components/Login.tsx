import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Login = () => {
  let navigate = useNavigate();

  const [clave, setClave] = useState("");

  function numero(numi: string) {
    setClave((prev) => prev + numi);
  }

  useEffect(() => {
    if (clave.length == 6) {
      if (clave == "123456") {
        navigate("/home", { replace: true });
      } else {
        alert("contraseña equivocada");
        setClave("");
      }
    }
  }, [clave]);

  useEffect(() => {
    ayudaboton();
  }, []);

  function numeroback() {
    setClave(clave.substring(0, clave.length - 1));
  }
  function ayudaboton() {
    alert(
      "Esta webapp fue realizada para fines recreativos y de aprendizaje, descrubir una vulnerabilidad en Yape que incluye el nombre en el código QR.\n\nSi recibes pagos por medio de Códigos QR siempre verificar la transacción.\n\nClave:123456\n\nEl código fuente en mi perfil de github ;)\n\nLos logos y nombres comerciales no son de mi propiedad."
    );
  }

  return (
    <Fragment>
      <div className="divlogin">
        <div className="divquestion">
          <img
            onClick={ayudaboton}
            className="imgquestion"
            alt="question"
            src="/question.svg"
            height="36px"
            width="36px"
          />
        </div>
        <div className="divqrpri">
          <div className="divqrsec"></div>
        </div>
        <h4 className="clavediv">Recibe pagos por QR</h4>
        <div className="footer">
          <h3 className="clavediv">Ingresa tu clave Yape</h3>
          <div className="clavediv">
            <ul className="ulclave">
              {clave.length > 0 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"> </li>
              )}
              {clave.length > 1 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"></li>
              )}
              {clave.length > 2 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"></li>
              )}
              {clave.length > 3 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"></li>
              )}
              {clave.length > 4 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"></li>
              )}
              {clave.length > 5 ? (
                <li className="liclaveu"></li>
              ) : (
                <li className="liclave"></li>
              )}
            </ul>
          </div>
          <div className="divpadrow1">
            <button onClick={() => numero("4")} className="pad">
              <p>4</p>
            </button>
            <button onClick={() => numero("1")} className="pad">
              <p>1</p>
            </button>
            <button onClick={() => numero("2")} className="pad">
              <p>2</p>
            </button>
          </div>
          <div className="divpadrow2">
            <button onClick={() => numero("3")} className="pad">
              <p>3</p>
            </button>
            <button onClick={() => numero("9")} className="pad">
              <p>9</p>
            </button>
            <button onClick={() => numero("8")} className="pad">
              <p>8</p>
            </button>
          </div>
          <div className="divpadrow2">
            <button onClick={() => numero("7")} className="pad">
              <p>7</p>
            </button>
            <button onClick={() => numero("5")} className="pad">
              <p>5</p>
            </button>
            <button onClick={() => numero("0")} className="pad">
              <p>0</p>
            </button>
          </div>
          <div className="divpadrow2">
            <div className="padinv"></div>
            <button onClick={() => numero("6")} className="pad">
              <p>6</p>
            </button>
            <button onClick={numeroback} className="padinvback"></button>
          </div>
          <h3 className="h3ol">¿Olvidaste tu clave?</h3>
        </div>
      </div>
    </Fragment>
  );
};
