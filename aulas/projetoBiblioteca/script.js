class MaterialBibliografica {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmpresimo() {
        if (this.disponivel) {
            this.disponivel = false;
            return true; // Emprestimo realizado com sucesso
        } else {
            return false; // Material já emprestado
        }
    }

    realzarDevolucao() {
        if(!this.disponivel) {
            this.disponivel = true;
            return true; // Livro devolvido com sucesso
        } else {
            return false; // Material já devolvido previamente
        }
    }
}

class Livro extends MaterialBibliografica {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
}

class Revista extends MaterialBibliografica {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao) {
    

}

const livros = [
    new Livro("o Senhor dos Aneis", "J.R.R. Tolkien", "Fantasia"),
    new Livro("Harry Polter e a Pedra Filosofal", "J.K. Rowling", "Fantasia"),
    new Livro("Crepúsculo", "Stephenie Meyer", "Romance"),
    new Revista("National Geografic", "National Geographic society", "Ciência")
];

const selectLivros = document.getElementById("livros");

for(let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    option.value = i + 1; // Adiciona 1 paraevitar o valor 0, que repreenta a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option); 
}