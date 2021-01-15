# JS 101 Temel - 07

    ##Object 

    Objeler tırnaklı parantez içerisinde key ve value'lar şeklinde oluşturulabilir. Obje içine yazılan fonksiyonlar metod olarak adlandılır.

    let developer = {
        name : "Akın",
        age : 23,
        email : "akinakin@gmail.com"
       
       work : function(){
           console.log("Akın akın kompela");
       }
    

    }
    
    value = developer.email; // email değerine ulaştık.

    ##Array içinde Obje

    let developer = [
        {name:"Akın", age:23},
        {name:"Can",age:33}
    ]
    value = developer[0].name;  // 0 ıncı indisteki objemizin name özelliğine erişim sağladık.

    ##Date(Zaman) Objesi

    let now = new Date(); // Şu anki zamanı almamızı sağlar.
    console.log(now);
    
