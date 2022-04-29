import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ayudaboton } from "./components/Login";
import { RouteApp } from "./routes/RouteApp";

function App() {
  useEffect(() => {
    ayudaboton();
  }, []);

  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
}

export default App;
