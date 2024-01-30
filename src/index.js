import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Bahamas from "./Pages/Bahamas";
import Mykanos from "./Pages/Mykanos";
import Hawaii from "./Pages/Hawaii";
import Moonlight from "./Pages/Moonlight";
import Aloha from "./Pages/Aloha";
import Phuket from "./Pages/Phuket";
import Maldives from "./Pages/Maldives";
import IDYLL from "./Pages/IDYLL";
import Pearl from "./Pages/Pearl";
import Contact from "./Pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
        </Route>
        <Route path="/bahamas" element={<Bahamas />}></Route>
        <Route path="/mykanos" element={<Mykanos />}></Route>
        <Route path="/hawaii" element={<Hawaii />}></Route>
        <Route path="/moonlight" element={<Moonlight />}></Route>
        <Route path="/aloha" element={<Aloha />}></Route>
        <Route path="/phuket" element={<Phuket />}></Route>
        <Route path="/maldives" element={<Maldives />}></Route>
        <Route path="/idyll" element={<IDYLL   />}></Route>
        <Route path="/pearl" element={<Pearl   />}></Route>
        <Route path="/contact" element={<Contact   />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
