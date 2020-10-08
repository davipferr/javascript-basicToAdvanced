function positive(num){
     if(num < 0){
          return Math.abs(num);
     } else {
          console.log('Esse numero já é positivo');
     }
    
}
console.log(positive(-5));
console.log(positive(-10));
console.log(positive(23));