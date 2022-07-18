// sync is line by line
const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')
// fs.read

const first = readFileSync('./content/first.txt', 'utf8')  // reading a file
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first);
console.log(second);
// writing file --> if file already exist the data will be overwritten or if it does not exists that the file will be created
writeFileSync('./content/result.txt',  // file path
                `here is the result of : ${first} , ${second}`, // data to be writen in file
                {flag : 'a'}   /* flag 'a' will append the file*/) 