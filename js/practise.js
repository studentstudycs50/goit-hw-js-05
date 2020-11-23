// // find letters glassnie 

//  const string = 'lorem spam find you uu';

// const searchLiteral = function (string, literal) {
//  // const LITERAL = 'oeaiu';
//   let total = 0;
//   const wordsArr = string.split(' ');
//   const symbolsArr = literal.split('');
//  //console.log(symbolsArr);

//   for (const word of wordsArr) {
//     let letters = word.split('');
//     for (const letter of letters) {
//       let symbol = literal.includes(letter);

//       if(symbol){
//        total+=1;
//       }
//     }
//   }
//   return total;
// };

// // console.log(searchLiteral(string));

// //вывести алфавит, вычленить глассные и
// //написать колличество 

// const searchVowels = function (string) {
//     let indexSymbol = 'a'.charCodeAt(); 
//     let alphabet = ''
//     let vowels = ''
//     // const LITERAL = 'oeaiu';
//     //97 101 105 111 117 
//    // console.log(alphabet);
//     for (let i = 0; i < 26; i += 1){
//         alphabet += String.fromCharCode(indexSymbol);
//         indexSymbol += 1;
     
//     }
//     for (let j = 0; j < alphabet.length; j += 1 ) {
//        // console.table(alphabet[j], alphabet[j].charCodeAt());
//         if (alphabet[j].charCodeAt() === 97
//             || alphabet[j].charCodeAt() === 101
//             || alphabet[j].charCodeAt() === 105
//             || alphabet[j].charCodeAt() === 111
//             || alphabet[j].charCodeAt() === 117) {
//             vowels += String.fromCharCode(alphabet[j].charCodeAt())

//         }
//     }
//     //console.log(vowels);
//     return searchLiteral(string, vowels);
    
//     //return alphabet
    
// }
// console.log(searchVowels(string)); 



// let string = 10;
// while (string >= 1) {
//     console.log(string);
//     string--;
// }


// выводим строку в обратном порядке

// function reverseString(str) {
//     let newStr = ''
//     for (let letter of str) {
//         newStr = letter + newStr
//     }
//     return newStr
 
// }
// console.log(reverseString('abcdefj')); 

// есть строка 'abcdefj'
// jfedcba

// const reverseString = function (str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('abcdefj'));

// function reverseString(str) {
//     let newStr = '', i;
//     for (i = str.length - 1; i >= 0; i--) {
//         // newStr += str.charAt(i);
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// console.log(10,9,8,7,6,5,4,3,2,1,0);

// for (let i = 10; i >= 0; i-=1) {
//     console.log(i);
// }
// function reverseString(str) {
//     let newStr = '';
//     for (let letter of str) {
//         // newStr += letter;
//         newStr = letter + newStr;
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// const reverseString = function (str) {
//     let newStr = '';
//     for (let i in str) {
//         newStr = str[i] + newStr;
//         // console.log(i);
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// выводим числа в обратном порядке ot 10 do 0


// for (let i = 10; i >= 0; i -= 1){
//    console.log(i);
 
// }


// const arr = [2, 3, 4, 5, 6, 7,100,  8, 12, 25, 36]

// const maxNum = function (array) {
//     //console.log(Math.max(array));
//     return Math.max.apply(Math, array)
// }
// const num = maxNum(arr);
// console.log(num);



// const user = {
//     name: 'Ann',
//     age: 20,
//     showData() {
//       console.log(this.name, this.age);  
//     },
// }
// //user.showData()
 
// const cars = [
//     { name: 'bmv' , age: 2 },
//     { name: 'audi', age: 3},
//     {name: 'mersedes', age: 1 }
// ]
// for (let car of cars) {
//     //console.log(car); // see objects 
//    // console.log(car.name, car.age);
//    user.showData.call(car)
// }

// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog


// const User = function(name, age, status){
//     this.name = name;
//     this.age =age;
//     this.status = status
// }

// const bob = new User ('bob', 23, 'admin')
// const alex = new User ('alex', 23)
// console.log(alex);




// create game 

// const Hero = function(name, hp = 100, hitPower = 2, speed = 1){
//     this.name = name;
//     this.hp = hp;
//     this.hitPower = hitPower;
//     this.speed = speed;

// }
// Hero.prototype.getHit = function(hitPower, speed){
//     this.hp = this.hp - hitPower * speed
// }
// const spiderMan = new Hero('spiderMan', 100, 10, 5)
// const hulk = new Hero ('hulk', 100, 30, 1)
// hulk.getHit(spiderMan.hitPower, spiderMan.speed)
//  console.log(spiderMan);
//  console.log(hulk);


// const Hero = function(name, hp = 100, hitPower = 2, speed = 1){
//     this.name = name;
//     this.hp = hp;
//     this.hitPower = hitPower;
//     this.speed = speed;

// }
// Hero.prototype.getHit = function(hitPower, speed){
//     this.hp = this.hp - hitPower * speed
// }
 
// const GoodHero = function(name, hp, hitPower, speed, kindNess){
//     this.kindNess = kindNess;
//     Hero.call(this, name, hp, hitPower, speed) // передает этот контекст this.name = name;
//     //this.hp = hp;
//     //this.hitPower = hitPower;
//    // this.speed = speed;
// }

// //const GoodHero = new Hero ();
// const BadHero = new Hero ();
// //console.log(GoodHero);
// const spiderMan = new GoodHero('spiderMan', 100, 5, 2, 10)
// console.log(spiderMan);
// //const spiderMan = Object



// const greet = function(guest, stars) {
//     return `${guest}, welcome to ${stars}-star ${this.name}!`;
//   };
  
//   const hotel = { name: 'Resort Hotel' };
//   const motel = { name: 'Sunlight Motel' };
  
//  // console.log(greet.call(hotel, 'Mango', 5));
//   // "Mango, wellcome to 5-star Resort Hotel!"
  
//   //console.log(greet.call(motel, 'Poly', 4));
//   // "Poly, wellcome to 4-star Sunlight Motel!"


//   console.log(greet.call(motel, 'Ann', 5));



// create new type

// function Product(brand, price){
// this.brand = brand;
// this.price = price;

// this.getInfo = function(){
//     return(this.brand, this.price)
// }
// }
// console.log(new Product('apple', 1000));  // вызываем объект
