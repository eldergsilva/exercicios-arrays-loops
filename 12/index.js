const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

for ( i=0 ;i<=5 ;i++){
    if(filaDeDentro.length <=4 && filaDeFora.length > 0){
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.pop()
    }
     
}
console.log(filaDeDentro);
console.log(filaDeFora);

