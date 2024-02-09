class Produto {
    constructor(nome, quanDisponivel, preco) {
        this.nome = nome;
        this.quanDisponivel = quanDisponivel;
        this.preco = preco;
    }

    calcularTotal() {
        // calcula e retorna o valor total do produto multiplicando a quantidade disponível pelo preço unitário.
        let total = 0;
        return total += this.quanDisponivel * this.preco;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, quanDisponivel, preco, dataValidade) {
        super(nome, quanDisponivel, preco)
        this.dataValidade = dataValidade;
    }

    verificarValidade() {
        //Verifica se o produto perecível está dentro da data de validade, retornando true se estiver válido e false caso contrário.
        const dataAtual = new Date();

        let validadeMilesSegundos = this.dataValidade - dataAtual;
        let validadeEmDias = Math.floor(validadeMilesSegundos / (1000 * 60 * 60 * 24));
        
        if(validadeEmDias >= 0) {
            return false
        }
        return true
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProdutos(produto) {
        //  Adiciona um produto à lista de produtos no estoque.
        this.produtos.push(produto)
    }

    removerProduto(nome) {
        // Remove um produto da lista pelo nome.
        
        for (let i = 0; this.produtos.length > i; i++) {
            if(this.produtos[i].nome == nome) {
                // caso o nome seja igua eu devo perder o valor e não adicionalo a lista
                this.produtos.splice(i, 1);
                break;
            }
        }

    }

    verificaEstoqueDisponivel(nome) {
        // Verifica e exibe a quantidade disponível de um produto pelo nome.
        for(let i = 0; this.produtos.length > i; i++) {
            if(this.produtos[i].nome == nome) {
                return this.produtos[i];
            }
        }
    }

    calcularTotalEstoque() {
        // Calcula e exibe o valor total do estoque somando o valor total de cada produto.
        let total = 0;
        for(let i = 0; this.produtos.length > i; i++) {
            total += this.produtos[i].preco;
        }

        return total;
    }
}

// criar instancia do estoque
const meuEstoque = new Estoque();

// adicionar produtos ao estoque
meuEstoque.adicionarProdutos(new Produto('Camiseta', 50, 25));
meuEstoque.adicionarProdutos(new Produto('Calsa Jeans', 30, 50));
meuEstoque.adicionarProdutos(new Produto('Tênis', 20, 80));


// Verificar Valor total disponivel
meuEstoque.verificaEstoqueDisponivel('Camiseta');
meuEstoque.verificaEstoqueDisponivel('Calsa Jeans');
meuEstoque.verificaEstoqueDisponivel('Tênis');


// calcular valor total do estoque
console.log("R$:",meuEstoque.calcularTotalEstoque().toFixed(2));


// remover um produto do estoque
meuEstoque.removerProduto('Calsa Jeans');
meuEstoque.removerProduto('Camiseta');


// verificar estoque disponivel após a remoção
console.log(meuEstoque.verificaEstoqueDisponivel('Calsa Jeans'));


// Calcular valor total do estoque
console.log(meuEstoque.calcularTotalEstoque());

console.log(meuEstoque);


//console.log(produtos);
// console.log(produtos.calcularTotal());
//console.log(produtoPerecivel.verificarValidade())