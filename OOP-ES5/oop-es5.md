# JavaScript Temel - OOP - ES5


### Obje Oluşturma - Object literal

let employee = {
    name:"Akın",
    age:23
};

### Constructor - Kurucu Fonksiyon

Kurucu fonksiyonlar vasıtasıyla objeleri fonksiyonlar vasıtasıyla üretebiliriz.
Kurucu fonksiyonun ilk harfi büyük harf olur.

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Yeni oluşturduğumuz objenin ismi: emp1, "new" keywordü ile kurucu fonksiyonumuzdan kalıtarak objemizi oluşturduk. Parantez içi ögeler(argüman,parametre) oluşturulacak yeni objenin name ve age değeridir.

let emp1 = new Employee("Akın",23);

### Prototype ES5 - Inheritance(Kalıtım)

Javasript prototype tabanlı bir dildir. ES6'da var olan class yapısı derlendikten sonra prototypelara dönüştürülür.

Her objenin kendi içinde bir prototype(obj) özelliği bulunmaktadır.
Kurucu fonksiyon içindeki metodlar protoype'a yazılmasa her türetilen obje belleği şişirir.

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos= function(){ 
        console.log("bilgiler...")
    }
}
let emp1 = new Employee("Akın");


### Object.create() Metodu

Object.create() metodu ile kalıtılan objenin protoype'ı direkt türetildiği objeye bağlı olur.


## Function Prototype - Call, Apply, Bind

#### Call, Apply, Bind

Call : ilk armümanı obj. Kurucu fonksiyon içine başka bir kurucu fonksiyonun field'larını çağırabiliriz. ES5 OOP metodları.

Apply : ilk argüman obj, diğer argümanlar [] array içinde verilir.

Bind : Genelde eventlerde kullanılır, kopya fonksiyon üretir. İstenilen satırda kullanılır.

let obj1 = {
    number1:22;
    number2:33
}

function addNum(number3,number4){
    console.log(this.number1+ this.number2 + number3,number4);
    // this obj1'i gösteriyor.
}
addNum.call(obj1,100,200);


function getNumbersTotal(num3,num4){
    return this.number1 + this.number2 + num3 + num4;
}

let copyFunc = getNumbersTotal.bind(obj1);
console.log(copyFunc(100,200));