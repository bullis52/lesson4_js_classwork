//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.order = order
    }
}
let arrClients = ['milk']
let arrClients2 = ['milk','bread']
let arrClients3 = ['milk','bread','juice']
let arrClients4 = ['choclate','sugar','icecream','iphone']



let clients = new Client(1,'vasya','pupkin','aadadadda@gmail.com',arrClients)
console.log(clients)
//створити пустий масив, наповнити його 10 об'єктами Client

let clients1 = new Client(6,'vasya','pupkin','pupkinvasya@gmail.com',arrClients);
let clients2 = new Client(5,'ivan','pupkin','pupkinvasya@gmail.com',arrClients2);
let clients3 = new Client(4,'yura','pupkin','pupkinvasya@gmail.com',arrClients3);
let clients4 = new Client(3,'ihor','pupkin','pupkinvasya@gmail.com',arrClients4);
let clients5 = new Client(1,'jenia','pupkin','pupkinvasya@gmail.com',arrClients);
let clients6 = new Client(2,'homer','pupkin','pupkinvasya@gmail.com',arrClients4);
let clients7 = new Client(7,'homer','pupkin','pupkinvasya@gmail.com',arrClients2);
let clients8 = new Client(9,'homer','pupkin','pupkinvasya@gmail.com',arrClients3);
let clients9 = new Client(8,'homer','pupkin','pupkinvasya@gmail.com',arrClients);
let clients10 = new Client(10,'homer','pupkin','pupkinvasya@gmail.com',arrClients4);
let wrapClients = []
wrapClients.push(clients1,clients2,clients3,clients4,clients5,clients6,clients7,clients8,clients9,clients10)
console.log(wrapClients)

//Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortWrapClient = wrapClients.sort(function (a,b){
    return a.order.length - b.order.length
})
console.log(sortWrapClient)

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car1 (model,maker,year,speed,volum,drivers) {

        this.model = model;
        this.maker = maker;
        this.year = maker;
        this.speed = speed;
        this.volum = volum;
        this.drivers = drivers

        this.driver = function drive() {
            console.log((`їдемо зі швидкістю ${this.speed} на годину`));
        }
        this.info = function (driver){
            console.log(`${this.model}`,`${this.maker}`,`${this.maker}`,`${this.speed}`,`${this.volum}`)
        };
        this.increaseMaxSpeed = function (newSpeed){
            this.speed = newSpeed
        }
        this.changeYear = function (newValue){
            this.year = newValue;
        }
        this.addDriver = function (driver){
            this.drivers = driver;
        };
}
let driver1 = {
    name:"vasya Pupkin",
    age : 14
};


let cars1 = new Car1('bmw','germany','2005','100','200');

//console.log(cars1)
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
cars1.driver()
//-- info () - яка виводить всю інформацію про автомобіль
cars1.info()
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
cars1.increaseMaxSpeed('150')
//-- changeYear (newValue) - змінює рік випуску на значення newValue
cars1.changeYear('2010')
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
cars1.addDriver(driver1)
/////////////////////////////////
console.log(cars1)









//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class  Car {
    constructor(model,maker,year,speed,volum,drivers) {
        this.model = model;
        this.maker = maker;
        this.year = maker;
        this.speed = speed;
        this.volum = volum;
        this.drivers = drivers

        this.driver = function drive() {
            console.log((`їдемо зі швидкістю ${this.speed} на годину`));
        }
        this.info = function (driver){
            console.log(`${this.model}`,`${this.maker}`,`${this.maker}`,`${this.speed}`,`${this.volum}`)
        };
        this.increaseMaxSpeed = function (newSpeed){
            this.speed = newSpeed
        }
        this.changeYear = function (newValue){
            this.year = newValue;
        }
        this.addDriver = function (driver){
            this.drivers = driver;
        };
    }
}
let driver = {
    name:"Ivan Ivanov",
    age : 12
};


let cars = new Car('audi','germany','2015','200','500');

//console.log(cars)
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
cars.driver()
//-- info () - яка виводить всю інформацію про автомобіль
cars.info()
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
cars.increaseMaxSpeed('300')
//-- changeYear (newValue) - змінює рік випуску на значення newValue
cars.changeYear('2020')
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
cars.addDriver(driver)
/////////////////////////////////
console.log(cars)



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Popelushka {
    constructor(name,age,footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}
let popelushka = [
    new Popelushka('zolushka1','12','30'),
    new Popelushka('zolushka2','15','34'),
    new Popelushka('zolushka3','17','35'),
    new Popelushka('zolushka4','11','31'),
    new Popelushka('zolushka5','9','37'),
    new Popelushka('zolushka6','19','39'),
    new Popelushka('zolushka7','20','31'),
    new Popelushka('zolushka8','67','33'),
    new Popelushka('zolushka9','34','29'),
    new Popelushka('zolushka10','45','40'),
]
console.log(popelushka)

let popelushka2 = popelushka.sort(function (a, b) {
    return a.legSize - b.legSize;
})
console.log(popelushka2);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name,age,footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}
let prince = new Prince('william', 25, 40);
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushkas of popelushka) {
    if (popelushkas.footSize === prince.footSize) {
        console.log(popelushkas.name + ' ' + prince.name)
    }
}
//for (const cinderella of cinderellas) {
    //if (cinderella.footsize === prince.footsize) {
        //console.log(cinderella.name + ' ' + prince.name)
    //}
//}
//  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку











