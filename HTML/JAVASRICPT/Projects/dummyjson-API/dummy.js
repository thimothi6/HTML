const model = document.getElementById('model')
const main = document.getElementById('main')
let Data;
const fetchData = () =>
{
     fetch("https://dummyjson.com/recipes")
       .then( (res) => res.json ())
     .then((res2) => {Data = res2.recipes; display ()})
     .catch((err) => console.log(err))
}
fetchData()
const display = () => {
  //console.log(Data.name)
  Data.forEach((d) =>{
    const dabba = document.createElement("div")
    dabba.classList.add("dabba")

    const img = document.createElement("img")
    img.src = d.image

    const name = document.createElement("h2")
    name.textContent = d.name
    name.style.fontSize="25px"
    name.style.textAlign="center"
    name.style.marginTop="0px"

    const btndabba =document.createElement("div")
    btndabba.classList.add("btndabba")

    const btn1 =document.createElement("button")
    btn1.textContent= "Like"
    btn1.addEventListener('click',like)
    //btn1.stopPropogation;

    const btn2 = document.createElement("button")
    btn2.textContent= "Show Recipes"//d.instructions
    btn2.addEventListener('click',() => {
      alert(d.instructions)
      const Para =document.createElement("p")
      Para.textContent= d.instructions
      model.append(Para)
      model.style.display= "block"
    })
    btndabba.append(btn1,btn2)

    dabba.append(img,name,btndabba)
    main.appendChild(dabba)

  })
}
let lk =0;
const like = () => {
       document.getElementById("count").textContent=++lk;
}
