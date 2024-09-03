function Livro(titulo, descricao, autores, estilo) {
  this.titulo = titulo;
  this.descricao = descricao;
  this.autores = autores;
  this.estilo = estilo;
}

let btnAdd = document.querySelector("#adicionar");
let btnLimpar = document.querySelector("#excluir");

let btnEnviar = document.querySelector("#enviar");
let btnLimparAcervo = document.querySelector("#apagarAcervo");

let arrayLivros = [];

let acervo = document.querySelector("#acervo");

btnAdd.addEventListener("click", () => {
  let titulo = document.querySelector("#titulo").value;
  let descricao = document.querySelector("#descricao").value;
  let autores = document.querySelector("#autores").value;
  let estilo = document.querySelector("#estilo").value;

  arrayLivros.push(new Livro(titulo, descricao, autores, estilo));
  atualizaAcervo();
});

btnLimpar.addEventListener("click", () => {
  zeraCampos();
});

btnEnviar.addEventListener("click", () => {
  enviaDadosAcervo();
});

btnLimparAcervo.addEventListener("click", () => {
  zeraAcervo();
  arrayLivros = [];
});

function atualizaAcervo() {
  zeraAcervo();
  arrayLivros.forEach((e) => {
    let livro = document.createElement("tr");

    let titulo = document.createElement("td");
    let autores = document.createElement("td");
    let estilo = document.createElement("td");
    let descricao = document.createElement("td");

    titulo.innerHTML = `${e.titulo}`;
    livro.appendChild(titulo);
    descricao.innerHTML = `${e.descricao}`;
    livro.appendChild(descricao);
    autores.innerHTML = `${e.autores}`;
    livro.appendChild(autores);
    estilo.innerHTML = `${e.estilo}`;
    livro.appendChild(estilo);

    acervo.appendChild(livro);
  });
}

function zeraAcervo() {
  acervo.innerHTML = `
        <tr>
            <th>Título</th>
            <th>Autores</th>
            <th>Estilo</th>
            <th>Descrição</th>
            <th></th>
        </tr>`;
}

function zeraAcervoCompleto() {
  arrayLivros = [];
  zeraAcervo();
}

function zeraCampos() {
  titulo = document.querySelector("#titulo").value = "";
  descricao = document.querySelector("#descricao").value = "";
  autores = document.querySelector("#autores").value = "";
  estilo = document.querySelector("#estilo").value = "";
}

async function enviaDadosAcervo() {
	//perdi 30 minutos aqui, estava usando "acervo = JSON....", 
	//isso fazia que o valor do acervo como elemento se perdesse, 
	//e assim não era possivel manipular o elemento depois disso.
	//
	//criar outra variavel "acervoJSON" funcinou bem, 
	//pois assim eu não perco o elemento original
	
  let acervoJSON = JSON.stringify(arrayLivros); 


  fetch("http://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: acervoJSON,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
