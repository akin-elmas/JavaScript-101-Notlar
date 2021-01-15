# JS 101 Temel - 05

    ##Template Literal 

    let name = "Akın";
    let school ="FMV Işık";
    let age ="23";
    
    // Template literal işareti(backticks) macOS'ta alt + noktalı virgül ile windowsta altgr + noktalı virgül ile 
    oluşturulur. Değişkenler çağırılırken dolar işareti ve tırnaklı parantez kullanılır.
    
    Dinamik işlemlerde oldukça işe yarayan ES6 ile gelen yeni bir özelliktir.

    \n işareti bir alt satıra geç anlamına gelmektedir. 

    let a = `İsim: ${name}\nOkul:${school}\n${age}`;
    console.log(a);

    