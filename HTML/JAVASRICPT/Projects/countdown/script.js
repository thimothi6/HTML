// There are two timers available in webPI's
// setInterval(myWish.5000)
// funtion myWish ()
// {
// console.log("haii")
// }
// console.log("hello")
setInterval(function ()
{
    let cTime = new Date().toLocaleString()
    // hr,min,sec

    document.getElementById('time').textContent = cTime;

},1000)