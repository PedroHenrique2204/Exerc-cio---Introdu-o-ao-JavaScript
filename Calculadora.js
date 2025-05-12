const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite dois números e a operação (ex: 5,2,+): ", function(entrada) {
    let [a, b, op] = entrada.split(",").map(item => item.trim());
    a = Number(a);
    b = Number(b);
    function calcular(a, b, op) {
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return b !== 0 ? a / b : "divisão por zero";
            default:
                return "Operação inválida";
        }
    }
    const resultado = calcular(a, b, op);
    console.log("resultado:", resultado);
    rl.close();
});

