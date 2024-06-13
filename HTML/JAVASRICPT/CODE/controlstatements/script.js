let temerature = 50;
if(temerature>=45){
    console.log("the day is to hot");
}
else if(temerature>35){
    console.log("the day is warm");
}
else if(temerature>25){
    console.log("the day is cool");
}
else{
    console.log("the day is too cool")
}


var age = 17;
if(age>=18){
    console.log("he is elgible to drive car");
}
else{
    console.log("he is elgible to ride bike")
}

var num = 5;
if(num%2 === 0){
    console.log("even")
}
else{
    console.log("odd")
}


var day = 6;
switch(day){
    case 5: console.log("friday")
    break

    case 0: console.log("sunday")
    break

    case 1: console.log("monday")
    break

    case 3: console.log("wednesday")
    break

    case 2: console.log("tuesday")
    break

    case 4: console.log("thursday")
    break

    case 6: console.log("saturday")
    break
}
console.log("enter valid day")


let fruit = "banana";
let fruitcolor;

switch(fruit){
    case  "apple":
          fruitcolor = "red";
          break;
    case "banana":
          fruitcolor = "yellow";
          break;
    case "grepse":
          fruitcolor = "green";
          break;
    default:
          fruitcolor = "not found your fruits";
}
console.log(fruitcolor);


var n= 19
while(n>1)
{
    console.log(n)
    n-=2;
}