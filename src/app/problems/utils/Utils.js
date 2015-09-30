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
  if(evenlyDivides(n,2))
    primes.push(n);

  const max = Math.sqrt(n);
  for (var i = 3; i <= max; i = i+2) {
    if (evenlyDivides(n,i))
      primes.push(i);
  }
  return primes;
}
