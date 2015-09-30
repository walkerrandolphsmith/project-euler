export function differenceSumOfSquaresAndSquareOfSums(n){
  return SquareOfSums(n) - SumOfSquares(n);
}

export function SumOfSquares(n){
  return (n * (n + 1) * ((2 * n) + 1)) / 6;
}

export function SquareOfSums(n){
  var sum = (n * (n + 1)) / 2;
  return sum * sum;
}
