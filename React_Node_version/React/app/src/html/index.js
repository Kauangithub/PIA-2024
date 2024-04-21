import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// Importar imagens da pasta img dentro de src
import J from './img/J.png';
import logo from './img/logo.jpg';
import matheus from './img/matheus.jpg';
import rio1 from './img/rio1.jpg';
import rio2 from './img/rio2.png';

// Importar css
import '../styles/style.css'

// Página principal dos ingressos
const Index = () => {
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
            <a href="ingresso.html">
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

export default Index;