import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


// Importar css
import './styles/style.css'
import './styles/cadastro.css'
import './styles/ingresso.css'

// Importar imagens da pasta img dentro de src
import J from './img/J.png';
import matheus from './img/matheus.jpg';
import rio1 from './img/rio1.jpg';
import rio2 from './img/rio2.jpg';

// Importar scripts

// Rotas e links
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="passeioescolar" element={<Passeio_escolar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

// Cabeçalho presente em todas as páginas
const Layout = () => {
  return (
    <>
      <br></br>
      <Outlet />
    </>
  )
};

const Home = () => {
  return(
    <>
      <header>
      <img src="https://www.caragua.tur.br/wp-content/uploads/2023/06/1.jpg"></img>
      <a class="linkAdm" href="admin"><p>Admin</p></a>
      <div class="meio-header">
        <img id="logo" src={J}></img>
        <div class="meio-header-texto">
          <h1 id="parque">PARQUE NATURAL MUNICIPAL</h1>
          <h1 id="ju">JUQUERIQUERÊ</h1>
        </div>
        <p>Compre seus ingressos aqui!</p>
      </div>
        </header>
        <main>
          <section id="tickets-desc">
          <div class="titulo">
            <h1>Lazer, diversão e conexão com a natureza</h1>
            <p>Acesso ao parque com valores diferenciados e benefícios exclusivos</p>
          </div>
        
          </section>
          <br></br>
        <section id="ticket-options">
        <div class="ticket-option">
          <a href="#">
          <img src={rio1}></img>
          <p>A partir de R$0,00</p>
          <h3>Passeio Solo</h3>
          </a>
        </div>

        <div class="ticket-option">
          <a href="#">
          <img src={rio2}></img>
          <p>A partir de R$0,00</p>
          <h3>Passeio Guiado</h3>
          </a>
        </div>
        
        <div class="ticket-option">
          <a href="passeioescolar">
          <img src={matheus}></img>
          <p>A partir de R$0,00</p>
          <h3>Passeio Escolar</h3>
          </a>
        </div>
          
        </section>
      </main>

      <footer>
        <section id="info">
          <section class="info1">
            <h2>Sobre nós</h2>
            <p>Nós somos um companhia destinada à preservação e manutenção do Parque Municipal do Rio Juqueriquerê.</p>
          </section>

          <section class="info2">
            <h2>Nossos Serviços</h2>
            <ul>
              <li><a href="#">Observação de passáros</a></li>
              <li><a href="#">Trilhas</a></li>
              <li><a href="#">Passeios guiados</a></li>
            </ul>
          </section>

          <section class="info3">
            <h2>Contatos</h2>
            <p>Contact us at [insert contact information].</p>
          </section>
          </section>
              
        <p>&copy; 2024 SUS. All rights reserved.</p>
      </footer>
    </>
  )
}



const Passeio_escolar = () => {
  return (
    <>
      <div id="inicio">
        <p>Ingressos dos passeios escolares</p>
    </div>

    <div id="michelangelo">
        <p>Frase de exemplo pra descrição- Explore a natureza em sua forma mais vibrante! Traga sua turma escolar para uma jornada emocionante de aprendizado e diversão em nosso parque de conservação. Reserve seus ingressos agora e desperte o espírito da aventura!</p>
        <br />
        <p>alguma informação importante</p>
        <br />
        <p>campo aberto para informações ou cuidados ao ir para o parque....</p>
        <br />
        <p>Para mais informações, entre em contato com email@gmail.com</p>

        <div id="kevin-hart">
          <img src="https://i.pinimg.com/736x/0f/24/7b/0f247b51e209b2812761ff50f17534fe.jpg" />
        </div>
    </div>

    <div id="ingresso">
        <h2>Garanta já o seu ingresso!</h2>
    </div>

        <div id="formulario">
        <form>
            <label for="name">Nome do professor/ responsável pelos alunos:</label>
            <input type="text" id="name" name="name" required placeholder="Digite aqui" />
        
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required placeholder="Digite aqui" />
        
            <label for="quantity">Quantidade de Ingressos:</label>
            <div class="quantity">
                <input type="number" id="quantity" name="quantity" value="1" min="1" />
                <button type="button" id="decrease">-</button>
                <button type="button" id="increase">+</button>
            </div>
            <br></br>
            <div id="valor">
            <label for="value">Valor: R$ <span id="display-value">0</span>.00</label>
            <input type="text" id="name" name="name" required placeholder="Cupom/ Voucher:" />
            <button type="submit">Continuar</button>

        </div>
        </form>
        
    </div>
    </>
  )
}

export default App;
