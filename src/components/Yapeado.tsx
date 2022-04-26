import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import html2canvas from "../../src/html2canvas.min.js";
export const Yapeado = () => {
  let navigate = useNavigate();
  async function shareCanvas() {
    const canvas = await html2canvas(document.getElementById("capture"));
    const dataUrl = canvas.toDataURL("imgage/png");
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
      new File([blob], "animation.png", {
        type: blob.type,
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
  }
  function subbotoncompartir() {
    /*  bodymovin.goToAndStop(54, true);
    shareCanvas(); */
  }

  function subbotoninicio() {
    navigate("/home");
  }

  function subbotonyapearte() {
    navigate("/camara");
  }

  return (
    <Fragment>
      <div className="divyapeadomain">
        <div id="capture" className="divdegrado">
          <div className="divyapeadotop">
            <div id="bm" className="divyapeadotopcell"></div>
          </div>
          <div className="divyapeadomedio">
            <div className="divyapeadomediomedio">
              <h3 className="letrayapeaste">¡Yapeaste!</h3>
              <div className="montodiv">
                <span className="spanmontoya">S/</span>
                <span className="inputmontoya">{"$SecDaMonto"}</span>
              </div>
              <h3 className="letrasnombre">{"$PriDaNombre"}</h3>
              <h3 className="letrasfecha">{"$SecDaFecha"}</h3>
              {/*  {#if $SecDaDes !== ""}
              <div className="divletrasdes"><h3 className="letrasdescri">{$SecDaDes}</h3></div>
              {/if} */}
            </div>
          </div>
          <div className="divyapeadomediodown"></div>
        </div>
        <div className="divyapeadoabajo">
          <div className="latbot">1</div>
          <div className="mediobot">
            <button
              onClick={subbotoncompartir}
              className="botoncompartir"
            ></button>
            <h3 className="textoabajoboton">Compartir</h3>
          </div>
          <div className="mediobot">
            <button onClick={subbotoninicio} className="botoninicioya"></button>
            <h3 className="textoabajoboton">Ir a inicio</h3>
          </div>
          <div className="mediobot">
            <button
              onClick={subbotonyapearte}
              className="botonyapearte"
            ></button>
            <h3 className="textoabajoboton">Nuevo Yapeo</h3>
          </div>
          <div className="latbot">5</div>
        </div>
      </div>
    </Fragment>
  );
};
