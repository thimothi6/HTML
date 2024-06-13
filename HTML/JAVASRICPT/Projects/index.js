let c = 0;
function incr ()
{ 
    if(c < 15 )
     {
        c++; 
        document.getElementById("count").textContent = c
     }
     else
     {
        alert("don't cross 15")
     }
} 
function decr () 
{
    if(c>=-9 )
     {
      c--;
      document.getElementById("count").textContent = c 
     }
     else
     {
        alert("don't cross -15")
     }
}
function reset ()
{
    document.getElementById("count").textContent = 0
}