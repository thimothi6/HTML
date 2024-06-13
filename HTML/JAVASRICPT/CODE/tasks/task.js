var n= 20
while(n>1)
{
    console.log(n)
    n+=1;
}

var s="Thimothi"
var n=s.length;
while(n>=0)
{
    console.log(s.charAt(n))
    n--;
}


var s='thimothi'
var n=0
var vow=0
var cons=0

while(n<=s.length-1)
{
    if((s.charAt(n))=='a'|| (s.charAt(n))=='e'||(s.charAt(n))=='i'||(s.charAt(n))=='o'||(s.charAt(n))=='u')
    vow++;
    else
    cons++;
    n++
}
console.log(`vowels in thimothi are ${vow}`)
console.log(`consonants in thimothi are ${cons}`)