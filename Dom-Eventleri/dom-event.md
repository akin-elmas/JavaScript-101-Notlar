## JavaScript Temel 102 

### addEventListener

HTMLCollection içindeki body elementinde bulunan bütün ögelere addEventListener ile click, focus, blur, submit, keydown, keyup gibi birden fazla event takip edilebilir ve herhangi bir event(etkinlik) gerçekleştiğinde bir aksiyon alabiliriz. Aksiyon almak için addEventlistener içine function tanımlanır.

Not: DOMContentLoaded keywordünü kullanarak HTML dökümanı yüklendiğinde eventleri çalıştır komutu verebiliriz.


```
element.addEventlistener("submit", submitForm); 

function submitForm () {
    console.log("Submit Eventi");
    
   
}

```

### Klavye Eventleri

keypress, keydown, keyup

keypress : klavyede her hangi bir harfe basıldığında çalışan bir event.
keydown : klavyede tuşa bastığımız anda event tetiklenir.
keyup : basılı tutup bıraktığımızda çalışmaktadır.

```

document.addEventListener("keypress",run);

function run(e){
    console.log(e.which); 
}
// e.which ile hangi karaktere bastığımızı bulduk, ilgili tuşun ascii değerini aldık.

```

### Mouse Eventleri

click : elemente tıklandığında oluşur.
dblclik :  çift tıklattığımızda oluşur.

mousedown : basıp tuttuğumuzda oluşur.
mouseup : basıp bıraktığımızda oluşur.
mouseover : element üzerine geldiğimizde oluşur. 
mouseout : elementten çıktığımızda oluşur.
mouseenter : element kapsamına girdiğimizde oluşur.
mouseleave : elementten çıktığımızda oluşur.


```
document.addEventListener("click",run);

```

### Input Eventleri

focus : input alanına tıkladığımızda çalışır.
blur : input alanından çıktığımızda çalışır.

paste : kopyalama işlemi yaptıktan sonra event alışır.