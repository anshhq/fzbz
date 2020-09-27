## FizzBuzz (modified) on one million numbers, positive integers
**Code**: If positive integer > 0, if divisible by 3 alone, then output '*Fizz*'. Else if divisible by 5 alone, then output '*Buzz*'. Else if divisible by 3 and 5, then output '*FizzBuzz*'. Else output nothing.

### Observations
Machine environment constant and status is warmed up with executing JavaScript code.
Code is written in JavaScript ES6 syntax, tested it with **Node.js v12x** publicly available version.
Tested with few code samples, filenames: [*fzbz-1.js*](#fzbz-1.js), [*fzbz-2.js*](#fzbz-2.js), [*fzbz-3.js*](#fzbz-3.js), [*fzbz-4.js*](#fzbz-4.js), [*fzbz-5.js*](#fzbz-5.js) and [*fzbz-6.js*](#fzbz-6.js)
1. Interesting to note that, count of modulus operations in all files are **466667**, except that [*fzbz-3.js*](#fzbz-3.js) has *933334* times modulus operations.
1. For one million numbers, positive integers, all files, it takes roughly 2300 to 2400 count of time units, or 2.3 to 2.4 seconds except [***fzbz-6.js***](#fzbz-6.js), that takes only 250 to 300 units of time, or it is less than a second, in other words, just a fraction of a second.
1. Only particular thing in [***fzbz-6.js***](#fzbz-6.js) is that, it outputs or prints only single time, keeping up adding up all string output until final whole string output is ready.
1. [***fzbz-6.js***](#fzbz-6.js) solution is interestingly, takes only thirteen percentage (**13%**) of what time it takes, for all other solutions, [*fzbz-1.js*](#fzbz-1.js), [*fzbz-2.js*](#fzbz-2.js), [*fzbz-3.js*](#fzbz-3.js), [*fzbz-4.js*](#fzbz-4.js), [*fzbz-5.js*](#fzbz-5.js).

| Sample                    | Modulo Count | Time Count   | Time in Milliseconds | Time in Seconds |
| --------------------------| ------------ | ------------ | -------------------- | --------------- |
| [*fzbz-1.js*](#fzbz-1.js) | 466667       | 2300 to 2400 | 2300 to 2400         | 2.3 to 2.4      |
| [*fzbz-2.js*](#fzbz-2.js) | 466667       | 2300 to 2400 | 2300 to 2400         | 2.3 to 2.4      |
| [*fzbz-3.js*](#fzbz-3.js) | 933334       | 2300 to 2400 | 2300 to 2400         | 2.3 to 2.4      |
| [*fzbz-4.js*](#fzbz-4.js) | 466667       | 2300 to 2400 | 2300 to 2400         | 2.3 to 2.4      |
| [*fzbz-5.js*](#fzbz-5.js) | 466667       | 2300 to 2400 | 2300 to 2400         | 2.3 to 2.4      |
| [*fzbz-6.js*](#fzbz-6.js) | 466667       | ~300         | ~300                 | 0.3             |

### <a name="fzbz-1.js"></a> *fzbz-1.js* ([top](#observations))
```javascript
const fizzBuzz = (n) => {
  let counterModulo = 0;
  for (let e = 1; e < n + 1; e++) {
    if (e % 3 === 0 && e % 5 === 0) {
      counterModulo += 1;
      console.log('FizzBuzz');
    } else if (e % 3 === 0) {
      counterModulo += 1;
      console.log('Fizz');
    } else if (e % 5 === 0) {
      counterModulo += 1;
      console.log('Buzz');
    }
  }
  return counterModulo;
};

const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
```

### <a name="fzbz-2.js"></a> *fzbz-2.js* ([top](#observations))
```javascript
const fizzBuzz = (n) => {
  const fz = 'Fizz';
  const bz = 'Buzz';
  let counterModulo = 0;
  for (let e = 1; e < n + 1; e++) {
    if (e % 3 === 0 && e % 5 === 0) {
      counterModulo += 1;
      console.log(fz + bz);
    } else if (e % 3 === 0) {
      counterModulo += 1;
      console.log(fz);
    } else if (e % 5 === 0) {
      counterModulo += 1;
      console.log(bz);
    }
  }
  return counterModulo;
};

const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
```

### <a name="fzbz-3.js"></a> *fzbz-3.js* ([top](#observations))
```javascript
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
```

### <a name="fzbz-4.js"></a> *fzbz-4.js* ([top](#observations))
```javascript
const fizzBuzz = (n) => {
  const fz = 'Fizz';
  const bz = 'Buzz';
  let counterModulo = 0;
  for (let e = 1; e < n + 1; e++) {
    if (e % (3 * 5) == 0) {
      counterModulo += 1;
      console.log(fz + bz);
    } else if (e % 3 == 0) {
      counterModulo += 1;
      console.log(fz);
    } else if (e % 5 == 0) {
      counterModulo += 1;
      console.log(bz);
    }
  }
  return counterModulo;
};

const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
```

### <a name="fzbz-5.js"></a> *fzbz-5.js* ([top](#observations))
```javascript
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
```

### <a name="fzbz-6.js"></a> *fzbz-6.js* ([top](#observations))
```javascript
const fizzBuzz = (n) => {
  const fz = 'Fizz';
  const bz = 'Buzz';
  let counterModulo = 0;
  let out = '';
  for (let e = 1; e < n + 1; e++) {
    if (e % (3 * 5) == 0) {
      counterModulo += 1;
      out += fz + bz + '\n';
    } else if (e % 3 == 0) {
      counterModulo += 1;
      out += fz + '\n';
    } else if (e % 5 == 0) {
      counterModulo += 1;
      out += bz + '\n';
    }
  }
  console.log(out);
  return counterModulo;
};

const t1 = new Date().getTime();
const counter = fizzBuzz(1000000);
const t2 = new Date().getTime();
console.log('t2-t1:', t2 - t1, 'counterModulo:', counter);
```

## npm run fzbz
Output file '*out.txt*'.
