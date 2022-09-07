class Projeto{
    constructor(projeto, inicio, fim){
        this.projeto = projeto;
        this.inicio = inicio;
        this.fim = fim;

    }
}

class Usuario{
    constructor(nome, idade, contato, formacao){
        this.nome = nome;
        this.idade = idade;
        this.contato = contato;
        this.formacao = formacao;

    }
}

module.exports = {
    Projeto: Projeto,
    Usuario: Usuario
}  





