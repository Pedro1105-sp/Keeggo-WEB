import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import buscar from '../../pages/buscarP'

Given("que estou na página principal do site Advantage Online Shopping", ()=>{
    buscar.AcessarPaginaPrincipal();
});

When("pesquiso Laptop na lupa", ()=>{
    buscar.RealizarBusca();
});

When("pressiono a tecla enter",() =>{
    buscar.ClicarEnter();
});

Then("sou redicerionado a página de Search Result : Laptop",() =>{
    buscar.ValidarTelaPesquisada();
});