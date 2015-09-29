function getPrimeFactors(n){
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

function evenlyDivides(n,k){
  return (n % k === 0);
}

export function getLargestPrimeFactor(n){
  var primes = getPrimeFactors(n);
  return primes[primes.length -1];
}
