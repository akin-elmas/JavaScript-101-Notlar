# JS 101 Temel - 02

Scope = Kapsam

## Değişken Oluşturma var, let, const
#### var : var anahtar kelimesi ile değişkenleri tanımlayabiliriz. Atanan değer daha sonra değiştirilebilir. var anahtar kelimesi ile birkez daha aynı isimde değişken tanımlayabiliriz. Function scopetur.
```
var a=20;
var a; // intialize 
a=20; assignment
    
```
#### let : Yalnızca bir kere tanımlanabilir fakat değer ataması işlemi birden fazla yapılabilir. Block scopetur.
```
let a=20;
 a=10;

let a=24; // yapılamaz yukarıda hali hazırda tanımlanmıştır.
```
#### const : Yalnız bir kere tanımlanabilir, yalnız bir kere değer ataması yapılabilinir. İstisnai bir durum olarak array olarak tanımlanan const değişkene, değer eklemesi yapabiliriz. Block scopetur. 
```
const a = 10; // oluşturulduğu yerde değer atanmak zorundadır.
```
