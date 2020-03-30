const express = require('express');
const app = express();

let lotteryNumbers = [];
function getLotteryNumber() {
  return Math.max(1, Math.ceil(Math.random() * 60));
}

function LotteryNumber() {
  lotteryNumbers = [];
  while (lotteryNumbers.length < 6) {
    var newNumber = getLotteryNumber();

    if (!lotteryNumbers.includes(newNumber)) {
      lotteryNumbers.push(newNumber);
    }
  }
}

app.get('/', (request, response) => {
  response.json({ message: 'Hello' });
});

app.listen(8100);
console.log('server no ar');

for (let i = 0; i < 6; i++) {
  console.log(getLotteryNumber());
}

getLotteryNumber();
