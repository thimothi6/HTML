// let colors= ["red", "black","blue","yellow","pink","orange"]

function change()
{
    // document.body.style.backgroundColor= colors[Math.floor(Math.random()*6)]
    const rc = Math.round(Math.random()*10000000).toString(16)
    document.body.style.backgroundColor = "#" +rc;
}