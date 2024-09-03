//função construtora de objetos Produto
var Produto = function (nome, categoria, img, valorUnitario) {
  this.nome = nome;
  this.categoria = categoria;
  this.foto = img;
  this.valorUnitario = valorUnitario;
  this.qnt = 0;
};

var cardapio = [
  new Produto(
    "Capuccino",
    "Bebidas Quentes",
    "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png",
    7
  ),
  new Produto(
    "Espresso",
    "Bebidas Quentes",
    "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png",
    4
  ),
  new Produto(
    "Frapuccino",
    "Bebidas Quentes",
    "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png",
    8
  ),
  new Produto(
    "Chococcino",
    "Bebidas Quentes",
    "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png",
    7
  ),
  new Produto(
    "Chocolate Quente",
    "Bebidas Quentes",
    "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png",
    10
  ),
  new Produto(
    "Frapê",
    "Bebidas Frias",
    "https://rafaelescalfoni.github.io/desenv_web/img/frape.png",
    12
  ),
  new Produto(
    "Suco de Laranja",
    "Bebidas Frias",
    "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png",
    10
  ),
  new Produto(
    "Açaí",
    "Doces",
    "https://rafaelescalfoni.github.io/desenv_web/img/acai.png",
    12
  ),
  new Produto(
    "Bolo de Laranja",
    "Doces",
    "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png",
    8
  ),
];
// carregamento de cardápio de exemplo

var produtosEscolhidosArray = [];

let catalogo = document.querySelector("#cardapio");
let pedidos = document.querySelector("#pedidos");

let total = document.querySelector("#valorTotal");

cardapio.forEach((element) => {
  let li = document.createElement("li");

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let img = document.createElement("img");
  let p3 = document.createElement("p");

  p1.innerHTML = `${element.nome}`;
  p2.innerHTML = `Categoria: ${element.categoria}`;
  p3.innerHTML = `R$${element.valorUnitario}`;

  img.src = `${element.foto}`;

  img.addEventListener("click", () => {
    if (element.qnt == 0) {
      produtosEscolhidosArray.push(element);
      element.qnt++;
    } else {
      element.qnt++;
    }
    atualizaPedidos();
    atualizaTotal(element);
  });


  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(p3);
  li.appendChild(img);

  catalogo.appendChild(li);

  

});


function deletaPedidos() {
  pedidos.innerHTML = "";
}


var calculoValorTotal = 0;

function atualizaTotal(e) {
  calculoValorTotal += e.valorUnitario;
  console.log(calculoValorTotal)
  total.innerHTML = `Total :  R$${calculoValorTotal}`;
}

function atualizaPedidos() {
    deletaPedidos();

    produtosEscolhidosArray.forEach((element) => {
      let li = document.createElement("li");

      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerHTML = `${element.nome}`;
      p2.innerHTML = `${element.categoria}`;
      p3.innerHTML = `R$${element.valorUnitario}`;
      p4.innerHTML = `Quantidade: ${element.qnt}`;

      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      li.appendChild(p4);

      pedidos.appendChild(li);
    });
  }