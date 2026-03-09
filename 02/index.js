const letras =["A", "e", "B", "C", "E", "z"];
let soma =0;

for (const letra of letras) {
    if (letra ==="E" || letra==="e") {
    soma ++;  
    console.log();
           
    }
}

if (soma < 1) {
     console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);     
} else {
console.log(`Foram encontradas ${soma} letras "E" ou "e".  `);
}

