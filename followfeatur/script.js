var a=document.querySelector("h2");
var statuss =document.querySelector("#buttonn");
statuss.addEventListener("click",function(){
    if(a.innerHTML=="Friend"){
    a.innerHTML="Not Friend";
    statuss.innerHTML="Add Friend";
    }
    else if(a.innerHTML=="Not Friend"){
        a.innerHTML="Friend";
        statuss.innerHTML="Remove Friend";
    }
});

