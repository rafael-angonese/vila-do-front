import React from "react";
import { Route, Routes } from "react-router-dom";

import Clients from "../components/Clients";
import Conctact from "../components/Contact";
import ListFairies from "../pages/ListFairies";
import NewFairy from "../pages/NewFairy";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Conctact />} />
        <Route path="/contact" element={<Conctact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/fairies" element={<ListFairies />} />
        <Route path="/fairies/new" element={<NewFairy />} />
      </Routes>
    </>
  );
};

export default Rotas;
