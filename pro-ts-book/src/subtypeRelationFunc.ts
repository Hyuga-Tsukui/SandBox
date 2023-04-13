function map<T, U>(array: T[], cb: (arg: T) => U): U[] {
    const result: U[] = [];

    for(const element of array) {
        result.push(cb(element));
    }

    return result;
}

const data1 = [1, -3, -2, 8, 0, -1];
const result: boolean[] = map(data1, (x) => x >= 0);
console.log(result);