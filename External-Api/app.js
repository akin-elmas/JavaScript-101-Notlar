document.getElementById("change").addEventListener("click",change);

function change(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);

    xhr.onload = function(){
        if(this.status){
            var response = JSON.parse(this.responseText);

            var rate = response.rates.TRY;
            var amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * rate;
            console.log(amount*rate);
        }
    }

    xhr.send();
}