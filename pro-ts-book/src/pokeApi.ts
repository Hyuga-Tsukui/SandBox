// const axios = require("axios").default;

import axios from "axios";


function fetchPokemon(name: string): Promise<any> {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}


function main(pokeName: string) {
    fetchPokemon(pokeName)
        .then(res => res.data)
        .then(data => data.name)
        .then(name => console.log(name))
        .catch(err => console.error(err));
}


function readFromStdin(): Promise<string> {
    return new Promise((resolve, reject) => {
      process.stdin.resume();
      process.stdin.setEncoding("utf8");
  
      let data = "";
      process.stdin.on("data", chunk => {
        data += chunk;
      });
  
      process.stdin.on("end", () => {
        resolve(data);
      });
  
      process.stdin.on("error", err => {
        reject(err);
      });
    });
  }
  
  readFromStdin()
    .then(input => {
      main(input.replace("\n", ""));
    })
    .catch(err => {
      console.error("エラーが発生しました:", err);
    });
  