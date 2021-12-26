function devide() {

    let a = prompt('Введите значение: ')
    
    let x = a % 2;
    
    switch (x) {
      case 0:
        console.log('Чётное');
        break;
      case 1:
        console.log('Нечётное');
        break;
      default:
        console.log('Упс, кажется, вы ошиблись');
    }};
    
devide()