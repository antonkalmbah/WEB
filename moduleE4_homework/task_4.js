function Electrical_appliances(name){
  this.electro = 'Електрический прибор',
  this.name = name
}

Electrical_appliances.prototype.getWeight = function(weight){
    console.log(`Вес прибора ${weight} г.`)
}

Electrical_appliances.prototype.price = function(price){
    console.log(`Цена ${price} рублей`)
}

function Delivery(name, country, price_delivery){
  this.name = name,
  this.country = country,
  this.price_delivery = price_delivery
}

Delivery.prototype.price_delivery = function(price_delivery){
    console.log(`Цена доставка ${price_delivery}`)
}

Delivery.prototype = new Electrical_appliances()

const router = new Delivery('Роутер', 'Россия' );
const table_lamp = new Delivery('Настрольная лампа', 'Америка', 2000);

// router.getWeight(500)
// router.price(2500)
// table_lamp.getWeight(650)
// table_lamp.price(2200)

// console.log(router)
// console.log(table_lamp)
