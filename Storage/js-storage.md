## JavaScript Temel 102

## Session - Local Storage

Developer tools > Application > Storage bölümünden her iki alanada ulaşabiliriz.

### Session : Oturum(sekme) kapatıldığında silinir. Değerleri key value olarak tutar.


### Local : Kullanıcı silmeden silinmez.

Her iki storage nesnesinin fonksiyonları aynıdır. Kullanım amaçları farklıdır.
Her iki objede değerleri string olarak kayıt eder.


Local storage içerisine array yollamanın metodları vardır. Bunun için JSON.stringify ile set ederiz. get Metodu ile çekerkende veriyi parse ederek kullanmak durumundayız.