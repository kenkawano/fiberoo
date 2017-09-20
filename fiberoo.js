function fib(){
  let i = 0;
  let j = 0;
  let k = 1;
  let h = 0;
  let list = [0];
  for (i; i< 99; i++){
    list.push(k);
    h = k;
    k += j;
    j = h;
  }
  return list;
}

console.log(fib());

function numsToStrings(list){
  return _.map(list, function(val){ return val.toString()});
}

console.log(numsToStrings(fib()));

function numEvenNums(list){
  let even = _.filter(list, function(val){return val %2 == 0;});
  return even.length;
}

console.log(numEvenNums(fib()));
