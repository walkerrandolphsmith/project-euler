import {getPrimesBelow} from './../utils/Prime';

export function sumOfPrimesBelow(n){
  return getPrimesBelow(n).reduce((x, y) => { return x + y})
}
