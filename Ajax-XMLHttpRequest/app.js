//

/*

Holds the status of the XMLHttpRequest. 
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready

*/

document.getElementById("btn").addEventListener("click", function(){


    // Obje içindeki özellikleri console'dan kontrol edebilirsin, baya kolay.
    var xhr = new XMLHttpRequest();
    
    // onload readystate 4 olduğunda çalışır
    xhr.onload = function(){
        if(this.status == 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    /* 
      Eski yöntem.
      xhr.onreadystatechange = function(){  
        // Aşamalar console.log(this.readyState);
        if(this.status == 200 && this.readyState ==4){
            console.log(this.responseText);
        }
    } */
    
    xhr.open("GET","example.txt",true);

    xhr.send();
})