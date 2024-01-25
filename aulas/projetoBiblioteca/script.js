class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this._disponivel = true;
    }

    realizarEmprestimo() {
        if (this._disponivel) {
            this._disponivel = false;
            return true; //Emprestimo realizado com sucesso
        } else {
            return false; //Material já emprestado
        }
    }

    realizarDevolucao() {
        if(!this._disponivel) {
            this._disponivel = true;
            return true; //Devolução realizada com sucesso
        } else {
            return false; //Material já devolvido previamente
        }
    }

    toString() {
        return `${this.titulo} - ${this.autor}`
    }
}

class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }

    toString() {
        return `${super.toString()} - ${this.genero}`
    }
}

class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao) {
    const selectLivros = document.getElementById("livros");
    const selectedIndex = selectLivros.selectedIndex;

    if(selectedIndex === 0) {
        alert("Por favor, selecione um livro válido.");
        return;
    }

    const livroSelecionado = livros[selectedIndex - 1];

    if(acao === 'emprestimo') {
        const emprestimoSucesso = livroSelecionado.realizarEmprestimo();
        exibirResultado(`Emprestimo de ${livroSelecionado.titulo}: ${emprestimoSucesso? 'Sucesso' : 'Material já emprestado'}`);
    } else if (acao === 'devolucao') {
        const devolucaoSucesso = livroSelecionado.realizarDevolucao();
        exibirResultado(`Devolução de ${livroSelecionado.titulo}: ${devolucaoSucesso? 'Sucesso' : 'Material já devolvido'}`);
    }
}

function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`
}

const livros = [
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"),
    new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia"),
    new Livro("Crepúsculo", "Stephenie Meyer", "Romance"),
    new Revista("National Geographic", "National Geographic Society", "Ciência")
];

const selectLivros = document.getElementById("livros");

for(let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    option.value = i + 1; //Adiciona 1 para evitar o valor 0, que representa a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option);
}

console.log(livros[0].toString());
console.log(livros[3].toString());