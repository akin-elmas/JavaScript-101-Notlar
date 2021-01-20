class Request {
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.text())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })

    }
    post(url,data){

        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
        
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
        
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method: 'DELETE'
            }).then(response => resolve('veri islemi basarili'))
            .catch(err =>reject(err))
        });
    }
}



// initialize baslatmak
let request = new Request();
let albums;
// get request

/* request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})
.catch(err => console.log(err));
 */

// post request
/* request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.cath(err => console.log(err)); */

// put request
/* request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"xss exploit"})
.then(album => console.log(album))
.catch(err =>console.log(err));

// delete request 
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err)); */