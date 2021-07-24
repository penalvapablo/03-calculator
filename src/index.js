'use strict';

const changeThemeBtn = document.querySelector('.theme__position');

// const body = document.querySelector('body');

// const title = document.querySelector('.header__title');

// const themeTitle = document.querySelector('.theme__title');
// const themeNumber = document.querySelector('.theme__number');
// const themePosition = document.querySelector('.theme__position');
const theme1 = document.querySelectorAll('.themeChange');
console.log(theme1);

const screen = document.querySelector('.screen__number');
const keyboard = document.querySelector('.keyboard');
const btn = keyboard.querySelectorAll('button');

function changeTheme() {
  if (changeThemeBtn.classList.contains('theme__position--1')) {
    changeThemeBtn.classList.replace(
      'theme__position--1',
      'theme__position--2'
    );
    theme1.forEach((element) => {
      element.classList.add('theme--2');
    });
  } else if (changeThemeBtn.classList.contains('theme__position--2')) {
    changeThemeBtn.classList.replace(
      'theme__position--2',
      'theme__position--3'
    );
    theme1.forEach((element) => {
      element.classList.replace('theme--2', 'theme--3');
    });
  } else {
    changeThemeBtn.classList.replace(
      'theme__position--3',
      'theme__position--1'
    );
    theme1.forEach((element) => {
      element.classList.remove('theme--3');
    });
  }
}
changeThemeBtn.addEventListener('click', changeTheme);

// clickear botones

function math() {
  let a = '0',
    b = '',
    operador = '',
    result = '';
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      const clickedBtn = e.innerText;
      // console.log(`boton clickeado: ${typeof parseFloat(clickedBtn)}`);
      const btnType = e.id;
      // const currentNumber = Number(e.innerText);

      // si el numero ya tiene ".", no puede agregar otra
      if (clickedBtn === '.' && a.includes('.') && operador === '') return;
      // Si el boton clickeado es un numero y A = 0, A tiene que ser el numero clickeado
      if (btnType === 'numero' && a === '0') {
        a = clickedBtn;
        screen.innerHTML = a;
      } else if (btnType === 'numero' && operador === '') {
        a += clickedBtn;
        screen.innerHTML = a;
      }

      console.log(`a = ${a}`);

      // Operador
      if (a != '0' && btnType === 'operador') {
        operador = clickedBtn;
      }

      console.log(`operador: ${operador}`);

      // B
      if (a != '0' && operador != '' && btnType === 'numero') {
        b += clickedBtn;
        screen.innerHTML = b;
      }
      console.log(`b = ${b}`);

      //RESET
      if (clickedBtn === 'RESET') {
        (a = '0'), (b = ''), (operador = '');
        screen.innerHTML = a;
      }

      // DELETE
      if (clickedBtn === 'DEL' && b === '' && operador === '' && a != '0') {
        a = a.slice(0, -1);
        screen.innerHTML = a;
        if (a === '') {
          a = '0';
          screen.innerHTML = a;
        }
      } else if (clickedBtn === 'DEL' && b != '') {
        b = b.slice(0, b.length - 1);
        console.log(`b despues de del: ${b}`);
        screen.innerHTML = b;
      }

      // RESULTADO
      if (
        (clickedBtn === '=' && b != '') ||
        (btnType === 'operador' && b != '')
      ) {
        if (operador === '+') {
          result = Number(a) + Number(b);
        }
        if (operador === '-') {
          result = Number(a) - Number(b);
        }
        if (operador === 'x') {
          result = Number(a) * Number(b);
        }
        if (operador === '/') {
          result = Number(a) / Number(b);
        }
        screen.innerHTML = result;
        if (result % 1 != 0) {
          screen.innerHTML = result.toFixed(2);
          result = String(result.toFixed(2)).split('');
          if (result[result.length - 1] === '0') {
            result.pop();
            screen.innerHTML = result.join('');
          }
        }

        // reset variables
        a = '';
        b = '';
        operador = '';
        result = '';
      }
      console.log(`result = ${result}`);

      // Si cliqueo un operador, A es = a result
      if (a === '' && screen.innerHTML != '0' && btnType === 'operador') {
        a = screen.innerHTML;
        operador = clickedBtn;
      }
      // Limite de pantalla
      console.log('------------------');
    });
  });
}
math();

// ver problema decimales.. probrar split del numero con coma

// attach teclas con teclado

// desplazarme con las flechas en el teclado
