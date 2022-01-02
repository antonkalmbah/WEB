class Electrical_appliances{
  static thing(thing){
    console.log(`Электрический прибор-${thing}`)
  }
}

class Lamp extends Electrical_appliances{
  static weight(weight, country){
    super.thing();
    console.log(`Вес ${weight}г.`);
    console.log(`Made in from ${country}`);
  }
}

class Router extends Electrical_appliances{
  static weight(weight, country){
    super.thing();
    console.log(`Вес ${weight}г.`);
    console.log(`Made in from ${country}`);
  }
}




Electrical_appliances.thing('Лампа')
Lamp.weight('500', 'Russia')
Electrical_appliances.thing('Роутер')
Router.weight('650', 'America')