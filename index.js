var count=0;
let c=document.getElementById("count");
let inc=document.getElementById("increase");
let re=document.getElementById("reset");
let de=document.getElementById("decrese");
c.innerHTML=count;

inc.onclick=increse;
re.onclick=reset;
de.onclick=decrease

function increse(){
    count+=1;
    c.textContent=count
    if(count>0){
        c.style.color='green';
    }
    else if(count==0){
        c.style.color='hsl(205, 72%, 37%)';
    }
}

function decrease(){
    count-=1;
    c.textContent=count
    if(count<0){
        c.style.color='red';
    }
    else if(count==0){
        c.style.color='hsl(205, 72%, 37%)';
    }
   
}

function reset(){
    count=0;
    if(count==0){
        c.style.color='hsl(205, 72%, 37%)'
    }
   
    c.textContent=count
}
