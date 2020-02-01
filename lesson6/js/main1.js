'use strict';

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num); 
};

function gameBot() {

  let target = Math.floor(Math.random() * (100 - 1)) + 1;
  //let target = 20;
  console.log(target);

      return function tryOncemore() {
      let numbers = +prompt('Угадай число от 1 до 100');
      console.log(numbers);
      let count = 10;
      if (!count) { // если равен 0
        return;
      }

          return function compare() {
            if (numbers < 0 || numbers > 100) {
            confirm('Отрицательные числа и числа больше 100 не принимаются. Введите еще один вариант');
            count--;
            tryOncemore();
              } else if(numbers > target) {
                confirm('Загаданное число меньше. Введите еще один вариант');
                count--;
                tryOncemore();
              } else if(numbers < target) {
                confirm('Загаданное число больше. Введите еще один вариант');
                count--;
                tryOncemore();
              } else if(!isNumber(numbers)) {
                confirm('Это не число! Введите новое число.');
                count--;
                tryOncemore();
              } else if(numbers === target) {
                let answer = confirm('Поздравляем, Вы отгадали!');
                    if (answer) {
                    gameBot();
                    } else {
                      return;
                    } 
              }
            };  
      };
}

gameBot();