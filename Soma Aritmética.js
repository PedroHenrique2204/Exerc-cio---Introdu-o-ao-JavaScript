function soma(a, b) {
    return a + b;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("valor de x: ", function(x) {
    rl.question("valor de y: ", function(y) {
        x = Number(x);
        y = Number(y);

        console.log(`Soma: ${soma(x, y)}`);
        rl.close(); 
    });
});
