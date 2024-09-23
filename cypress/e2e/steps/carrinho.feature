Feature: Carrinho de compra

    Como usuário do site, eu quero inserir um produto no meu carrinho de compra
    Para que eu possa realizar a compra

Scenario: CT002 - INCLUIR PRODUTO BUSCADO NO CARRINHO

Given que estou na tela Search Result: Laptop
When seleciono o produto que quero compra
Then o produto é inserido em meu carrinho


Scenario: CT003 - VERIFICAR OS PRODUTOS INSERIDOS NO MEU CARRINHO

Given que não inseri nenhum produto em meu carrinho
When clico no icon de um carrinho
Then meu carrinho está vazio