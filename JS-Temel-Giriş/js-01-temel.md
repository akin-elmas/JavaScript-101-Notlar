# JS 101 Temel - 01
    
    Yorum Satırları

    // tek satır yorum satırları çift slaş ile oluşturulur.
    /*
    çoklu yarım satırı tek slaş bir yıldız, bir yıldız tek slaş ile oluşturulur ve satır satır yorum oluşturulabilir.
    */


    Değişken oluşturma 
    
    JavaScript'te veri tipi belirtmemize gerek yoktur otomatik veri tipi(number,string vs.) belirlenmektedir.
    
    "var" anahtar kelimesi ile değişken oluşturulup direkt değer atanabilir veya tanımlandıktan sonra değer atanabilir.
  
    var a = 20; 
    // "a" adlı değişkene deklare edildiği satırda değer atanmıştır.
    
    var a; // declaration(beyan etmek, bildirmek) "a" adlı değişkenin varlığı bildirilmiştir.
    a=20; // assignment(atamak, belirlemek, tayin etmek) soldaki değer sağ tarafa atanmıştır.

    
    ## Data Type(Veri tipleri) : Primitif ve Referans veri tipleri olarak ikiye ayrılmaktadır.

        ### Primitive(Primitif,İlkel): Number, String, Booelan, Null, Undefined 
        
        #### Number Veri tipi : JavaScript dili weak-typed yani güçsüz türlü bir dildir. Değişkenlerin ve parametrelerin türlerini bildirmek gerekmez. Tür kullanımdan dolaylı olarak çıkartılır.
      
        var a = 4 ; // Number veri tipi
        //Veri tipini kontrol etmek için "typeof" anahtar kelimesi kullanılır.
        console.log(typeof a);  // çıktısı Number olacaktır.
        
        #### Booelan Veri tipi : true ve false değerleri alır. Koşul yapılarında kullanılır.
        
        var a = true;
        
        #### Null Veri tipi: typeof ile kontrol ettiğimizde object olarak karşımıza çıkar. İçinde herhangi bir değer taşımaz. Koşul yapılarında seçilen ögenin var mı yok mu veya boş mu olduğunu kontrol etmek için kullanabiliriz. "Not: falsy değerlerdir." 
       
        var a = null;
        
        #### Undefined: Hiç bir değer tanımlaması yapılmamıştır.
        
        var a;
        console.log(typeof a); // undefined 
        
        ### Reference(Referans): Array, object, Function, Date. Referans veri tipleri Ram(Random-access memory) içinde store kısmı adrestir

        Referans veri tiplerinin her biri typeof ile kontrol edildiğinde object olarak karşımıza çıkacaktır.

        #### Array : Değişken ismi deklare edildikten sonra köşeli parantez kullanılır.
        
        var numbers = [1,2,3,4,5];
        
        #### Object (Obje) : Değişken ismi deklare edildikten sonra tırnaklı parantez kullanılır. Key(anahtar) ve value(değer) şeklinde kullanılır. ":" iki nokta işaretinin sol kısmı key sağ kısmı ise value'dur. String(Sicim, yazı karakteri) türünde kullanılan value'lar çift tırnak içinde tanımlanmak zorundadır. Bir obje içinde birden fazla key value tanımlamak için virgül (,) kullanmak gerekmektedir.
        
        
        var person = {
            name:"Akın",
            age: 23
        }
        
        #### Function(Fonksiyon) : Fonksiyonlarda referans veri tipleridir. Bir değişkena atanarak veya isimli olarak kullanılabilir. Örnekler ES5(ECMAScript 5) üzerinden verilmiştir. Fonksiyonlarda parantez içerisine argüman veya parametre şeklinde adlandırılan değerler girilebilir.
        
        var hello = function(){
            console.log("Merhaba"); 
        }

        function hello() {
            console.log("Merhaba");
        }
         
        Referans veri tipleri referanslar üzerinden bellekteki yeri göstermektedir. Primitif veri tipleri ise değişkenin direkt değeridir.
        Referans veri tipleri bellekte iki adet yer oluşturmaktadır, değişkenin ismi ve değişkenin değeri. Primitif değerlerde durum böyle değildir. 
        Bir süre sonra bu kavramlar karmaşa yaratacaktır. Bunun için "type coercion"(tür zorlaması) konusuna bakmanız gerekmektedir.
        
        

    

