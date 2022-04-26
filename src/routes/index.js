import React from "react";
import { Route, Routes } from "react-router-dom";

import Clients from "../components/Clients";
import Conctact from "../components/Contact";
import TestForm from "../components/TestForm/TesteForm";
import EditFairy from "../pages/EditFairy";
import ListFairies from "../pages/ListFairies";
import NewFairy from "../pages/NewFairy";
import ShowFairy from "../pages/ShowFairy";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Conctact />} />
        <Route path="/contact" element={<Conctact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/fairies" element={<ListFairies />} />
        <Route path="/fairies/:id" element={<ShowFairy />} />
        <Route path="/fairies/edit/:id" element={<EditFairy />} />
        <Route path="/fairies/new" element={<NewFairy />} />
        <Route path="/teste" element={<TestForm />} />
      </Routes>
    </>
  );
};

export default Rotas;
