import * as Utils from './Utils';

export function getPrimes(n){
  var primes = [];
  if(Utils.evenlyDivides(n,2))
    primes.push(2);

  for (var i = 3; i <= n; i = i+2) {
    if (Utils.evenlyDivides(n,i))
      primes.push(i);
  }
  return primes;
}

export function isPrime(n){
  if (n < 0)
    throw("Negative number");
  if (n == 0 || n == 1)
    return false;
  else if (n == 2)
    return true;
  else {
		if (n % 2 == 0)
			return false;
		for (var i = 3, end = Math.sqrt(n); i <= end; i += 2) {
			if (n % i == 0)
				return false;
		}
		return true;
	}
}
