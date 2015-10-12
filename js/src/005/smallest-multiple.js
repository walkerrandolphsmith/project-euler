import {LCM} from './../utils/Utils';

export function smallestMultiple(range) {
  var result = 1;
  for(var i = range[0]; i <= range[1]; i++){
    result = LCM(i, result);
  }
  return result;
}
