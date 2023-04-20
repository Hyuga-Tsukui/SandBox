import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../foo.txt");

const wait = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

const timeout = async (time: number) => {
  await wait(time);
  throw new Error("Timeout!");
};

const p = readFile(dataFile, { encoding: "utf8" });

const result = await Promise.race([p, timeout(0)]).catch(() => {
    console.log("fallback");
    return "";
});

let count = 0;
let currentIndex = 0;

while (true) {
  const nextIndex = result.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
