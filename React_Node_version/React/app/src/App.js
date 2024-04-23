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
import './scripts/script.js'

// Rotas e links
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
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

const Admin = () => {
  return (
    <>
    <div class="container">
        <h1>Gerenciar Ingressos</h1>
        <div id="ingexistentes">
            <ul id="listaIng">
                
            </ul>
        </div>
        <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/1/1112.png" /></a>
        <form id="ticketForm" method="post">
            <span id="span">
            <div class="form-group">
                <label for="ticketName">Nome do Ingresso:</label>
                <input type="text" id="ticketName" name="ticketName" required />
            </div>
            <div class="form-group">
                <label for="ticketDescription">Descrição:</label>
                <textarea id="ticketDescription" name="ticketDescription" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="ticketPrice">Preço:</label>
                <input type="number" id="ticketPrice" name="ticketPrice" step="0.01" required />
            </div>
            <div class="form-group">
                <label for="ticketImage">Imagem:</label>
                <input type="file" id="ticketImage" name="ticketImage" accept="image/*" required />
            </div>
            <button id="canc" type="button" onclick="cancel()">Cancelar</button>
            </span>

            <div class="botoes">
            <button id="add" type="submit">Adicionar Ingresso</button>
            
            <button id="rem" type="button" onclick="remIng()">Remover Ingresso</button>
            </div>
            
        </form>
    </div>
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
            <label for="email">Data:</label>

            <div class="calendar">
                <div class="navigation">
                    <div class="nav-button" id="prev-month">&lt;</div>
                    <div class="month">
                        <div class="nav-button" id="prev-year">&lt;&lt;</div>
                        <div class="month-text" id="current-month">Abril 2024</div>
                        <div class="nav-button" id="next-year">&gt;&gt;</div>
                    </div>
                    <div class="nav-button" id="next-month">&gt;</div>
                </div>
                <div class="weekdays">
                    <div class="weekday">dom.</div>
                    <div class="weekday">seg.</div>
                    <div class="weekday">ter.</div>
                    <div class="weekday">qua.</div>
                    <div class="weekday">qui.</div>
                    <div class="weekday">sex.</div>
                    <div class="weekday">sáb.</div>
                </div>
                <div class="days" id="days"></div>

                <div class="temporada"><p>Temporada 2024</p></div>
                <p>Fechado / aguardando tarifa</p>
            </div>
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
