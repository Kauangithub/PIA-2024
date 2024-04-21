import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// Importar os htmls
import index from './html/index.js'
import admin from './html/admin.js'
import passeio_escolar from './html/passeio_escolar.js'
import passeio_guiado from './html/passeio_guiado.js'
import passeio_solo from './html/passeio_solo.js'

// Rotas e links
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={index} />
         <Route path="admin" element={admin} />
         <Route path="passeioescolar" element={passeio_escolar} />
         <Route path="passeiosolo" element={passeio_solo} />
         <Route path="passeioguiado" element={passeio_guiado} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

// Cabeçalho presente em todas as páginas
const Layout = () => {

};

export default App;
