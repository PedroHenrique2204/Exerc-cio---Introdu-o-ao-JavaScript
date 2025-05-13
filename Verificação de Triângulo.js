const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite os três lados do triângulo separados por vírgula (ex: 3,4,5): ", function(entrada) {
    let [a, b, c] = entrada.split(",").map(Number);

    function formaTriangulo(a, b, c) {
        return a > 0 && b > 0 && c > 0 &&
               a + b > c && a + c > b && b + c > a;
    }

    function classificaTriangulo(a, b, c) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }

    if (formaTriangulo(a, b, c)) {
        console.log("Triângulo válido. Tipo:", classificaTriangulo(a, b, c));
    } else {
        console.log("Os valores informados não formam um triângulo.");
    }

    rl.close();
});
