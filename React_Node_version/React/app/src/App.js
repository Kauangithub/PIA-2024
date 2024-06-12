import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// Importar css
import './styles/base.css'
import './styles/pagina.css'

// Importar imagens da pasta img dentro de src
import explorar from './img/explorar.png';
import logo from './img/logo.png';
import info from './img/info.png';
import site_parque from './img/Site Parque.svg';
import caragua from './img/caraguatatuba.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import flickr from './img/flickr.png'
import youtube from './img/youtube.png'


// Rotas e links
function App() {
  const [cadastro_ingresso, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:3333/Cadastro_ingresso');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='admin' element={<Admin />} />
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <Route key={index} path={cadastro_ingresso.nome} element={<Ingresso/>} />
          ))}
        </Route>
        <Route path='/edit' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

// Cabeçalho presente em todas as páginas
const Layout = () => {
  return (
    <>
      <div class="nav center horizontal">
      <div class="nav-container horizontal center">
        <a href="" class="nav-item">
          <div class="center"><img src={explorar} alt="Explorar" />
            <p>Explorar</p>
          </div>
        </a>
        <a href="/" class="nav-item home">
          <div class="center"><img src={logo} alt="Início" />
            <p>Início</p>
          </div>
        </a>
        <a href="" class="nav-item">
          <div class="center"><img src={info} alt="Informações" />
            <p>Contato</p>
          </div>
        </a>
      </div>
    </div>

    <section class="banner center" id="banner-ingressos">
      <div class="gradiente center">
        <img src={site_parque} alt="logo" class="logo" />
      </div>
    </section>
      <Outlet />
    </>
  )
};

// Páginas
const Home = () => {
  return(
    <>
      <div class="container">
      <section class="conteudo center">
        <h1>ingressos</h1>
        <p>
          Lazer, diversão e conexão com a natureza.<br />
          Acesso ao parque com valores diferenciados e benefícios exclusivos.
        </p>
        <a href="admin" class="botao">Admin</a>

        <ExibirIngresso_card></ExibirIngresso_card>
      
      </section>
    </div>

    <footer>
      <div class="container center conteudo">
        <img src={caragua}
          alt="Prefeitura Municipal de Caraguatatuba - Secretaria Municipal de Meio Ambiente" id="caraguatatuba" />

        <div class="links horizontal">
          <a href=""><img src={instagram} alt="Instagram" /></a>
          <a href=""><img src={facebook} alt="Facebook" /></a>
          <a href=""><img src={youtube} alt="YouTube" /></a>
          <a href=""><img src={flickr} alt="Flickr" /></a>
        </div>
      </div>
    </footer>
    </>
  )
}

const Admin = () => {
  return (
    <>
    <h1>Ingressos existentes:</h1>
    <br></br>
    <ExibirIngresso_lista></ExibirIngresso_lista>
    <br></br>
    <CadastrarIngresso></CadastrarIngresso>
    </>
  )
}

const Ingresso = () => {
  return (
    <>
    <ExibirIngresso_pagina></ExibirIngresso_pagina>
    </>
  )
}

const Editar = () => {
  return(
    <>
    <h1>OOOOOOO</h1>
    </>
  )
}

// Funções
const CadastrarIngresso = () => {
  const [ticketName, setTicketName] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketImage, setTicketImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      // Envia os dados para a rota usando o método POST
      await axios.post('http://localhost:3333/Cadastro_ingresso', { ticketName, ticketDescription, ticketPrice, ticketImage });
      alert('Dados enviados com sucesso!');
      // Limpa os campos após o envio bem-sucedido
      setTicketName('');
      setTicketDescription('');
      setTicketPrice('');
      setTicketImage('');
 
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };

  return(
    <div>
      <div>
        <div>
          <div>
            <h1>Dados do ingresso</h1>
          </div>
          <br />
          <div class="center">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome do ingresso:</label>
                <input
                  type="text"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Descrição:</label>
                <input
                  type="text"
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Preço:</label>
                <input
                  type="number"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Imagem</label>
                <input
                  type="file"
                  value={ticketImage}
                  onChange={(e) => setTicketImage(e.target.value)}
                  required
                />
              </div>
              <input type="submit"/>
            </form>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

const ExibirIngresso_card = () => {
  const [cadastro_ingresso, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:3333/Cadastro_ingresso');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return(
    <div class="cards">
      {cadastro_ingresso.map((cadastro_ingresso, index) => (
          //<div key={index} class="ticket-option">
            //  <ImageComponent></ImageComponent>
              //<p>A partir de R${cadastro_ingresso.preco}</p>
              //<h3>{cadastro_ingresso.nome}</h3>
         // </div>

      <a key={index} href={cadastro_ingresso.nome}>
      <div class="card-trilha">
        <div class="card-container">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK98VBjmf1Q6_3SC9Nmz8CILkBdm1BUiFLg&s'></img>
          <h4>{cadastro_ingresso.nome}</h4>
          <p>A partir de R$ {cadastro_ingresso.preco}</p>
        </div>
      </div>
      </a>
          ))}
    </div>
  )
}

const ExibirIngresso_lista = () => {
  const [cadastro_ingresso, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:3333/Cadastro_ingresso');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return(
    <table style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
          <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Descrição</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.id}</td>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.nome}</td>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.descricao}</td>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.preco}</td>
              <td style={{ padding: '8px' }}>
              <a href=''><button>Editar</button></a>
              </td>
              <td style={{ padding: '8px' }}>
              <a href=''><button>Deletar</button></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

const ExibirIngresso_pagina = () => {
  
  // capturar a url da página atual
  var nome = window.location.href
  
  // deletar a parte desnecessária da url para capturar o nome em específico para a página escolhida
  // exemplo: http://localhost:3000/AAAA, onde /^(?:\/\/|[^\/]+)*\// irá cortar o http://localhost:3000/
  var parteCortada = nome.replace(/^(?:\/\/|[^\/]+)*\//, '');
  var endereco = "http://localhost:3333/Cadastro_ingresso/" + parteCortada

  const [cadastro_ingresso, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get(endereco);
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return(
    <div>
      <div class="container">
        <div class="conteudo center">
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <div key={index}>
            <h1>{cadastro_ingresso.nome}</h1>
            <br />
            <div class="horizontal content" style={{ width: '50vw'}}>
                <div class="conteudo w50">
                    <p>
                      {cadastro_ingresso.descricao}
                    </p>
                </div>
                <div class="w50">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK98VBjmf1Q6_3SC9Nmz8CILkBdm1BUiFLg&s'></img>
                  </div>
            </div>
            <br></br>
            <form class="form-container">
                <h4 class="center">Garanta já seu ingresso</h4>
                <div class="horizontal" id="pagamento">
                    <div class="w50 gap">
                        <div>
                            <label for="name">Nome do professor/ responsável pelos alunos:</label>
                            <input type="text" id="name" name="name" required placeholder="Digite aqui" />
                        </div>
                        <div>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required placeholder="Digite aqui" />
                        </div>
                        <div>
                            <label for="quantity">Quantidade de Ingressos:</label>
                            <input type="number" id="quantity" name="quantity" value="1" min="1" />
                        </div>
                        <div class="horizontal">
                            <button type="button" id="decrease">-</button>
                            <button type="button" id="increase">+</button>
                        </div>
                    </div>
                    <div class="w50 gap">
                        <div>
                            <label for="value"><b>VALOR TOTAL R$ <span id="display-value">0</span>.00</b></label>
                            <input type="text" id="name" name="name" required placeholder="Cupom/ Voucher:" />
                        </div>
                        <button type="submit">Continuar</button>
                    </div>
                </div>
            </form>
            </div>
          ))}
        </div>
    </div>
    <br></br>
    </div>
  )
}

export default App;
