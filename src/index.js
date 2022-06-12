import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function Pagina404() {
  return (
    <div>
      Página 404
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
);
