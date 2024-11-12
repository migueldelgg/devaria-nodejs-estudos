const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarNumeroInformado = (numero) => {
    const result = Number.parseFloat(numero);
    if(!result) {
        console.log('o numero informado nao e valido ')
        readLine.close();
    }
    return result;
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado é inválido.');
            return readLine.close();
    }
}

readLine.question("Favor informar um numero: ", (numero1) => {

    const validateNumber1 = validarNumeroInformado(numero1);

    if(validateNumber1) {
        readLine.question('Favor informar o segundo numero: ', (numero2) => {
            const validateNumber2 = validarNumeroInformado(numero2);

            if(validateNumber2){
                readLine.question('Favor informar o operador matematico: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado != null) {
                        switch(operadorValidado) {
                            case '+' : console.log(`O resultado da operação é: ${validateNumber1} + ${validateNumber2} = ${validateNumber1 + validateNumber2}`)
                                break;
                            case '-' : console.log(`O resultado da operação é: ${validateNumber1} - ${validateNumber2} = ${validateNumber1 - validateNumber2}`)
                                break;
                            case '/' : console.log(`O resultado da operação é: ${validateNumber1} / ${validateNumber2} = ${validateNumber1 / validateNumber2}`)
                                break;
                            case '*' : console.log(`O resultado da operação é: ${validateNumber1} * ${validateNumber2} = ${validateNumber1 * validateNumber2}`)
                                break;
                            case '%' : console.log(`O resultado da operação é: ${validateNumber1} % ${validateNumber2} = ${validateNumber1 % validateNumber2}`)
                        }
                    }
                });
            }
        })
    }
})
