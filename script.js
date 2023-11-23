// sequence program flow

function sequence(a, b) {
  var sum = a + b;
  return sum;
}
console.log(
  "****************************************************************\n"
);
console.log("demo of sequence progrma flow\n");
console.log("result : ", sequence(1, 2));

console.log(
  "****************************************************************\n"
);

// selection program flow

function selection1(a, b) {
  var result;
  if (a > b) {
    result = "\n " + a + " akber men " + b;
  } else if (a < b) {
    result = "\n " + a + " asgher men " + b;
  } else {
    result = a + " = " + b;
  }
  return result;
}

function selection2(a) {
  var res;
  switch (a) {
    case 0:
      res = "zero";
      return res;
    case 1:
      res = "one";
      return res;
    default:
      res = "i dont know";
      return res;
  }
}

console.log(
  "****************************************************************\n"
);
console.log("demo of selection  progrma flow : switch case statement \n");
console.log("result : ", selection2(5));

console.log(
  "****************************************************************\n"
);

// iterative program flow

function iterate_for(tab) {
  for (let index = 0; index < tab.length; index++) {
    console.log(tab[index]);
  }
  return tab;
}

console.log(
  "****************************************************************\n"
);
console.log("demo of iterative  progrma flow : for loop \n");
console.log("result : ", iterate_for([1, 2, 3]));

console.log(
  "****************************************************************\n"
);

function iterate_for_in(tab) {
  for (let item in tab) {
    console.log("item: ", item);
  }
  return tab;
}

console.log(
  "****************************************************************\n"
);
console.log("demo of iterative  progrma flow : for In loop \n");
console.log("result : ", iterate_for_in([1, 2, 3]));

console.log(
  "****************************************************************\n"
);

function iterate_for_of(tab) {
  for (let item of tab) {
    console.log("item: ", item);
  }
  return tab;
}

console.log(
  "****************************************************************\n"
);
console.log("demo of iterative  progrma flow : for Of loop \n");
console.log("result : ", iterate_for_of([1, 2, 3]));

console.log(
  "****************************************************************\n"
);

function iterate_while(n) {
  let index = 0;
  while (index <= n) {
    console.log(index);
    index++;
  }
  return index;
}

console.log(
  "****************************************************************\n"
);
console.log("demo of iterative  progrma flow : while loop \n");
console.log("result : ", iterate_while(10));

console.log(
  "****************************************************************\n"
);

function iterate_do_while(n) {
  let index = 11;
  do {
    index++;
    console.log(index);
  } while (index <= n);
  return index;
}

console.log(
  "****************************************************************\n"
);
console.log("demo of iterative  progrma flow :  do while loop \n");
console.log("result : ", iterate_do_while(10));

console.log(
  "****************************************************************\n"
);

/// break and continue demo

function test(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (i > tab.length / 2) {
      console.log("you reached the middle of the tab");
      break;
    }
    if (i % 2 == 0) {
      console.log(i, "pair");
      continue;
    }
    if (i % 2 != 0) {
      console.log(i, "inpair");
      continue;
    }
  }
}

console.log(
  test([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ])
);
