var button=document.getElementById("counter");
button.onclick=function(){
  counter=counter+1;
  var span=document.getElementById("span");
  span.innerHTML=counter+1;
};