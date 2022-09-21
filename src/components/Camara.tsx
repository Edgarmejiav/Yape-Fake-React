import QrScanner from "qr-scanner"; // if installed via package and bundling with a module bundler like webpack or rollup
import { useEffect } from "react";

export const Camara = () => {
  const videoElem: any = document.getElementById("qr-video")!;
  var scanner: QrScanner | null = null;
  useEffect(() => {
    if (videoElem != null) {
      scanner = new QrScanner(videoElem, (result) =>
        console.log("decoded qr code:", result)
      );
    }
  }, [videoElem]);

  return (
    <>
      <video id="qr-video"></video>
      <div>
        <footer>
          <button onClick={() => scanner?.start()}>Open Camera</button>
          <button onClick={() => scanner?.stop()}>Close Camera</button>
        </footer>
      </div>
    </>
  );
};
