const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 4
};

let token = jwt.sign(data, 'abc');
console.log(token);

let decoded = jwt.verify(token, 'abc');
console.log(decoded);


// let message = 'I am user 1';
// let hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// }
//
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
//
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
