const fizzBuzz = (n) => {
  const fz = 'Fizz';
  const bz = 'Buzz';
  let counterModulo = 0;
  for (let e = 1; e < n + 1; e++) {
    switch (e % (3 * 5)) {
      case 0:
        counterModulo += 1;
        console.log(fz + bz);
        break;
      case 3:
      case 6:
      case 9:
      case 12:
        counterModulo += 1;
        console.log(fz);
        break;
      case 5:
      case 10:
        counterModulo += 1;
        console.log(bz);
        break;
      default:
        break;
    }
  }
  return counterModulo;
};
const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
