// function readFromStdin(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     process.stdin.resume();
//     process.stdin.setEncoding("utf8");

//     let data = "";
//     process.stdin.on("data", chunk => {
//       data += chunk;
//     });

//     process.stdin.on("end", () => {
//       resolve(data);
//     });

//     process.stdin.on("error", err => {
//       reject(err);
//     });
//   });
// }

// readFromStdin()
//   .then(input => {
//     console.log(validBraces(input.replace("\n", "")));
//   })
//   .catch(err => {
//     console.error("エラーが発生しました:", err);
//   });


function validBraces(braces: string): boolean {

  const startBraces = ['(', '{', '['];
  const endBraces = [')', '}', ']'];

  const stack: string[] = [];

 for(let brace of braces) {
    
    if(startBraces.indexOf(brace) !== -1) {
      stack.push(brace);
      continue;
    }

    if(stack.pop() === startBraces[endBraces.indexOf(brace)]) {
      continue;
    }
    return false
  };

  return stack.length === 0;
  
}