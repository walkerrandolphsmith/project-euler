export function LCM(a,b){
  return Math.abs(a*b) / GCD(a,b);
}

export function GCD(a,b){
  var c;
  while ( a != 0 ) {
     c = a; a = b%a; b = c;
  }
  return b;
}

export function evenlyDivides(n,k){
  return (n % k === 0);
}

export function getPrimeFactors(n){
  var primes = [];
  if(evenlyDivides(n,2)){
    primes.push(2);
  }
  //TODO: This is used to get the greatest prime factor of n which won't always work ->
  //the smallest prime factor is less than or equal to sqrt(n) unless n is prime.
  const max = Math.sqrt(n);
  for (var i = 3; i <= max; i = i+2) {
    if (evenlyDivides(n,i)){
      primes.push(i);
    }
  }
  return primes;
}
