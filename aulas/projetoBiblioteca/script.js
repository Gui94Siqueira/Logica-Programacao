class MaterialBibliografica {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
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