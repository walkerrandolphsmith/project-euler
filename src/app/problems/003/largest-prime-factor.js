import {getPrimeFactors} from './../utils/Utils';

export function getLargestPrimeFactor(n){
  var primes = getPrimeFactors(n);
  return primes[primes.length -1];
}
