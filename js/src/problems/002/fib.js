export function calc(){
  var sum = 0;
	var calcFib = 0;

  for (var i = 2; calcFib <= 4000000; i++) {
  	calcFib = fib(i - 1);
  	if (calcFib % 2 == 0)
  		sum += calcFib;
  }
  return sum;
}

function fib(n){
  return (n < 2) ? n : fib(n - 1) + fib(n - 2);
}
