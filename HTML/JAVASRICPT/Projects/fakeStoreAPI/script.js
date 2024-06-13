const mainDiv = document.getElementById('main')
const count = document.getElementById('c')
let c = 0;
count.textContent = 0;
function fetchData ()
{
      fetch("https://fakestoreapi.com/products")
      .then(function (res) {return res.json() })
      .then(function (data) {displayData(data) })
      .catch(function (err) { console.log(err) })
}
fetchData();
function displayData (data)
{
  data.forEach(function (pro)
  {
          const myDiv = document.createElement("div")
          myDiv.classList.add("product")
          const image = document.createElement("img")
   image.src = pro.image
   image.alt = pro.title;
   const h2 = document.createElement('h2');
   h2.textContent = pro.title;
   const desc = document.createElement('p')
   desc.textContent = pro.description;
   const price = document.createElement('p')
   price.textContent = "$" + pro.price;
   myDiv.append(image, h2, desc, price);
   mainDiv.appendChild(myDiv)
  })
}
