import React, { Fragment, useEffect, useState } from "react";
import "../App.css";

import { items } from "../data/data";
import rq from "../img/qr.png";
import flecha from "../img/flecha.svg";
import ojo from "../img/ojo.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [itemsLocal, setItemLocal] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const items = localStorage.getItem("iteamYape");
    if (items) setItemLocal(JSON.parse(items!));
  }, []);

  const handleEscaner = () => {
    navigate("/camara", { replace: true });
  };
  const handleyape = () => {
    navigate("/yapear", { replace: true });
  };
  return (
    <Fragment>
      <div className="divprincipal">
        <div className="divbienvenida">
          <h3 className="h3bien">Bienvenido, yapero</h3>
        </div>
        <div className="divsaldo">
          <button className="botonsaldo">
            {/*             <img className="imgojo"  src={ojo} alt="botonsaldo" />
             */}{" "}
            Mostrar Saldo
          </button>
        </div>
        <div className="divdonar">
          <div className="divdonaricono"></div>
          <div className="divdonarnombrepri">
            <div className="divdonarnombre">
              <h3 className="h3donarnombre">VIDAWASI PERÚ</h3>
              <h3 className="h3donarlema">CONSTRUYAMOS VIDA</h3>
            </div>
          </div>
          <div className="divdonarboton">
            <button className="botondonar">Donar</button>
          </div>
        </div>
        <div className="divmovi">
          <div className="divulti">
            <h3 className="h3ulti">Últimos Movimientos</h3>
          </div>
          <div className="divvertodo">
            <h3 className="h3vertodo">Ver todos</h3>
          </div>
        </div>
        <div className="divprilista">
          {itemsLocal.map((item: any) => (
            <div key={item.fecha} className="divitem">
              <div className="divdes">
                <div className="divdes1">
                  <h3 className="h3nombre">{item.nombre}</h3>
                  <h3 className="h3fecha">{item.fecha}</h3>
                </div>
              </div>
              <div className="divmonto">
                <h3 className={item.pone}>{item.monto}</h3>
              </div>
            </div>
          ))}
          {items.map((item: any) => (
            <div key={item.fecha} className="divitem">
              <div className="divdes">
                <div className="divdes1">
                  <h3 className="h3nombre">{item.nombre}</h3>
                  <h3 className="h3fecha">{item.fecha}</h3>
                </div>
              </div>
              <div className="divmonto">
                <h3 className={item.pone}>{item.monto}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="divprifooter">
          <div className="divesca">
            <button onClick={handleEscaner} className="botonesca">
              <img className="imgqr" src={rq} alt="botonescanear" />
              Escanear QR
            </button>
          </div>
          <div className="divyapear">
            <button className="botonyapear" onClick={handleyape}>
              {/*               <img className="imgflecha" src={flecha} alt="botonyapear" />
               */}{" "}
              Yapear
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
