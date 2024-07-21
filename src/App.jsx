import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from "./Pages/Design";
import Repair from "./Pages/Repair";
import Investment from "./Pages/Investment";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./assets/css/reset.css";
import "./assets/css/App.css";
import Details from "./Pages/Details";
import Layout from './Layout/Layout'
import Home from "./Pages/Home";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
