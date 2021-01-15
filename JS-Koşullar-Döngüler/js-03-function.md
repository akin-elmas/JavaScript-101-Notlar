# JS 102 Temel - 03

    ## Fonksiyonlar 

    // fonksiyon tanımlama.
    function hi(){ 
        //console.log("Selamlar");
        
    }

    merhaba(); // fonksiyon çağrısı (Function call)

    // fonksiyona parametre ekleyebiliriz.
    function hi(name){ 
        console.log(`${name}`);
        
    }

    hi(akın); // fonksiyon parametresi atandı.
    
    // fonksiyonlarda return keyword'ü kullanılmazsa dışarı 
    değer dönemez. return kullanıldığı noktada fonksiyon kırılıma uğrar ve altında yazılanlar çalışmayacaktır.

    function square(x){
        return x*x;  
        
    }
    square(12);


    ### Function Expression
    Bir değişkene fonksiyonu eşitleyeceğiz.

    let merhaba = function(){
        console.log("selam")
    };
    merhaba(); // değişken ismi ile fonksiyonu çağırabiliriz.

    ### IIFE (Immediately Invoked Function Expression)

    Tanımlandığı yerde çalışan fonksiyon. IIFE içindeki değişkenler dışarıda görülmez. IIFE İçinde tanımlanan değişken dışarıda aynı adda tanımlıysa problem yaratmaz.

    (function(name){
        console.log("selam: "+ name);
    })("Akın"); //