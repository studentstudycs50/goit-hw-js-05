// Задание 5
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000



class Car {

    static getSpecs({ maxSpeed, speed, isOn, distance, price }) { // arguments distracturing
        console.log(
            `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
        );
    }

    constructor({ speed: speed = 0, price, maxSpeed, isOn: isOn = false, distance }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }


   


    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0
    }
    

    accelerate(value) {
        let accelerateSpeed = this.speed + value;
        this.speed = (accelerateSpeed < this.maxSpeed) ? accelerateSpeed : this.maxSpeed;
        return this.speed
    }

    decelerate(value) {
        let deAxelerate = this.speed - value;
        this.speed = (deAxelerate > 0) ? deAxelerate : 0;
        return this.speed
    }

    drive(hours) {
        this.isOn ? (this.distance += hours * this.speed) : 0;
      
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
//const mustang = new Car({ maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000 });

// let car = { maxSpeed: 200, speed: 150, isOn: true, distance: 100, price: 2000 }

mustang.turnOn();
mustang.accelerate(50);
 mustang.drive(2);
mustang.drive(1)




    mustang.turnOn();
    mustang.accelerate(50);
    mustang.drive(2);

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

    mustang.decelerate(20);
    mustang.drive(1);
    mustang.turnOff();

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

    console.log(mustang.price); // 2000
    mustang.price = 4000;
    console.log(mustang.price); // 4000



