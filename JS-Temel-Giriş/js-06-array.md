# JS 101 Temel - 06

    ##Array

    İki farklı şekilde array oluşturulabilir.

    let num=[a,b,c,d,e];

    let num2 = new Array(1,2,3,4);

    Arraylerin ilk elemanının indisi 0'dır.

    value = num[0]; // ilk elemanı verir. aynı işlem ile array içinden indisi verilen ögeyi seçip yerine yeni değer atanabilir.

    num[0] = 232023; // yeni değer atandı.

    IndexOf metodu buradada kullanılır.

    num.push(333); // array sonuna değer ekleme.
    num.unshift(23); // array başına değer ekleme.

    num.pop();// array sonundan değer atma.
    num.shift(); // array başından değer atma.

    num.splice(0,3); // belli bir kısmı atma.
    num.reverse(); // elemanları ters çevirdik.

    value = numbers.sort(); // elemanları sıralama, ilk rakamlara veya karakterlere göre sıralamaktadır.
    
    // küçükten büyüğe sıralama.
    value = numbers.sort(function(x,y){ 
        return x-y;
    })