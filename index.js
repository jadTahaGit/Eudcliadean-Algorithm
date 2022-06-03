console.log("Euclidean Algorithm");
let a,
  q = 1,
  b,
  r = 0;

if (a < b) throw "error: b should be greater than a";

findTheQuotient = (num1, num2) => {
  let qi = 1;
  while (num1 >= (qi + 1) * num2) {
    qi++;
  }
  //   console.log(`The Quotient is ${qi}`);
  return qi;
};

findTheRemainder = (num1, quotient, num2) => {
  //   console.log(`The Remainder is ${(r = num1 - quotient * num2)}`);
  return (r = num1 - quotient * num2);
};

// findTheRemainder(a, findTheQuotient(a, b), b);

// a = q1.b  + r0
// b= q2.r0  + r1
// r0 = q3.r1+ r2

// 12 = q1.8  + r0
// 8= q2.r0  + r1
// r0 = q3.r1+ r2
applyEuclideanAlgo = (num1, num2) => {
  a = num1;
  b = num2;
  q = findTheQuotient(a, b);
  r = findTheRemainder(a, q, b);
  console.log(`${a} = ${q}.${b} +${r}`);
  if (r === 0) {
    console.log(`GGT is ${b}`);
    return b;
  }
  applyEuclideanAlgo(b, r);
};

// applyEuclideanAlgo(162, 99);
applyEuclideanAlgo(747, 162);

// findTheQuotient(162, 99);
