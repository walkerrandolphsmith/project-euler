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
