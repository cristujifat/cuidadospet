// Galeria de imagens de cães
const imagens = [
"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/18d0/live/88ff5600-d979-11ef-a5c8-1da73bd59591.jpg.webp", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh30AQKP6mr3Oz3QBLJ7KPVog31LbgMdEwZQ&s", 
"https://jpimg.com.br/uploads/2024/03/10-mitos-sobre-os-caes-da-raca-golden-retriever.jpg",
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStSpiisPkBYCRoKaMzwQq79Dz_xqOMINMD9ZbSc-wu0HUbmCh4RZU6IehtUPfiJd0Z1yTRgDMKFt1EfmP4-Tldcz6XAVrQ_X8M5Q1Et5_T",
"https://www.doginside.net.br/img/raca/vira_lata_caramelo.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINM3sVtR1r4cUkpdiVu1E8nDPQ0-wId7cCA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CTAECudMuTPtLW_LZplhTLhqRu1U-TDjYg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRCDEVIMXXel2QFByCN48ls28VRkE7GneTg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mAXLduysQmxG5M-jDPpYrYEk8--_OBD6qA&s",
];

  document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    galeria.innerHTML = "";
    imagens.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Foto de cachorro";
      galeria.appendChild(img);
    });
  });
  
  // Informações por raça
  const racas = {
    "Labrador Retriever": "É um ótimo cão para famílias e muito amigável.",
    "Golden Retriever": "Muito sociável, ideal para crianças.",
    "Poodle": "Altamente treinável e ótimo para quem tem alergia.",
    "Pinscher": "Late bastante, elege um dono na casa, brincalhão!"
  };
  
  document.querySelectorAll("table tbody tr").forEach(row => {
    row.addEventListener("click", () => {
      const nomeRaca = row.children[0].textContent;
      alert(`Info extra: ${racas[nomeRaca] || "Mais informações em breve."}`);
    });
  });
  
  
  // Dicas de cuidados
  const dicas = [
    "Escove os dentes do seu cachorro 3x por semana.",
    "Evite dar chocolate — é tóxico!",
    "Água fresca sempre disponível."
  ];
  document.getElementById("btn-dica").addEventListener("click", () => {
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dica-texto").textContent = aleatoria;
  });
  
  // Pesquisa de raças por característica
  const listaRacas = [
    { nome: "Labrador", caracteristica: "amigável" },
    { nome: "Pastor Alemão", caracteristica: "corajoso" },
    { nome: "Poodle", caracteristica: "inteligente" },
    { nome: "Pinscher", caracteristica: "brincalhão" }
  ];
  document.getElementById("campo-filtro").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const resultado = document.getElementById("resultado-raças");
    resultado.innerHTML = "";
    listaRacas
      .filter((raca) => raca.caracteristica.includes(valor))
      .forEach((raca) => {
        const li = document.createElement("li");
        li.textContent = `${raca.nome} – ${raca.caracteristica}`;
        resultado.appendChild(li);
      });
  });
  
  // Conversor de medidas de comida
  document.getElementById("btn-converter").addEventListener("click", () => {
   
const xicarasInput = document.getElementById("xicaras").value.trim();
const resultado = document.getElementById("resultado-conversao");

// Tenta converter para número
let xicaras = Number(xicarasInput);

if (xicarasInput!== "" && !isNaN(xicarasInput)) {
  xicaras = parseFloat(xicarasInput);
  const gramas = xicaras * 100;
  resultado.textContent = `Isso equivale a aproximadamente ${gramas}g de ração.`;
} else {
  resultado.textContent = "Por favor, insira um valor válido em xícaras.";
}

  });

//Carrinho de compras
//adicionar produto ao carrinho
let carrinho=[];
let subtotal=[];
let produto = {
  nome: "produto teste",
  preco: 10
};
/*
function getProduto(produto) {
  const nome = produto.getAttribute("nome-produto");
  const preco = parseFloat(produto.getAttribute("preco-produto"));
  return { nome, preco };
}*/

function adicionarAoCarrinho (produto, quantidade=1){
    const itemExiste = carrinho.find(item => item.produto === produto);
    // const resultado = document.getElementById("incluir-produto");
    if (itemExiste){
      itemExiste.quantidade += quantidade;
    } else {
      carrinho.push({produto, quantidade});
    }
    // console.log(`${produto.nome} adicionado ao carrinho`);
    document.getElementById("incluir-produto").textContent = `${produto.nome} adicionado ao carrinho`;
  }

//remover produto do carrinho 
function removerDoCarrinho (produto){
  const indice = carrinho.findIndex(item => item.produto === produto);
  const resultado = document.getElementById("retirar-produto");
  if (indice !== -1){
    carrinho.splice(indice, 1); 
    console.log(`${produto.nome} subtraído ao carrinho`);
    resultado.textContent = `${produto.nome} subtraído ao carrinho`;
  } else {
    console.log(`${produto.nome} não encontrado no carrinho`);
    resultado.textContent = `${produto.nome} não encontrado no carrinho`;
  }
}
//Visualizar o carrinho
function verCarrinho(){
  const resultado = document.getElementById("listar-produto");
  if(carrinho.length === 0){
    console.log("O carrinho está vazio");
    resultado.textContent = `O carrinho está vazio`;
    return;
  }
  console.log("Itens no carrinho:");
  carrinho.forEach(item => {
    console.log(`${item.produto.nome} - Quantidade: ${item.quantidade}`);
    resultado.textContent =`${item.produto.nome} - Quantidade: ${item.quantidade}`;
  });
}
//Visualizar o carrinho
function calcularSubtotal(){
  const resultado = document.getElementById("subtotal");
  if(carrinho.length === 0){
    console.log("O carrinho está vazio");
    resultado.textContent = `O carrinho está vazio`;
    return;
  }
  console.log("Itens no carrinho:");
  carrinho.forEach(item => {
    let calculo = item.produto.preco * item.quantidade;
      subtotal.push({calculo});
      console.log(`${calculo}`);
    resultado.textContent =`${calculo}`;
  });
}

document.getElementById("btn-produto-incluir").addEventListener("click", () => {
  //getProduto();
  adicionarAoCarrinho(produto, 1);
});

document.getElementById("btn-produto-retirar").addEventListener("click", () => {
  removerDoCarrinho(produto);
});

document.getElementById("btn-ver-carrinho").addEventListener("click", () => {
  verCarrinho();
});


document.getElementById("btn-subtotal").addEventListener("click", () => {
  calcularSubtotal();
});
