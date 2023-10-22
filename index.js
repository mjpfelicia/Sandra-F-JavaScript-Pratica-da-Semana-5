const prompt = require('prompt-sync')();
var array_bolsa = [];

do {
  console.log("Sistema de Cadastro de bolsa");
  console.log("1 - Inserir bolsa");
  console.log("2 - Excluir bolsa");
  console.log("3 - Listar bolsa");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo bolsa...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let estilo = prompt("Digite o estilo de bolsa(social,casual,esportiva): ");
    let tamanho = prompt("Digite o tamanho da bolsa(p,m,g): ");
    let cor = prompt("Digite a cor: ");
    let marca = prompt("Digite a marca: ");

    // Neste trecho estamos declarando um objeto
    const bolsa = {
      codigo,
      estilo,
      tamanho,
      cor,
      marca,
      
    }

    // Chamar a função inserir
    inserir_bolsa(bolsa)

  } else if (opcao == 2) {
    console.log("\n\nExcluindo bolsa...\n");
    let codigo = parseInt(prompt("Digite o código da bola: "));
    // Chamar a função excluir
    excluir_bolsa(codigo)

  } else if (opcao == 3) {
    console.log("\n\nListando Bolsas...\n");
    // Chamar a função listar
    listar_bolsa()
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_bolsa(bolsa) {
  // Implementar corpo da função
  array_bolsa.push(bolsa)
}

function excluir_bolsa(codigo) {
  // Implementar corpo da função
  for (let index = 0; index < array_bolsa.length; index++) {
    const bolsa = array_bolsa[index];

    if (bolsa.codigo === codigo) {
      delete array_bolsa[index]
    }

  }
}

function listar_bolsa() {
  // Implementar corpo da função
  for (let index = 0; index < array_bolsa.length; index++) {

    const bolsa = array_bolsa[index];
      
    console.log(bolsa)
  }
}





