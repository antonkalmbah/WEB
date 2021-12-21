// Задание 6

array = [1,1,1,1,1]; 

arr = array.reduce(function(a, b){ 
  return (a == b) ? true : false; 
});

console.log(arr);

// если в массиве добавить любую цифру отлючную от 1, то будет False, а в данном случае, т.к. одни 1 - True