## JavaScript Temel 102 

## Event Capturing - Bubbling

### Bubbling (Kabarcıklanma) 

Bu eventler HTML dökümanı içinde gerçekleşir. Bir elemente(node) tıklama işlemi gerçekleştirdiğimizde bu en üstteki ögeye kadar çıkmaktadır. 

### Capturing - Delegation (Yakalama) 

Bu event türünde hangi ögeye tıkladığımızı nokta atışı olarak buluruz. 

```
cardbody.addEventlistener("click",run);

function run(e){ 
    console.log(e.target);
}

```
Parametre olarak verdiğimiz "e" vasıtasıyla tıklamanın target(hedef) özelliğini dinamik olarak alabiliriz.  