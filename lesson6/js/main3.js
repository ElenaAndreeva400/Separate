'use strict';

const getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
 
    let randomNumber = getRandomInt(100); 
    

    return function start() {
        console.log('randomNumber: ', randomNumber);
        const num = prompt('Угадай число от 1 до 100');

        if (num === null) {
          alert('До свидания');
          return;
        }

            if (isNum(num)) {
            const realNum = +num;

            if(realNum > randomNumber) {
              alert('Загаданное число меньше');
              start();
            } else if (realNum < randomNumber) {
              alert('Загаданное число больше');
              start();
            } else {
              if (confirm('Вы угадали! Сыграем еще?')) {
                game();
              } else {
                alert('До свидания');
              }
            } 
        } else {
          alert('Введите число');
          start();
        }
        
      };
      
};

game()();


