import React, { Fragment, useEffect } from "react";
import "../App.css";
import Instascan from "../../src/instascan.min.js";
import { QRcodigo } from "../../src/stores.js";

export const Camara = () => {
  useEffect(() => {
    let opts = {
      // Whether to scan continuously for QR codes. If false, use scanner.scan() to manually scan.
      // If true, the scanner emits the "scan" event when a QR code is scanned. Default true.
      continuous: true,

      // The HTML element to use for the camera's video preview. Must be a <video> element.
      // When the camera is active, this element will have the "active" CSS class, otherwise,
      // it will have the "inactive" class. By default, an invisible element will be created to
      // host the video.
      video: document.getElementById("preview"),

      // Whether to horizontally mirror the video preview. This is helpful when trying to
      // scan a QR code with a user-facing camera. Default true.
      mirror: false,

      // Whether to include the scanned image data as part of the scan result. See the "scan" event
      // for image format details. Default false.
      captureImage: false,

      // Only applies to continuous mode. Whether to actively scan when the tab is not active.
      // When false, this reduces CPU usage when the tab is not active. Default true.
      backgroundScan: false,

      // Only applies to continuous mode. The period, in milliseconds, before the same QR code
      // will be recognized in succession. Default 5000 (5 seconds).
      refractoryPeriod: 5000,

      // Only applies to continuous mode. The period, in rendered frames, between scans. A lower scan period
      // increases CPU usage but makes scan response faster. Default 1 (i.e. analyze every frame).
      scanPeriod: 5,
    };

    let scanner = new Instascan.Scanner(opts as any);
    scanner.addListener("scan", function (content: any) {
      console.log(content);
      QRcodigo.set(content as any);
      scanner.stop();
      //  push("/Yapear");
    });
    Instascan.Camera.getCameras()
      .then(function (cameras: any) {
        if (cameras.length > 0) {
          scanner.start(cameras[cameras.length - 1]);
        } else {
          console.error("No cameras found.");
        }
      })
      .catch(function (e: any) {
        console.error(e as any);
      });
  }, []);

  return (
    <Fragment>
      <div className="divcamara">
        <video height="100%" id="preview"></video>
        <div className="divcamaratexto">
          <h3>
            Coloque un código de barras en el interior del rectángulo del visor
            para escanear.
          </h3>
          {/*           <img className="divcamaraover" alt="imagecover" src="over.svg" />
           */}
          <div className="divlinea animate__animated animate__flash animate__infinite"></div>
        </div>
      </div>
    </Fragment>
  );
};