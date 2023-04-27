

//nullを返すパターン

function ask() {
    const result = prompt('When is your birthday?');
    if (result === null) {
        return []
    }
    return [result]
}

function parse(birthday: string): Date[] {
    const date = new Date(birthday);
    return [date]
}

// ask().map(parse).map(date => date.to)


function flatten<T>(array: T[][][]): T[] {
    return Array.prototype.concat.apply([], array);
}

const arr: number[][][] = [[[1], [2]]];
const flatArr: number[] = flatten(arr);
console.log(flatArr); // [1, 2, 3, 4, 5, 6]

console.log([[2]].concat([[2]], [2]))


