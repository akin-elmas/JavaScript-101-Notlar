# JS 102 Temel - 05

    ## Scope - Kapsam



    
    #### Global Scope
    
    Üç keyword kullanılarak tanımlanmış değişkenler global scopetadır. 

    var value1 = 10;
    let value2 = 13;
    const value3 = 19;

    #### Function Scope

    Fonksiyon tanımlandıktan sonra tırnaklı parantez içerisindeki bölüme function scope denilmektedir.

    Fonksiyon içinde tanımlı olan değişken global scope'ta aynı isimli tanımlı olsada bir problem oluşturmaz.

    Fonksiyon kapsamında tanımlı olan değişkenler globaldede tanımlıysa karışmaz lakin block kapsamında durum "var" için farklıdır.

    function Function(){
        var value1 = 10;
        let value2 = 13;
        const value3 = 19;

        console.log(value1,value2,valu3)
    }


    #### Block Scope

    Block scope içinde tanımlanan var değişkeni dışarıda çağırıldığında kullanılabilir lakin let ve const ile tanımlanan değişkenler dışarıda var olmaz. var keywordü globaldede tanımlıysa değerleri değişir ve problem yaratabilir.

    let ve const ile tanımlanan değişkenler block scopeta var olurlar globaldede tanımlıysa birbirleri ile karışmazlar.
    if(true){
        var c = 10;
        let b = 22;
        const d = 33;
    }

    console.log(c);
    console.log(b);
    console.log(d);