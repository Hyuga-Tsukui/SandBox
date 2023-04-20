function filter<T>(array: T[], cb: (value: T) => unknown): T[] {
  let result: T[] = [];

  for (const e of array) {
    if (cb(e)) {
      result.push(e);
    }
  }
  return result;
}
const array = [1, 25, 10, 3, 4, undefined, 0];

console.log(`組み込みfilter ${array.filter((e) => e)}`); // [1,25,10,3,4]
console.log(`自作filter ${filter(array, (e) => e)}`); // [1,25,10,3,4]

type HasSides = {
  numberOfSides: number;
};

type SidesHaveLength = {
  sideLength: number;
};

function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): Shape {
  console.log(s.numberOfSides * s.sideLength);
  return s;
}

type Square = HasSides & SidesHaveLength;
const square: Square = {
  numberOfSides: 4,
  sideLength: 3,
};
logPerimeter(square);

function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

function xRepeat(str: string, num: number) {
  return str.repeat(num);
}

call(fill, 10, "a");

