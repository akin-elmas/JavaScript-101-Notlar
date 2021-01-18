var acc = document.getElementsByClassName('accordion');
var i; // başlattık.
var len = acc.length; // len değişkenini kaç adet akordiyon varsa uzunluğuna eşitledik.

for(i=0; i<len; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active'); 
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}
/* Notlar
Toggle show ve hide yerine kullanılmaktadır.
*/
