# JS 101 Temel - 04
    
    ##Aritmetik Operatörler
        * Toplama  : + 
        * Çıkarma  : - 
        * Çarpma   : *
        * Üs Alma  : **
        * Bölme    : /
        * Mod Alma : %
        * Arttırma : ++
        * Eksiltme : --

    ##Math Objesi

    value = Math.PI; // pi sayısını dönmektedir.
    value = Math.round(3.5); // Noktanın solundaki değeri aşağı veya yukarı yuvarlar.

    value = Math.ceil(3.2);// Direkt yukarı yuvarlar.

    value = Math.floor(3.2);// Direkt aşağıya yuvarlar.

    value = Math.sqrt(16); // Karekök alma metodu.

    value = Math.abs(-10); // Mutlak değeri almak.

    value = Math.pow(8,3); // Üssünü alma metodu.

    value = Math.max(10,-1,33); // Değerler arasındaki en yüksek değeri döner.

    value = Math.min(10,3); // Değerler arasında en küçük değeri döner.

    value = Math.random(); // Rastgele değerler üretir.

    ##String

    let name = "Akın";
    let surName= "Elmas";

    fullName = name + " " + surname; // stringleride toplama operatörü ile tek değişkende tutabiliriz.

    fullName.length; // String uzunluğunu ölçebiliriz.

    Concat Metodu:
    fullName = name.concat(" ",surName); // Akın Elmas şeklinde birleştirme işlemi gerçekleştirdik.

    value = fullName.toLowerCase(); // bütün karakterleri küçük harfe çevirir.

    [firstName.length -1 ]; // uzunluğu bilinmeyen stringlerde kullanılır, son elemanı verir.

    Index Of Metodu

    value = firstname.indexOf("a"); // içine verilen karakterin indis numarasını verir.

    Split Metodu

    let langs = "js,py,c";

    value = langs.split(","); // her bir elemanı alır, array içine yerleştirir.

    Replacen
    
    String içinden bir ögenin yerine başka bir ögeyi yerleştirmek içine kullanılır.

    value = langs.replace("js","swift"); // ilk ögenin yerine ikinciyi yerleştirdi.

    Includes 

    value = langs.includes("js"); // parametre var ise true döner yoksa false.

