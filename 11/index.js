const original = [5, 7, 13, 17, 26, 34, 118, 245];
const novoArray=[];
for ( let item of original){
       console.log(item);

    if( item >= 10 && item <=21 || item >=100){
      
        
      novoArray.push(item);
    }

}

console.log(novoArray);
