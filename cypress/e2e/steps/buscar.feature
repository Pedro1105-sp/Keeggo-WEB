Feature: Buscar

    Como usuário do site, eu quero realizar uma busca dos produtos na página principal
    Para que eu possa escolher e saber mais sobre os produtos disponíveis

Scenario: CT001 - REALIZAR BUSCA DO PRODUTO LAPTOP

Given que estou na página principal do site Advantage Online Shopping
When pesquiso Laptop na lupa
And pressiono a tecla enter
Then sou redicerionado a página de Search Result : Laptop