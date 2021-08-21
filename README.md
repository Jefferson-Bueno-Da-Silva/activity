# Activity

Usuario : ```user@example.com```
Password : ```123456789```

## Minha Visão

A primeira coisa que eu pensei quando vi a prova foi em kanban, apesar de ter me dado muita dor de cabeça principalmente quando começei pois não fazia ideia de como criar o "agarrar" e "soltar", mas ao decorrer do projeto eu pude aplicar muitas coisas interessantes como por exemplo o "web Socket" do firebase e fazer meus cards se atualizaram automaticamente quando há uma alteração no banco.

## O projeto

Uma aplicação WEB, desenhada para controlar atividades.
Na aplicação deve ser possível:

### Dados

- [x] Controle de status
  - [x] Pendente
  - [x] Em Andamento
  - [x] Finalizado
  - [x] Cancelado

![image](https://user-images.githubusercontent.com/62211295/116022301-52029f80-a620-11eb-9ec0-0e8d7f14b0ca.png)


- [x] Card:
  - [x] Titulo
  - [x] Descrição
  - [x] Responsável

![image](https://user-images.githubusercontent.com/62211295/116022282-457e4700-a620-11eb-9469-ae4f142a7555.png)

### Funcionalidades

- [X] Modificar o status de uma atividade

![image](https://user-images.githubusercontent.com/62211295/116022223-27b0e200-a620-11eb-8f20-040992d9a1b3.png)

- [X] Modificar o responsável por uma atividade

![image](https://user-images.githubusercontent.com/62211295/116022250-34353a80-a620-11eb-9c3e-6d3ac0d3ced2.png)

- [X] Na atividade deve ser possível ver o histórico de eventos

![image](https://user-images.githubusercontent.com/62211295/116022357-6c3c7d80-a620-11eb-86a7-f760410c7f05.png)


### Autenticação

- [X] A aplicação deve possuir autenticação simples. Pode utilizar a autenticação nativa do Firebase.

![image](https://user-images.githubusercontent.com/62211295/116022159-051ec900-a620-11eb-806d-68269e3b0f54.png)


### Desafio

- [ ] Campo descrição terá que realizar um Carga-> funtion usando BigQuery ou Elasticserach para realizar busca diretamente neste campo.

## Regras de negócio

1.O Front End deve ser em React JS.
2.Todos os componentes devem ser próprios de modo que não deve ser utilizada lib externa como Material UI, ou algo similar.
3.Os componentes devem ser function components , utilizando hooks.
A base de dados deve ser Firestore, do Firebase (Google). Para isto pode criar uma conta gratuita no firebase e utilizar a SDK JS do firebase.
4.Não é necessário utilizar redux, mas pode usar se desejar.
Pode utilizar um pré-compilador de SASS/SCSS/LESS para o CSS, mas não é obrigatório, no entanto o estilo em sí também será levado em conta,
6.Pode utilizar Type Script, se não, JS no mínimo ES6.
9.Insira mais de 1 milhão de registros criando um script de carga e teste com postman este teste lendo de CSV
