# JS 102 Temel - 04

     ## Döngüler

     Belli koşullarda çalışan yapılardır.

      #### While

      // değer 10 dan küçük olduğu sürece block çalışacaktır.

      let i = 0;
      while(i<10) {

          console.log(i)
          i+=1; 
      }


     #### Break - Continue
    
     Break döngü kırar.
     Continue döngüyü başa döndürür bir sonraki değerler başlatır. While da koşula döner, for döngüsünde arttırma işlemine döner.

     let i = 0;

     while(i<10) {
         console.log(i);
         if(i ==5) {
             break; // döngüyü kırar. 5'e kadar yazdırız ve biter.
         }
         i++;
     }

    
    #### for 
    While'da yaptığımız işlemleri tek satırda yapıyoruz.

    let langs = ["py","js","css"];

    // değişkeni tanımladık, uzunluğunu aldık, arttırdık.
    for(let i =0; index< langs.length; index++){
        console.log(langs[index]); 
    }

    #### forEach

    let langs = ["py","js","css"];

    // forEach içine bir fonksiyon alır ve parametre olarak anlamlı her hangi bir isimle array içindeki ögeler içerisinde gezinebiliriz ekstra olarak index parametresi vererek indis numaralarınıda alabiliriz. 

    langs.forEach(function(lang){
        console.log(lang);
    })


    #### Map
    Map ile array içerisindeki objelerin key ve valuelarını tek tek alıp bir array oluşturabiliriz. Map'te içine bir fonksiyon ve anlamlı her hangi bir parametre alır.
    let users= [
        {name:"Akın", age:23},
        {name:"Akın", age:23},
        {name:"Akın", age:23}
    ];

    let name = users.map(function(user){
        return user.name;
    });

    #### for in
    Her bir key üzerinde gezinebiliriz değerlerini alabiliriz.
    let user = {
        name :"AKIN",
        age:29
    };

    for (let key in user) {
        console.log(key);
    }
