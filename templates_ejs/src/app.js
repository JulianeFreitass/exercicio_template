/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Usuario = modelo.Usuario; //Vinculação de tipo


/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', listAboutMe);

app.get('/projetos', listProjectHandler);

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("Mr.Academy", "2020-2", "2020-2"); 
    let projeto_2 = new Projeto("Pantion", "2021-1", "2021-1");
    let projeto_3 = new Projeto("Ion-X", "2021-2", "2021-2");    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listAboutMe(req, res){
     /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
     var usuario = [
        { 
            nome: 'Juliane Freitas', 
            idade: 23,
            formacao: "Analise e desenvolvimento de Sistemas", 
            contato: "Juliane.freitas55@gmail.com"
        }
    ];

    res.render('about_me.ejs', {sobre_mim: usuario});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}