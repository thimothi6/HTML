let Link = document.getElementById("Link");
let ftext = document.getElementById("FirstText");
let ltext = document.getElementById("SecondText");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let box = document.getElementById("r");
let fbox = document.getElementById("t1");
let lbox = document.getElementById("t2");
let count =0;

const generate = () => {
    if(count<=0){

        box.style.backgroundImage=`url(${Link.value})`
        box.style.backgroundSize = 'cover';
        box.style.backgroundRepeat = 'no-repeat';
        box.style.overflow='hidden'
        fbox.style.overflow='hidden'
        lbox.style.overflow='hidden'
        
        let a = document.createElement('P')
        a.textContent = ftext.value;
        a.style.fontSize='35px'

    
        let b = document.createElement('P')
        b.textContent = ltext.value;
        b.style.fontSize='35px'
    
        fbox.appendChild(a)
        lbox.appendChild(b)
        count++
    }
    else{
        alert("You cannot Re-Generate without pressing "+"CLEAR")
    }
}



const again = () => {
    count--;
    fbox.removeChild(fbox.firstChild);
    lbox.removeChild(lbox.firstChild);
    box.style.backgroundImage='none'
    Link.value='';
    ftext.value='';
    ltext.value='';


}

