import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Design from "./Pages/Design";
import Repair from "./Pages/Repair";
import Investment from "./Pages/Investment";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./assets/css/reset.css";
import "./assets/css/App.css";
import Details from "./Pages/Details";
import Layout from './Layout/Layout'
import LazyLoadBackgroundVideo from "./Components/VideoComponents/LazyLoadBackgroundVideo";
function App() {

  return (
    <BrowserRouter>
    {/* <LazyLoadBackgroundVideo  /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
          <Route path="/design" element={<Design />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
