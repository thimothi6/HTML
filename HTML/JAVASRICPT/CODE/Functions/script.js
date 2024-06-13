// function thimothiPrint  ()//declaration -- function keyword, name , parameters
// {
//   console.log("print thimothi");//definition
// }
// thimothiPrint()  // call
// /* function to add two numbers */
// function add  (a, b)
// {
//     console.log(`addition is ${a+b}`)
// }
// add("hi","bye")
// /* write a simple function to add two strings*/
// /* callback functions -- one function inside the parameter of another function*/
// function bad ()

// {
//     console.log("i am bad")
// } // function expression


// function mad (a, somthing)
// {
//     bad()
//     console.log("i am mad")
// }
// mad()
// //bad called callback function
// //mad is called Higher order function


// function Cube (num)
// {
//     return num * num * num;
// }
// var result = cube(5);
// console.log(result)
// /* write a function to find area of a circle using radius */
// function circle(a)
// {
//     console.log(Math.PI* a * a)
// }
// function square (a)
// {
//     console.log(a*a)
// }
// console.log(square)
// area(3, square)

// function area (val, fn)
// {
//     fn(val);
// }




// var x = function()
// {
//     console.log("something")
// }


// (function()
// {
//     console.log("my life")
// })

function outer(n)
{
   function outer()
   {
      return n++;
   }
   return counter
}
var result = outer(20)
console.log(result())
console.log(result())
console.log(result())
console.log(result())






