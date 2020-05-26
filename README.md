# Trabalho 1 - Verificação e Validação de Software

Este projeto foi construído utilizando o framework Angular em sua versão 9.1, juntametne com a biblioteca de componentes Angular Material, para auxiliar no desenvolvimento de interfaces gráficas com maior praticidade e velocidade.

## Documentação do projeto

* [**Especificação de requisitos**](https://docs.google.com/document/d/1JMMzQXDM1ULXO_XHwpeq7yFPryAYrH_ymIX2AcZkTW8/edit?usp=sharing)

## Instruções de desenvolvimento

### **Como faço para rodar o projeto na minha máquina?**

Para rodar o projeto localmente e realizar alterações, siga os seguintes passos:

1. Clone o projeto com SSH ou HTTPS

    * **SSH**: ```git clone git@github.com:munaretto/vv2.git```
    * **HTTPS**: ```git clone https://github.com/munaretto/vv2.git```

2. Vá até ```{raiz_do_projeto}/app``` e baixe as dependências com o comando ```npm install```;

3. Ainda na mesma pasta, digite ```ng serve -o``` - para executar o projeto em uma nova aba do seu navegador padrão.

4. Vá até a aba do projeto no seu navegador padrão ou acesse ```http://localhost:4200/```

### **Como faço para subir uma nova versão em produção**

Para subir uma nova versão do site em produção, siga os seguites passos:

1. Garanta que as modificações que você deseja adicionar ao projeto estão na branch **master**;
2. Em uma instância de terminal, vá até ```{raiz_do_projeto}/app``` - a pasta que contém o ```package.json``` - e digite ```npm run build_prod```;
3. Aguarde o script terminar de executar;
4. Após alguns segundos, verifique se o conteúdo do link []() foi atualizado com as modificações que você fez

**Importante**:

* **NÃO** troque de branch enquanto o script estiver em execução;
* **NÃO** é necessário commitar/enviar para o repositório o conteúdo da branch ```gh-pages```, e a sua atualização é de **exclusiva responsabilidade** do script ```build_prod```;
* Quando o script ```build_prod``` terminar de executar, a sua branch selecionada passará a ser a **master**.

### **Links úteis**

* [**Documentação do Angular**](https://angular.io/docs)
* [**Documentação do Angular Material**](https://material.angular.io/components/categories)
