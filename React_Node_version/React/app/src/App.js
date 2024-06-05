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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path="passeioescolar" element={<Passeio_escolar />} />
          <Route path="passeiosolo" element={<Passeio_solo />} />
          <Route path="passeioguiado" element={<Passeio_guiado />} />
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
    <ExibirIngresso_lista></ExibirIngresso_lista>
    <CadastrarIngresso></CadastrarIngresso>
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

const Passeio_solo = () => {
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

const Passeio_guiado = () => {
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
            <h1>Ingressos existentes:</h1>

          </div>
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

      <a key={index}>
      <div class="card-trilha">
        <img src=''/>
        <div class="card-container">
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
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Descrição</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.nome}</td>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.descricao}</td>
              <td style={{ padding: '8px' }}>{cadastro_ingresso.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default App;
