// Задание 1

let a = prompt('Введите значение: ')

let b = ++a;

console.log(b)

let check = typeof b;

console.log(check)

let x = b % 2;

switch (x) {
  case 0:
    console.log('Чётное');
    break;
  case 1:
    console.log('Нечётное');
    break;
  default:
    console.log('Упс, кажется, вы ошиблись');
}



// Задание 2

let x = 2;
 
switch (typeof x) {
    case 'string':
        console.log('X - строка');
        break;
    case 'number':
        console.log('X - число');
        break;
    case 'boolean':
        console.log('X - булевое значение');
        break;
    default:
        console.log('Тип X не определён');
}


// Задание 3

var str = 'Hello';

str = str.split("").reverse().join("");

console.log(str);


// Задание 4

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

alert( getRandomArbitrary(0, 100) );


// Задание 5

let arr = [1, 'array', null, true]
console.log(arr)
// длина отображает при проверке кода в консоли браузера

let countArr = arr.map(function(item, index, array){
  return index + 1
});


// Задание 6

array = [1,1,1,1,1]; 

arr = array.reduce(function(a, b){ 
  return (a == b) ? true : false; 
});

console.log(arr);

// если в массиве добавить любую цифру отлючную от 1, то будет False, а в данном случае, т.к. одни 1 - True


// Задание 7

let arr = [8, 3, 0.6, null, 2, 0.8, 67, undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);


// Задание 8

let numbers = new Map([
  [1, 'first'],
  [2, 'second'],
  [3, 'third']
]);
 
for(let elem of numbers) {
  console.log(elem);
}