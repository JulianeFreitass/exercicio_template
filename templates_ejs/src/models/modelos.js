class Projeto{
    constructor(projeto, inicio, fim){
        this.projeto = projeto;
        this.inicio = inicio;
        this.fim = fim;

    }
}

class Usuario{
    constructor(nome, idade, formacao, contato){
        this.nome = nome;
        this.idade = idade;
        this.formacao = formacao;
        this.contato = contato;

    }
}

module.exports = {
    Projeto: Projeto,
    Usuario: Usuario
}  





