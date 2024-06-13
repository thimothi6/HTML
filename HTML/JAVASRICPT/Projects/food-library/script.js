const foods = [
    {
        name: "Pizza",
        Image: "https://assets.afcdn.com/recipe/20160519/15342_w3072h2304c1cx3504cy2338.jpg",
        price : 199
    },
    {
        name: "Idli",
        Image: "https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg",
        price : 30
    },
    {
        name: "Dosa",
        Image: "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/post_banners/Y1xbn8RbSARRGHS49N8q.jpeg",
        price : 50
    },
    {
        name: "Upma",
        Image: "https://www.dwarakaorganic.com/wp-content/uploads/2022/04/Upma-870x470.jpg",
        price : 50
        
    },
    {
        name: "Samosha",
        Image: "https://im.whatshot.in/img/2019/Aug/shutterstock-1381163087-cropped-1565077618.jpg",
        price : 40
    },
    {
        name: "Poha",
        Image: "https://cdn.cdnparenting.com/articles/2020/02/26143210/POHA-RECIPE.jpg",
        price : 20
    },
    {
        name: "Bhonda",
        Image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Tea_Time_Snacks/Mysore_Bonda_Recipe.jpg",
        price : 30
    },
    {
        name: "Uttapam",
        Image: "https://2.bp.blogspot.com/-zdX_A9LFr_U/VcFNBLMCtOI/AAAAAAAAC6k/JuM9YOwuOR0/s1600/uttapam3.jpg",
        price: 40
    },
    {
        name: "Pizza",
        Image: "https://assets.afcdn.com/recipe/20160519/15342_w3072h2304c1cx3504cy2338.jpg",
        price : 199
    },
    {
        name: "Idli",
        Image: "https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg",
        price : 30
    },
    {
        name: "Dosa",
        Image: "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/post_banners/Y1xbn8RbSARRGHS49N8q.jpeg",
        price : 50
    },
    {
        name: "Upma",
        Image: "https://www.dwarakaorganic.com/wp-content/uploads/2022/04/Upma-870x470.jpg",
        price : 50
        
    },
    {
        name: "Samosha",
        Image: "https://im.whatshot.in/img/2019/Aug/shutterstock-1381163087-cropped-1565077618.jpg",
        price : 40
    },
    {
        name: "Poha",
        Image: "https://cdn.cdnparenting.com/articles/2020/02/26143210/POHA-RECIPE.jpg",
        price : 20
    },
    {
        name: "Bhonda",
        Image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Tea_Time_Snacks/Mysore_Bonda_Recipe.jpg",
        price : 30
    },
    {
        name: "Uttapam",
        Image: "https://2.bp.blogspot.com/-zdX_A9LFr_U/VcFNBLMCtOI/AAAAAAAAC6k/JuM9YOwuOR0/s1600/uttapam3.jpg",
        price: 40
    },
    {
        name: "Pizza",
        Image: "https://assets.afcdn.com/recipe/20160519/15342_w3072h2304c1cx3504cy2338.jpg",
        price : 199
    },
    {
        name: "Idli",
        Image: "https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg",
        price : 30
    },
    {
        name: "Dosa",
        Image: "https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/post_banners/Y1xbn8RbSARRGHS49N8q.jpeg",
        price : 50
    },
    {
        name: "Upma",
        Image: "https://www.dwarakaorganic.com/wp-content/uploads/2022/04/Upma-870x470.jpg",
        price : 50
        
    },
    {
        name: "Samosha",
        Image: "https://im.whatshot.in/img/2019/Aug/shutterstock-1381163087-cropped-1565077618.jpg",
        price : 40
    },
    {
        name: "Poha",
        Image: "https://cdn.cdnparenting.com/articles/2020/02/26143210/POHA-RECIPE.jpg",
        price : 20
    },
    {
        name: "Bhonda",
        Image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Tea_Time_Snacks/Mysore_Bonda_Recipe.jpg",
        price : 30
    },
    {
        name: "Uttapam",
        Image: "https://2.bp.blogspot.com/-zdX_A9LFr_U/VcFNBLMCtOI/AAAAAAAAC6k/JuM9YOwuOR0/s1600/uttapam3.jpg",
        price: 40
    }
]

const box = document.getElementById("itemss")
function foodItem (){
    foods.forEach((food) => {
        const div = document.createElement("div")
        div.classList.add("item");

        const img = document.createElement("img")
        img.src= food.Image;

        const indiv = document.createElement("div")
        indiv.classList.add("indiv");

        const name = document.createElement("h2")
        name.textContent = food.name

        const like = document.createElement("button")
        like.textContent = "💗";
        like.classList.add("like")
        like.style.backgroundColor="white"
        like.style.border= "none"
        like.style.marginTop="15px"

        like.style.fontSize="30px"
        like.classList.add("lbtn")
        // like.addEventListener('click',likke())
        like.addEventListener("click", like)

        like.style.height="fit-connect"

        const price = document.createElement("p")
        price.textContent = food.price+" /-"

        indiv.append(name,like,price)

        div.append(img,indiv)
        box.append(div)
    })
}
foodItem ();
let i =0;
function likke(){
    const l = document.getElementById("lp")
    l.textContent = i;
    i++;
    // console.log("like")
}