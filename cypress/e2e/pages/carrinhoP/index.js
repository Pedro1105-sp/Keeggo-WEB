const elem = require('../carrinhoP/elementsCarrinho').ELEMENTS;


class carrinho{
    AcessarTelaPesquisa(){
        cy.visit("https://advantageonlineshopping.com/#/search/?viewAll=laptop");
        cy.wait(4000)
    }

    EscolherProduto(){
        //cy.get('ul').children('[id="7"]').click();
        cy.get(elem.produto).click();
        cy.get(elem.adicionar).click();
    }

    VerificarCarrinho(){
        cy.get(elem.carrinhoProd).click();
        cy.get(elem.tituloCarrinho);
    }

    telaCarrinho(){
        cy.visit("https://advantageonlineshopping.com/#/shoppingCart");
    }

}


export default new carrinho();