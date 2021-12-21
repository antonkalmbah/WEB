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