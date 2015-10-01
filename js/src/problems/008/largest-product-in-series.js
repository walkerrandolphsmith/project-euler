export function getGreatestProduct(n, numberOfDigitsInSequence){
  var max = 0;
  const end = n.length - numberOfDigitsInSequence;

  for(var i = 0; i <= end; i++){
    var array = n.slice(i, numberOfDigitsInSequence + i).split('');
    var product = array.reduce((a, b)=>{
      return a * b;
    }, 1);
    if(product > max) max = product;
  }
  return max;
}
