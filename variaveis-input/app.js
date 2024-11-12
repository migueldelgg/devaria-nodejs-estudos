const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let leituraDeCampo;
let teste = 'teste'

readLine.question('informe sua idade:', t => {
    leituraDeCampo = t;
    console.log(`o usuario digitou: ${leituraDeCampo} e nossa variavel de teste ` +
        `é: ${teste}`)
});