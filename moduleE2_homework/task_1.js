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