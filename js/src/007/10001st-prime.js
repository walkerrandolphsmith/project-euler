import {getFirstKPrimes} from './../utils/Prime';

export function getNthPrime(index){
  var primes = getFirstKPrimes(index);
  return primes[index - 1];
}
