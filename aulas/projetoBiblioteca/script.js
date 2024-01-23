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