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
          <Route path='edit' element={<Editar />} />
          <Route path='delete' element={<Deletar />} />
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <Route key={index} path={cadastro_ingresso.nome} element={<Ingresso />} />
          ))}
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
  return (
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
  return (
    <>
      <EditarIngresso></EditarIngresso>
    </>
  )
}

const Deletar = () => {
  return (
    <>
      <DeletarIngresso></DeletarIngresso>
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

  return (
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
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Descrição:</label>
                <input
                  type="text"
                  value={ticketDescription}
                  placeholder='Digite aqui'
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
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Imagem</label>
                <input
                  type="text"
                  value={ticketImage}
                  placeholder='Coloque o nome do arquivo da imagem, exemplo: Teste01.jpg (obs: Ela deve estar na pasta React/app/public/img)'
                  onChange={(e) => setTicketImage(e.target.value)}
                  required
                />
              </div>
              <input type="submit" />
            </form>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

const EditarIngresso = () => {
  const [ticketName, setTicketName] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketImage, setTicketImage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para a rota usando o método POST
      await axios.put('http://localhost:3333/Cadastro_ingresso/edit', { ticketName, ticketDescription, ticketPrice, ticketImage, ticketId });
      alert('Dados enviados com sucesso!');
      // Limpa os campos após o envio bem-sucedido
      setTicketName('');
      setTicketDescription('');
      setTicketPrice('');
      setTicketImage('');
      setTicketId('');

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Editar ingresso</h1>
          </div>
          <br />
          <div class="center">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Informe o ID do ingresso a ser editado:</label>
                <input
                  type="number"
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Nome do ingresso:</label>
                <input
                  type="text"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Descrição:</label>
                <input
                  type="text"
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Preço:</label>
                <input
                  type="number"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(e.target.value)}
                  placeholder='Digite aqui'
                  required
                />
              </div>
              <div>
                <label>Imagem</label>
                <input
                  type="text"
                  value={ticketImage}
                  placeholder='Coloque o nome do arquivo da imagem, exemplo: Teste01.jpg (obs: Ela deve estar na pasta React/app/public/img)'
                  onChange={(e) => setTicketImage(e.target.value)}
                  required
                />
              </div>
              <input type="submit" />
            </form>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

const DeletarIngresso = () => {
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var caminho = 'http://localhost:3333/Cadastro_ingresso/' + ticketId
      // Envia a requisição DELETE para a rota
      await axios.delete(caminho);
      alert('Ingresso deletado com sucesso!');
      // Limpa o campo após o envio bem-sucedido
      setTicketId('');
    } catch (error) {
      console.error('Erro ao deletar ingresso:', error);
      alert('Erro ao deletar ingresso. Consulte o console para mais detalhes.');
    }
  };

  return (
    <div>
      <h1>Deletar Ingresso</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Informe o ID do ingresso a ser deletado:</label>
          <input
            type="number"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Deletar Ingresso" />
      </form>
    </div>
  );
};

const ExibirIngresso_card = () => {
  const [cadastro_ingresso, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:3333/Cadastro_ingresso');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return (
    <div class="cards">
      {cadastro_ingresso.map((cadastro_ingresso, index) => (

        <a key={index} href={cadastro_ingresso.nome}>
          <div class="card-trilha">
            <div class="card-container">
              <img src={process.env.PUBLIC_URL + './img/' + cadastro_ingresso.img} alt="Imagem do Banco de Dados" style={{ maxWidth: '100%' }} />
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

  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <div class="center">
        <div class="horizontal">
          <a href="edit" class="botao">Editar</a>
          <a href="delete" class="botao">Deletar</a>
        </div>
      </div>
    </div>
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

  return (
    <div>
      <div class="container">
        <div class="conteudo center">
          {cadastro_ingresso.map((cadastro_ingresso, index) => (
            <div key={index}>
              <h1>{cadastro_ingresso.nome}</h1>
              <br />
              <div class="horizontal content" style={{ width: '50vw' }}>
                <div class="conteudo w50">
                  <p>
                    {cadastro_ingresso.descricao}
                  </p>
                </div>
                <div class="w50">
                  <img src={process.env.PUBLIC_URL + './img/' + cadastro_ingresso.img} alt="Imagem do Banco de Dados" style={{ maxWidth: '100%' }} />
                </div>
              </div>
              <br></br>
              <FormCompraIngresso></FormCompraIngresso>
            </div>
          ))}
        </div>
      </div>
      <br></br>
    </div>
  )
}

const FormCompraIngresso = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <form className="form-container">
        <h4 className="center">Garanta já seu ingresso</h4>
        <div className="horizontal" id="pagamento">
          <div className="w50 gap">
            <div>
              <label htmlFor="name">Nome do professor/ responsável pelos alunos:</label>
              <input type="text" id="name" name="name" required placeholder="Digite aqui" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required placeholder="Digite aqui"/>
            </div>
            <div>
              <label htmlFor="quantity">Quantidade de Ingressos:</label>
              <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                required 
                value={quantity} // Valor do input controlado pelo estado quantity
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} // Garante que só números válidos são aceitos
                placeholder='Adicione aqui' 
              />
            </div>
            <div className="horizontal">
              <button type="button" id="decrease" onClick={decreaseQuantity}>-</button>
              <button type="button" id="increase" onClick={increaseQuantity}>+</button>
            </div>
          </div>
          <div className="w50 gap">
            <div>
              <label htmlFor="value"><b>VALOR TOTAL R$ <span id="display-value">0</span>.00</b></label>
              <input type="text" id="name" name="name" required placeholder="Cupom/ Voucher:" />
            </div>
            <button type="submit">Continuar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
