//Array are used to store the value.
// non primitive data types are mutable
let arr = [2, 5, "raj", true]
console.log(arr[0])
/* array store value based on index starts with 0*/
console.log(arr[0]+arr[1])
console.log(arr.length)
arr.push(2,3,5,7)//adda element to last
console.log(arr)
arr.pop()  //remove last elrment
console.log(arr)
arr.shift() //remove first element
console.log(arr)
arr.unshift(8) //adds first element
console.log(arr)
arr.splice(2, 1)//delete 1 element from 2nd index
console.log(arr)
arr.splice(2, 0, 11,12,13) // adds 11,1,13 to 2nd index and 0 delete
// splice(startingindex, deleteCount, any adding elements)
console.log(arr)
arr.reverse();
console.log(arr)
str = "raj"
str1 = "raj"
str.toUpperCase();
console.log(str==str1)

/* primitive data types compare value, non primitive data types compare address*/
let arr1 = [2,3];
let arr2 = [2,3];
console.log(arr1==arr2)

/* array print values*/
for (let i = 0; i < arr1.length; i++)
{
    console.log(arr1[i])
}
for (let i of arr1)
{
    console.log(i)

   }
   let arr3 = [2,3,5]
arr3.forEach(function (x)
{
    console.log(x)
})
let newArray = arr3.forEach(
    function (val)
  {   
    console.log(val)
    return val * val;
    }
);
console.log(newArray);
let newArray2 = arr3.map(
    function (val)
  {   
    console.log(val)
    return val * val;
    }
);
console.log(newArray2)
let arrEO = [5,8,9,25,69,74]
let newArray3 = arrEO.map(
    function (val)
  {   
    return val%2==0
    }
)
console.log(newArray3)

let newArray4 = arrEO.filter(
    function (val)
  {   
    return val % 2 == 0
    }
)
console.log(newArray4)

let r1=["raj","bad","mad","sheker"].filter
(function (val)
{
    return val.length==3
})
console.log(r1)

/* reduce is used for cumulative summation */

let r2 =[3,5,8,9].reduce (function (prev,current)
{
    console.log(prev,current)
    return prev+current;
},0)
console.log(r2)

/* for Each is used to iterate into the array but it will not return anything*/

/* to iterate into the array  and return a new array , we can use map*/

/* if we use a condition in a map , it return new array with every possible values for each element */

/* always in map input array length will be equal ton ouput  array length */

/* if we use filter , only the elements that satisfies the condition will be returned as new array */

/* reduce is used for summation purposes where previous value willl be updated every time */

let r3 = arrEO.concat(arr1)
console.log(r3)
let r4=arrEO.find(function(x)
{
    return x%2==0
})
console.log(r4)

/* explore more array methods */

let obj = {
    name: "thimothi",
    place:"hyderabad"
}
console.log(obj.place)
console.log(Object.values(obj))