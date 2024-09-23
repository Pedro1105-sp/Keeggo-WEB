const elem = require('../buscarP/elemetsBuscar').ELEMENTS;

class buscar{
    AcessarPaginaPrincipal(){
        cy.visit("https://advantageonlineshopping.com/#/");
        cy.wait(4000)
    }

    RealizarBusca(){
        cy.get(elem.menuBuscar);
    }

    ClicarEnter(){
        cy.get(elem.menuBuscar).type("Laptop{enter}");
        cy.wait(4000)
    }
    
    ValidarTelaPesquisada(){
        cy.wait(3000)
        cy.visit("https://advantageonlineshopping.com/#/search/?viewAll=laptop")
    }
    
}

export default new buscar();

