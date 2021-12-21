// Задание 5

let arr = [1, 'array', null, true]
console.log(arr)
// длина отображает при проверке кода в консоли браузера

let countArr = arr.map(function(item, index, array){
  return index + 1
});