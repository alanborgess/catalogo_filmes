import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home.js';
import BuscarFilmes from './Pages/pesquisa_filme.js';
import DetalhesFilme from './Pages/detalhe_filme.js'; 
import Contato from './Pages/contato.js';
import Padrao from './Padrao/index.js';
import NaoEncontrado from './NaoEncontrado/index.js';
import Footer from './Components/footer.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Padrao />}>
          <Route index element={<Home />} />
          <Route path="buscar" element={<BuscarFilmes />} />
          <Route path="filmes/:id" element={<DetalhesFilme />} /> 
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrado/>}/> 
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
