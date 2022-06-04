import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contatos from './pages/Contatos';
import Inicio from './pages/Inicio';
import Receitas from './pages/Receitas';
import ReceitasInternas from './pages/ReceitasInternas';

const MyRoutes: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/receitas" element={<Receitas />} >
                <Route path=":id" element={<ReceitasInternas />} />
            </Route>
            <Route path="/contato" element={<Contatos />} />

        </Routes>
      </BrowserRouter>
  );
}

export default MyRoutes;