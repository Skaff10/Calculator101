let display = document.querySelector('.display');
let ac = document.querySelector('.ac');
let remove = document.querySelector('.material-symbols-outlined');
let equal = document.querySelector('.equals');
let percent = document.querySelector('.percent');
let opt = document.querySelectorAll('.opt');
let btn = document.querySelectorAll('.btn');


let operator = '';

btn.forEach(butn => {
    butn.addEventListener('click', () => {
        display.innerHTML += butn.innerHTML;
    });
});

ac.addEventListener('click', () => {
    display.innerHTML = '';
    operator = '';
});

let value1 = null;
let value2 = null;
opt.forEach(x => {
    x.addEventListener('click', () => {
       value1 = parseFloat(display.innerHTML);
       display.innerHTML = '';
       operator = x.innerHTML;
    });
    
});

equal.addEventListener('click', () => {
    value2 = parseFloat(display.innerHTML);
    let result = 0;
    switch (operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case 'x':
            result = value1 * value2;
            break;
        case '÷':
            result = value1 / value2;
            break;
       }

    display.innerHTML = result;
    operator = '';
    value1 = null;
    value2 = null;
    
});

percent.addEventListener('click', () => {
    display.innerHTML = parseFloat(display.innerHTML) / 100;
});

remove.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
});