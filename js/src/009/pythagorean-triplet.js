export function getProductOfPythogreanTripletWhoseSumEquals(sum){
  var counter = 1;

  while(true){
    var radical = Math.sqrt(counter * counter + (2 * sum));

    if(radical === Math.floor(radical)){
      var n = counter;
      var m = Math.floor((((-1 * counter) + radical) / 2));
      if(m < 0){
        m = Math.floor((((-1 * counter) - radical) / 2));
      }
      var a = m * m - (n * n);
      var b = 2 * n * m;
      var c = m * m + (n * n);
      let mySum = a + b + c;
      let product = a * b * c;
      if(mySum === sum) return product;
    }
    counter++
  }
}
