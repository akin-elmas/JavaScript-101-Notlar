# Destructing - Arrow Function

### ES5 
```
let hello = function(){
    console.log("Hello");
}
```
### ES6
```
let hi = () => {console.log("Hello")}
```

# Destructing 

#### Array Destructing
```
let num1, num2;   
arr = [1,2,3,4];

[num1,num2] = arr; // num1 = 1 , num2 = 2
```
#### Obje Destructing
```
let numbers = {
    a:1,
    b:2,
    c:3,
    d:4
};

let {a,b,c} = numbers;  
```
Obje içindeki keyler ile aynı olmak zorunda, <br>
farklı isim kullanmak için a:number1 diyerekte kullanabiliriz.

#### Function Destructing

```
let getLangs = () => ["py","C"];
let [lang1,lang2] = getLangs();
```