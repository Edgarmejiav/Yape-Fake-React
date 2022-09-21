import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Yapear = () => {
  let navigate = useNavigate();

  const [nombreya, setNombreya] = useState("");
  const [yapemonto, setYapemonto] = useState("");
  const [yapedescri, setYapedescri] = useState("");
  const [inputdisabled, setInputdisabled] = useState(true);
  const [width, setwidth] = useState(10.6);

  nombreya.slice(14, -16);
  nombreya.slice(parseInt(nombreya.slice(0, 2)) + 2 + 25);
  nombreya
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  function botonatras() {
    navigate("/camara");
  }

  function botonequis() {
    navigate("/home");
  }

  function subbotonyapearya() {
    // Creamos array con los meses del año
    const meses = [
      "Ene.",
      "Feb.",
      "Mar.",
      "Abr.",
      "May.",
      "Jun.",
      "Jul.",
      "Ago.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dic.",
    ];
    // Creamos el objeto fecha instanciándolo con la clase Date
    const fecha = new Date();
    // Construimos el formato de salida
    let fechas =
      fecha.getDate() +
      " " +
      meses[fecha.getMonth()] +
      " " +
      fecha.getFullYear() +
      " - ";

    let minutos: any = "0";

    if (fecha.getMinutes() < 10) {
      minutos = "0" + fecha.getMinutes();
    } else {
      minutos = fecha.getMinutes();
    }

    if (fecha.getHours() > 12) {
      fechas = fechas + (fecha.getHours() - 12) + ":" + minutos + " pm";
    } else if (fecha.getHours() == 0) {
      fechas = fechas + "12" + ":" + minutos + " am";
    } else {
      fechas = fechas + fecha.getHours() + ":" + minutos + " am";
    }

    const item = {
      nombre: "Juan Carlos Castillo Pérez",
      fecha: fechas,
      monto: `- S/ ${yapemonto}.00`,
      pone: "h3montone",
    };
    const items = [];

    items.push(item);
    localStorage.setItem("iteamYape", JSON.stringify(items));
    navigate("/Yapeado");
  }
  useEffect(() => {
    yapemonto.length > 0 ? setInputdisabled(false) : setInputdisabled(true);
  }, [yapemonto]);

  useEffect(() => {
    document.getElementById("inputmonto")!.focus();
  }, []);

  return (
    <div className="divyapearmain">
      <div className="divyapeartop">
        <div className="divyapeariz">
          <button onClick={botonatras} className="botonatrasya"></button>
        </div>
        <div className="divyapearme">
          <h3>Yapear a</h3>
        </div>
        <div className="divyapearde">
          <button onClick={botonequis} className="botonequisya"></button>
        </div>
        <div className="divnombreyapear">
          <h3 className="nombreyapear">{nombreya}</h3>
        </div>
      </div>
      <div className="divyapearmedio">
        <span className="spanmonto">S/</span>
        <input
          required
          value={yapemonto}
          onChange={(e) => {
            setYapemonto(e.currentTarget.value as any);
            setwidth(e.currentTarget.value.length * 10.6);
          }}
          maxLength={10}
          type="number"
          className="inputmonto"
          style={{ width: `${width}vw` }}
          id="inputmonto"
          placeholder="0"
        />

        <div className="puedesyapear">Puedes Yapear hasta S/500 diarios</div>
      </div>
      <div className="divyapeardown">
        <input
          type="text"
          value={yapedescri}
          onChange={(e) => setYapedescri(e.currentTarget.value)}
          className="inputdesc"
          name="inputdes"
          placeholder="Agregar mensaje"
        />
        <button
          disabled={inputdisabled}
          onClick={subbotonyapearya}
          className="botonyapearya"
        >
          Yapear
        </button>
      </div>
    </div>
  );
};
