import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import Sobre from "./Views/Sobre";
import Promocoes from "./Views/Promocoes";
import Destinos from "./Views/Destinos";
import Contato from "./Views/Contato";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Cadastro from "./Views/Cadastro";
import Login from "./Components/Login";
import ClienteEdita from "./Components/ClienteEdita";
import ClienteLista from "./Components/ClienteLista";
import CompraEdita from "./Components/CompraEdita";
import CompraLista from "./Components/CompraLista";
import PassagemEdita from "./Components/PassagemEdita";
import PassagemLista from "./Components/PassagemLista";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/Sobre" element={<Sobre/>} />
      <Route path="/Promocoes" element={<Promocoes/>} />
      <Route path="/Destinos" element={<Destinos/>} />
      <Route path="/Contato" element={<Contato/>} />
      <Route path="/Cadastro" element={<Cadastro/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/cliente/:id" exact={true} component={ClienteEdita}/>
      <Route path="/cliente" component={ClienteLista}/>
      <Route path="/compra/:id" exact={true} component={CompraEdita}/>
      <Route path="/compra" component={CompraLista}/>
      <Route path="/passagem/:id" exact={true} component={PassagemEdita}/>
      <Route path="/passagem" component={PassagemLista}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;