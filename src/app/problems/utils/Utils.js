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
