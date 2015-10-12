import * as Utils from './Utils';

export function getPrimesFactorsOf(n){
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

export function getFirstKPrimes(k){
  var primes = [2, 3];
  var n = 5;

  function isPrime(n) {
      var i = 1, p = primes[i],
          limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
          if (n % p === 0) {
              return false;
          }
          i++;
          p = primes[i];
      }
      return true;
  }

  for (var i = 2; i <= k; i++) {
      while (!isPrime(n)) {
          n += 2;
      }
      primes.push(n);
      n += 2;
  }
  return primes;
}

export function getPrimesBelow(k){
  let primes = [2,3];
  let n = 5;

  function isPrime(n) {
      let i = 1;
      let p = primes[i];
      let limit = Math.ceil(Math.sqrt(n));

      while (p <= limit) {
          if (n % p === 0) { return false; }
          i++;
          p = primes[i];
      }
      return true;
  }

  while(true){
    while(!isPrime(n)){ n+= 2 }
    if(n > k) return primes;
    primes.push(n);
    n += 2;
  }
}
