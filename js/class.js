// / 1. Реализуй модель пользователя
// class User {
//   // Добавь свойства:
//   // name,
//   // age,
//   // role(по умолчанию user),
//   // permissions(по умолчаию пустой массив)
//   //   isOnline(по умолчаию пустой false)
//   // isAuthenticated(по умолчаию пустой false)
//   constructor() {}
//   //   добавить геттер и сеттер для свойства permissions.
//   //   Сеттер будет записывать в permissions новые данные
//   //   добавить геттер и сеттер для свойства role. Будут записываться admin и partner
//   //   Добавь код для того, чтобы пользователь вошел в аккаунт. Свойство isAuthenticated измени в true
//   authenticate() {}
//   //   Добавь код для того, чтобы пользователь стал активным. Свойство isAuthenticated измени в true
//   connect() {}
//   //   Добавь код для того, чтобы пользователю можно было расширить права доступа. БУдут записываться
//   //   данные: "html", "js", "react", "node"
//   addPermission() {}
// }
// const alex = new User({ name: "Alex", age: 25 });
// Проверь функционал
// 2. Расширь функционал базового класса на свое усмотрение.
// Как вариант, ты можешь:
// Добавить новый класс Admin
// Добавить ему собственные свойства логирования его данных.
// Дописать ему методы disconnect(), removePermissions()


// 1. Реализуй модель пользователя
// class User {
//   constructor({name, age}, role = 'user', permissions = [], isOnline = false, isAuthenticated = false) {
//       this.name = name;
//       this.age = age;
//       this.role = role;
//       this.permissions = permissions;
//       this.isOnline = isOnline;
//       this.isAuthenticated = isAuthenticated;
//   }
//   get newPermissions(){
//       return this.permissions;
//   }

//   set newPermissions(value){
//     //  this.permissions.push(value);
//     this.permissions = [...this.permissions, value]; //visipeam i dopisuem znachenie value
//   }
//   get newRole (){
//       return this.role;
//   }
//   set newRole(role){
//       this.role = role;
//   }
//   //   добавить геттер и сеттер для свойства role. Будут записываться admin or partner
//   //   Добавь код для того, чтобы пользователь вошел в аккаунт. Свойство isAuthenticated измени в true
//   authenticate() {
//       this.isAuthenticated = true;
//   }
//   //   Добавь код для того, чтобы пользователь стал активным. Свойство isAuthenticated измени в true
//   connect() {
//       this.isOnline = true;
//   }
//   //   Добавь код для того, чтобы пользователю можно было расширить права доступа. БУдут записываться
//   //   данные: "html", "js", "react", "node"
//   addPermission(permission) {
//       this.permissions = [...this.permissions, permission]
//   }
// }
// const alex = new User({ name: "Alex", age: 25 });
// alex.authenticate()
// alex.connect()
// alex.addPermissionn = "html"
// //console.log(alex.newPermissions);
// alex.addPermission("html")// write in setter some dannie
// alex.addPermission('stpd')
// //console.log(alex.newPermissions);
// //console.log(alex.newRole);
// alex.newRole = 'admin'
// console.log(alex.newRole);
// console.log(alex);
// console.log(alex.permissions);
// //Проверь функционал

// class Admin extends User {
//     constructor({name, age}, ...rest){
//         super({name, age}, ...rest) 
        
//     }
// }
// const max = new Admin({name:'Max', age: 25}, 'admin', [], true, true)
// console.log(max); 