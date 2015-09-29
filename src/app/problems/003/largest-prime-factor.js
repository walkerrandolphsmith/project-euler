import {getPrimes} from './../utils/Utils';

export function getLargestPrimeFactor(n){
  var primes = getPrimes(n);
  return primes[primes.length -1];
}
