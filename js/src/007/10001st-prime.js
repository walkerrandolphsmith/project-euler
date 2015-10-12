export function getNthPrime(index){
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

  for (var i = 2; i <= index; i++) {
      while (!isPrime(n)) {
          n += 2;
      }
      primes.push(n);
      n += 2;
  }
  return primes[index - 1];
}
