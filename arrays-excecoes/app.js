const productsList = [
    "Mamão",
    "Abacate",
    "Abóbora",
    "Alface",
    "Ameixa",
    "Arroz",
    "Banana",
    "Batata",
    "Cafe",
    "Leite",
    "Melancia",
    "Pão",
    "Samambaia",
    "Uva"
]

const listaDeArgumentos = process.argv.slice(2);

const produtosSolicitadosDisponiveis = 
    productsList.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto)
})

const listaDeProdutosSolicitadosNaoDisponiveis = 
    listaDeArgumentos.filter(argumento => {
        return !produtosSolicitadosDisponiveis.find(produto => produto === argumento)
})

if(produtosSolicitadosDisponiveis.length) {
    let qnt = 1;
    console.log("Estes sao os produtos disponiveis: ");
    produtosSolicitadosDisponiveis.forEach(produto => 
        console.log(`${qnt++} : ${produto}`));
} 

if(listaDeProdutosSolicitadosNaoDisponiveis.length) {
    let qnt = 1;
    console.log("Estes sao os produtos indisponiveis: ");
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => 
        console.log(`${qnt++} : ${produto}`));
} 

produtosSolicitadosDisponiveis.sort();
if (produtosSolicitadosDisponiveis.length) {
    let qnt = 1;
    console.log("Estes são os produtos ordenados A-Z: ");
    produtosSolicitadosDisponiveis.forEach(produto => 
        console.log(`${qnt++} : ${produto}`));
}


