export function getLargestPalindrome(){
  var result = 0;
  for(var i = 100; i < 1000; i++){
    for(var j = 100; j < 1000; j++){
      var product = i * j;
      if(isPalindrome(product) && product > result){
         result = product;
       }
    }
  }
  return result;
}

export function isPalindrome(p){
  var array = (p+'').split('');
  var reverse = array.slice(0).reverse();

  return array.join('') === reverse.join('');
}
