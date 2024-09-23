import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import carrinho from '../../pages/carrinhoP'

Given("que estou na tela Search Result: Laptop", ()=>{
    carrinho.AcessarTelaPesquisa();
});

When("seleciono o produto que quero compra", ()=>{
    carrinho.EscolherProduto();
});

Then("o produto é inserido em meu carrinho",() =>{
    carrinho.VerificarCarrinho();
});


Given("que não inseri nenhum produto em meu carrinho", ()=>{
    carrinho.telaCarrinho();
});

When("clico no icon de um carrinho", ()=>{
    carrinho.VerificarCarrinho();
});

Then("meu carrinho está vazio",() =>{
    carrinho.VerificarCarrinho();
});