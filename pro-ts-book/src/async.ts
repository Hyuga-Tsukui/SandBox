import { readFile } from "fs";

const sleep = (duration: number) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve, duration);
    })
};

sleep(3000).then(() => {
    console.log("3秒経ちました");
}).catch((reasone: unknown) => {
    console.log("失敗しました", reasone)
})


const promiseReadFile = (path: string, encoding: BufferEncoding) => {
    return new Promise<string>((resolve, reject) => {
        readFile(path, encoding, (err, result) => {
            resolve(result);
        });
    })
};

const promise = promiseReadFile("foo.txt", "utf-8");
promise.then((result) => {
    console.log(result);
})