# JS 102 Temel - 02

    ## Koşul Durumları

            #### if(koşul){
                // çalıştırılacak kodlar
            }else {
                // üst blok çalışmazsa çalışır.
            }
            parantez içindeki koşullar sağlandığı anda kod bloğu çalışır.

            Birden fazla koşul yazmak için else if ekleyebiliriz.

            if(process ==="1"){

            }
            else if(process ==="2"){
                // yukarıdaki koşulun çalışmadığı durumda bu koşulu dener.
            }else {

            }

            #### Ternary Operatörü
            Tek satırda if yapısı kurmamızı sağlar koşul en başta yazılır. uygunsa ilk kısım çalıştırılır değilse iki noktanın sol kısmı çalıştırılır.
            console.log(num ===100 ? "sayı 100" : "sayı 100 değil")
            

            #### switch case 
            // process değeri 1 ise case 1 e girer çalışır ve break anahtar kelimesi yardımıyla bloktan çıkar. Hiç bir case'e giremediği takdirde default çalışır.
            let process = 1; 
            switch(process){
                case 1:
                    console.log("Aşama 1");
                    break;
                case 2:
                     console.log("Aşama 1");
                     break;
                default:
                    console.log("Geçersiz işlem");
            }
                