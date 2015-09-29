function LCM(a,b){
  return Math.abs(a*b) / GCD(a,b);
}

function GCD(a,b){
  var c;
  while ( a != 0 ) {
     c = a; a = b%a; b = c;
  }
  return b;
}

export function threeAndFive(){

  var a = 0;
  var b = 1000;
  var n = 3;
  var m = 5;

  var y = LCM(n,m);

  return Math.floor(b/n) - Math.ceil(a/n) + Math.floor(b/m) - Math.ceil(a/m) - Math.floor(b/y) + Math.ceil(a/y) + 1;
}
