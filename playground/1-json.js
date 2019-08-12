const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync(__dirname + '/1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data)
// console.log(data.title)
// console.log(data.author)

const data = JSON.parse((fs.readFileSync(__dirname + '/1-json.json')))
data.name = 'Khoi'
data.age = '25'
console.log(data)
const dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);
