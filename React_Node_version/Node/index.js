const express=require('express');
const cors=require('cors');
const blobUtil = require('blob-util');

const app = express();
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(cors());

const PORT = 3333;
app.listen(PORT, () => 
{console.log("Tudo funcionando chefia 😎👍")}
);

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'aluno',
    database: 'pia_2024'
});

app.get('/', (req, res) => {
    res.send("AAAAAAAAAAAAAAA")
});

// MÉTODOS PARA A TABELA CADASTRO_INGRESSO

const getAllCadastro_ingresso = async () => {
    const [query] = await connection.execute 
    ('select * from Cadastro_ingresso');
    return query
}

app.get('/Cadastro_ingresso', async (req,res) => {
    const consulta = await getAllCadastro_ingresso();
    return res.status(200).json(consulta)
})
  

app.get('/Cadastro_ingresso/:nome', async (req,res)=>{
    const {nome} = req.params;
    const [query] = await connection.execute
    ('select * from Cadastro_ingresso where nome = ?', [nome]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/Cadastro_ingresso/img/:nome', async (req, res) => {
    const { nome } = req.params;
    const [query] = await connection.execute(
        'SELECT img FROM Cadastro_ingresso WHERE nome = ?',
        [nome]
    );

    if (query.length === 0) {
        return res.status(404).json({ mensagem: 'Não encontrado.' }); // 404 para "Not Found"
    }

    const imgBlob = query[0].img;
    const buffer = Buffer.from(imgBlob, 'binary');
    const base64Image = buffer.toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return res.status(200).send(imageUrl);
});

app.post('/Cadastro_ingresso', async (req,res)=>{
    const {ticketName, ticketDescription, ticketPrice, ticketImage} = req.body;
    const [query] = await connection.execute('insert into Cadastro_ingresso (nome, descricao, preco, img) values(?,?,?,?)', [ticketName, ticketDescription, ticketPrice, ticketImage]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.delete('/Cadastro_ingresso/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from Cadastro_ingresso where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Ingresso excluído com sucesso.' });
})

// MÉTODOS PARA A TABELA INGRESSO

const getAllIngresso = async () => {
    const [query] = await connection.execute 
    ('select * from Ingresso');
    return query
}

app.get('/Ingresso', async (req,res) => {
    const consulta = await getAllIngresso();
    return res.status(200).json(consulta)
})

app.get('/Ingresso/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute
    ('select * from Ingresso where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/Ingresso', async (req,res)=>{
    const {nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco} = req.body;
    const [query] = await connection.execute('insert into Ingresso (nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco) values(?,?,?,?,?,?,?)', [nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})
