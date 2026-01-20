function sum(...allNum) {
  // Start coding here !
  let sumNum = allNum.reduce((acc,cur)=>acc+cur,0)
  return sumNum;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
