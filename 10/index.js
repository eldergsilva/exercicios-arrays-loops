const numeros = [8, 11, 4, 1];
let maiorDiferenca = 0;

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        const diferencaAtual = numeros[i] - numeros[j];
        
         
        if (diferencaAtual > maiorDiferenca) {
            maiorDiferenca = diferencaAtual;
        }
    }
}

console.log(maiorDiferenca);