
const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = numeros[0]
for (let numero of numeros){
      console.log(numero);
     if(numero > maior){
         
         maior = numero
       
         
     }
}
console.log(`${maior}`);


