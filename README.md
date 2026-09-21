# FoodGo 🍔

Aplicativo mobile de delivery desenvolvido com **React Native** e
**Expo**, como atividade acadêmica.

O projeto consiste em um aplicativo inspirado na proposta de plataformas
de delivery, permitindo visualizar restaurantes, consultar cardápios,
visualizar detalhes de pratos, adicionar itens ao carrinho e consultar
informações do perfil.

> **Observação:** o FoodGo é um projeto acadêmico com identidade própria
> e dados estáticos. Ele não possui integração real com o iFood ou com
> serviços de entrega.

------------------------------------------------------------------------

## 📱 Sobre o projeto

O objetivo do projeto é aplicar os conhecimentos apresentados em aula
utilizando o **Expo Go** para desenvolver um aplicativo mobile.

O aplicativo foi construído a partir de uma estrutura simples,
utilizando navegação entre telas e dados estáticos em JavaScript.

### Principais funcionalidades

-   Tela inicial de Login
-   Listagem de restaurantes
-   Visualização do restaurante e seu cardápio
-   Detalhes dos pratos
-   Adição de produtos ao carrinho
-   Visualização do carrinho
-   Finalização do pedido
-   Tela de perfil do usuário
-   Visualização de pedidos anteriores

------------------------------------------------------------------------

## 🖥️ Tecnologias utilizadas

-   **React Native**
-   **Expo**
-   **Expo Go**
-   **JavaScript**
-   **Expo Router**
-   **Git**
-   **GitHub**

------------------------------------------------------------------------

## 📱 Telas do aplicativo

O projeto possui as seis telas solicitadas na atividade.

### 1. Splash / Login

Tela inicial do aplicativo.

Possui:

-   Nome do aplicativo
-   Mensagem de apresentação
-   Botão **Entrar**

Ao clicar em **Entrar**, o usuário é direcionado para a tela inicial.

------------------------------------------------------------------------

### 2. Home

Tela principal do aplicativo.

Apresenta:

-   Saudação ao usuário
-   Lista de restaurantes
-   Nome do restaurante
-   Categoria
-   Avaliação
-   Tempo estimado de entrega
-   Acesso ao carrinho
-   Acesso ao perfil

------------------------------------------------------------------------

### 3. Restaurante

Apresenta as informações do restaurante selecionado e seu cardápio.

São exibidos:

-   Nome do restaurante
-   Descrição
-   Lista de pratos
-   Nome dos pratos
-   Descrição
-   Preço

Ao selecionar um prato, o usuário é direcionado para a tela de detalhes.

------------------------------------------------------------------------

### 4. Detalhe do prato

Apresenta as informações completas de um prato.

Possui:

-   Imagem/representação do prato
-   Nome
-   Preço
-   Descrição
-   Botão **Adicionar ao carrinho**

------------------------------------------------------------------------

### 5. Carrinho

Apresenta os produtos adicionados ao pedido.

Possui:

-   Nome do produto
-   Quantidade
-   Preço
-   Total do pedido
-   Botão **Finalizar pedido**
-   Opção para continuar comprando

------------------------------------------------------------------------

### 6. Perfil

Apresenta informações estáticas do usuário.

Possui:

-   Nome
-   E-mail
-   Endereço
-   Pedidos anteriores

------------------------------------------------------------------------

## 📂 Estrutura do projeto

``` text
FoodGo/
│
├── assets/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── _layout.js
│   │   ├── index.js
│   │   ├── home.js
│   │   ├── restaurante.js
│   │   ├── prato.js
│   │   ├── carrinho.js
│   │   └── perfil.js
│   │
│   ├── components/
│   │
│   └── data/
│       └── restaurants.js
│
├── app.json
├── package.json
└── README.md
```

### Descrição das principais pastas

#### `src/app/`

Contém as telas e a configuração de navegação do aplicativo.

-   `_layout.js` --- configuração do Expo Router.
-   `index.js` --- tela de Login.
-   `home.js` --- tela principal.
-   `restaurante.js` --- tela do restaurante e cardápio.
-   `prato.js` --- detalhes do prato.
-   `carrinho.js` --- carrinho de compras.
-   `perfil.js` --- perfil do usuário.

#### `src/data/`

Contém os dados utilizados pelo aplicativo.

O arquivo:

``` text
restaurants.js
```

armazena os restaurantes, suas categorias, avaliações, tempos de entrega
e os pratos disponíveis.

Os dados são estáticos e não dependem de um banco de dados.

#### `src/components/`

Diretório destinado aos componentes reutilizáveis do aplicativo.

------------------------------------------------------------------------

## 🗃️ Dados dos restaurantes

Os restaurantes são definidos no arquivo:

``` text
src/data/restaurants.js
```

Atualmente o projeto possui exemplos como:

-   Burger House
-   Pizza Mania
-   Sushi House

Cada restaurante possui seus próprios pratos.

Exemplo:

``` javascript
{
  id: 1,
  name: "Burger House",
  category: "Hambúrguer • Lanches",
  rating: "4.8",
  deliveryTime: "30-40 min",
  image: "🍔",
  foods: [
    {
      id: 1,
      name: "Classic Burger",
      price: 29.9,
      image: "🍔",
      description: "Hambúrguer artesanal..."
    }
  ]
}
```

------------------------------------------------------------------------

# 🚀 Como executar o projeto

## 1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

-   **Node.js LTS**
-   **npm**
-   **Expo Go** no celular
-   **Git** (caso queira trabalhar com o repositório)

------------------------------------------------------------------------

## 2. Clonar o repositório

No terminal:

``` bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

``` bash
cd FoodGo
```

------------------------------------------------------------------------

## 3. Instalar as dependências

Execute:

``` bash
npm install
```

------------------------------------------------------------------------

## 4. Iniciar o Expo

Execute:

``` bash
npx expo start
```

Depois disso, será exibido um QR Code no terminal ou no navegador.

Abra o aplicativo **Expo Go** no celular e escaneie o QR Code.

O celular e o computador devem estar conectados à mesma rede para
utilizar a conexão local normalmente.

------------------------------------------------------------------------

## 🔄 Comandos úteis

Iniciar o projeto:

``` bash
npx expo start
```

Iniciar utilizando túnel, caso existam problemas de conexão na rede:

``` bash
npx expo start --tunnel
```

Limpar o cache do Expo:

``` bash
npx expo start -c
```

Instalar dependências:

``` bash
npm install
```

------------------------------------------------------------------------

# 🧭 Navegação

O projeto utiliza o **Expo Router** para realizar a navegação entre as
telas.

O fluxo principal é:

``` text
Login
  │
  ▼
Home
  │
  ▼
Restaurante
  │
  ▼
Detalhe do prato
  │
  ▼
Carrinho
  │
  ▼
Finalização do pedido
```

A partir da Home também é possível acessar:

``` text
Home ──────► Perfil
  │
  └────────► Carrinho
```

------------------------------------------------------------------------

# 🛒 Fluxo de compra

O fluxo básico de utilização do aplicativo é:

``` text
1. Usuário abre o aplicativo
        ↓
2. Clica em "Entrar"
        ↓
3. Acessa a Home
        ↓
4. Escolhe um restaurante
        ↓
5. Visualiza o cardápio
        ↓
6. Escolhe um prato
        ↓
7. Visualiza os detalhes
        ↓
8. Adiciona ao carrinho
        ↓
9. Visualiza o total
        ↓
10. Finaliza o pedido
```

------------------------------------------------------------------------

# 💾 Banco de dados

O projeto **não utiliza banco de dados**.

Os dados dos restaurantes, pratos e informações do usuário são estáticos
e ficam armazenados no próprio código.

Essa abordagem foi utilizada porque o objetivo da atividade é
desenvolver a interface e a navegação de um aplicativo mobile utilizando
Expo Go.

------------------------------------------------------------------------

# 🔧 Desenvolvimento

O projeto foi desenvolvido de forma incremental, utilizando Git para
registrar as etapas de desenvolvimento.

A atividade solicita um mínimo de **20 commits**, portanto o
desenvolvimento foi dividido em etapas, como:

``` text
- Criação do projeto Expo
- Configuração da navegação
- Criação da tela de Login
- Criação da Home
- Criação dos restaurantes
- Criação do cardápio
- Criação da tela de detalhes
- Criação do carrinho
- Criação do perfil
- Melhorias de interface
- Correções e testes
```

Cada alteração relevante deve ser registrada em um commit separado.

------------------------------------------------------------------------

# 📌 Requisitos da atividade atendidos

  Requisito                  Situação
  -------------------------- --------------------
  Utilização do Expo Go      ✅
  Aplicativo mobile          ✅
  Mínimo de 6 telas          ✅
  Login                      ✅
  Home                       ✅
  Restaurante                ✅
  Detalhe do prato           ✅
  Carrinho                   ✅
  Perfil                     ✅
  Navegação entre telas      ✅
  Dados estáticos            ✅
  Repositório GitHub         ✅
  Mínimo de 20 commits       Em desenvolvimento
  Documentação obrigatória   Não solicitada

------------------------------------------------------------------------

# 🎓 Objetivo acadêmico

O projeto foi desenvolvido com o objetivo de praticar conceitos de
desenvolvimento de aplicações mobile, incluindo:

-   Criação de interfaces com React Native
-   Organização de projetos
-   Navegação entre telas
-   Componentização
-   Manipulação de dados
-   Uso do Expo
-   Testes utilizando Expo Go
-   Controle de versão com Git e GitHub

------------------------------------------------------------------------

# 👨‍💻 Projeto

**Nome:** FoodGo

**Tipo:** Aplicativo mobile de delivery

**Tecnologias:** React Native + Expo + JavaScript

**Plataforma de desenvolvimento/teste:** Expo Go

**Repositório:** GitHub

------------------------------------------------------------------------

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
