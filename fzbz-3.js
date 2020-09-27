const fizzBuzz = (n) => {
  const fz = 'Fizz';
  const bz = 'Buzz';
  let counterModulo = 0;
  for (let e = 1; e < n + 1; e++) {
    if (e % 3 === 0 || e % 5 === 0) {
      counterModulo += 1;
      if (e % 3 === 0) {
        counterModulo += 1;
        console.log(fz);
      } else if (e % 5 === 0) {
        counterModulo += 1;
        console.log(bz);
      } else {
        console.log(fz + bz);
      }
    }
  }
  return counterModulo;
};

const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
