'use strict';

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num); 
};

function gameBot() {

  let target = 20;
  //Math.floor(Math.random() * (100 - 1)) + 1;

  let numbers = +prompt('Угадай число от 1 до 100');
  console.log(numbers);
 
    if (numbers < 0 || numbers > 100) {
    confirm('Отрицательные числа и числа больше 100 не принимаются. Введите еще один вариант');
    gameBot();
      } else if(numbers > target) {
        confirm('Загаданное число меньше. Введите еще один вариант');
        gameBot();
      } else if(numbers < target) {
        confirm('Загаданное число больше. Введите еще один вариант');
        gameBot();
      } else if(!isNumber(numbers)) {
        confirm('Это не число! Введите новое число.');
        gameBot();
      } else if(numbers === target) {
        let answer = confirm('Поздравляем, Вы отгадали!');
            if (answer) {
            gameBot();
            } else {
              return;
            } 
      // } else if (!confirm()) {
      //   return;
    }
}

gameBot();