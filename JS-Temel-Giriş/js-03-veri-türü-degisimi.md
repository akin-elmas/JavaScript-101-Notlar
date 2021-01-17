# JS 101 Temel - 03


   ## Veri Tipi Değişimi
    
   #### String : Değeri parantez içine alarak String keywordü ile çevirebiliriz. Daha önceden tanımlanmış bir fonksiyondur, parantez içine argümanı vermemiz yeterlidir.
```
    let value;

    value = String(312);
    value = (10).toString(); 
```
   #### Number : Sadece stringler içerisinde sayılar varsa number'a çevrilir.
   ```
    value = Number("1234"); // Stringten number'a çevirdik.

    value = Number(null); // 0 
    value = Number(undefined); // NaN 
    value = Number("Hi"); // NaN Stringler number'a çevrilemez.
    value = Number ([1,2,3]); // NaN  arraylerde number'a çevrilemez dolayısıyla not a number(sayı değil).
```
    let a = "hi" + 46;
    console.log(typeof a); // String olarak karşımıza çıkacaktır. Number ve String'i topladığımızda işlemde tip dönüşümü gerçekleşir. Number direkt olarak stringe çevrilir ve sonuç hi46 olur.
```
    let b = 33+"3"; 
    console.log(a); // 333 çıkacaktır. 

```
