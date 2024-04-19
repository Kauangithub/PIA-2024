const express=require('express');
const cors=require('cors');

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
    password: ''
});

app.get('/', (req, res) => {
    res.send("AAAAAAAAAAAAAAA")
});

// MÉTODOS PARA A TABELA CADASTRO_INGRESSO

const getAllCadastro_ingresso = async () => {
    const [query] = await connection.execute 
    ('select * from Pia_2024.Cadastro_ingresso');
    return query
}

app.get('/Cadastro_ingresso', async (req,res) => {
    const consulta = await getAllCadastro_ingresso();
    return res.status(200).json(consulta)
})

app.get('/Cadastro_ingresso/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute
    ('select * from Pia_2024.Cadastro_ingresso where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/Cadastro_ingresso', async (req,res)=>{
    const {nome, descricao, preco, img} = req.body;
    const [query] = await connection.execute('insert into Pia_2024.Cadastro_ingresso (nome, descricao, preco, img) values(?,?,?,?)', [nome, descricao, preco, img]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

// MÉTODOS PARA A TABELA INGRESSO

const getAllIngresso = async () => {
    const [query] = await connection.execute 
    ('select * from Pia_2024.Ingresso');
    return query
}

app.get('/Ingresso', async (req,res) => {
    const consulta = await getAllIngresso();
    return res.status(200).json(consulta)
})

app.get('/Ingresso/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute
    ('select * from Pia_2024.Ingresso where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/Ingresso', async (req,res)=>{
    const {nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco} = req.body;
    const [query] = await connection.execute('insert into Pia_2024.Ingresso (nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco) values(?,?,?,?,?,?,?)', [nome_prof, email, qtd, data_ingresso, data_compra, preco_total, preco]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})
