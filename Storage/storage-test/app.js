/* // Session Storage

// HTML içindeki ögeleri "id" leri ile seçtik.
let add = document.querySelector("#add");
let del = document.querySelector("#delete");
let clear = document.querySelector("#clear");

// Input

let addkey = document.querySelector("#addkey");
let addvalue = document.querySelector("#addvalue");
let deletekey = document.querySelector("#addkey");


// Seçilen elementlere click işlemi yapıldığında aksiyon alınacak fonksiyonları atadık.
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);


function addItem(e){
    // sessionStorage objesinin içindeki setItem metodu ile key ve value parametrelerini vererek kayıt ettik.
    sessionStorage.setItem(addkey.value, addvalue.value);
    alert("Eklendi");
}
function deleteItem(e){
    // Sadece key vererek ilgili değerleri silebiliriz.
    sessionStorage.removeItem(deletekey.value);
}
function clearItems(e){
    // Bütün verileri siler.
    sessionStorage.clear();
}





// Local Storage

localStorage.setItem("silah","g3");
let value = localStorage.getItem("silah"); */

// Clear işlemi aynı şekilde çalışmaktadır.

// Local Storage'a array yazmak

let language = ["js","py","jsx"];
// stringfy metodu json nesnesini alır ve stringe çevirir, locale bu şekilde ekleriz. getItem metodu ile arrayi alırkende parse metodu kullanırız
localStorage.setItem("language", JSON.stringify(language));


let value = JSON.parse(localStorage.getItem("language"));
console.log(value);