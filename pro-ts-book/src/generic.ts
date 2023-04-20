

function filter<T>(array: T[], cb: (value: T) => unknown): T[] {
    let result: T[] = [];

    for(const e of array) {
        if(cb(e)) {
            result.push(e);
        }
    }
    return result;
}
const array = [1,25, 10, 3, 4, undefined, 0];

console.log(`組み込みfilter ${ array.filter(e => e)}`); // [1,25,10,3,4]
console.log(`自作filter ${filter(array, e => e)}`); // [1,25,10,3,4]