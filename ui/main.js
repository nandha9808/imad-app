var button=document.getElementById("counter");

button.onclick=function(){
    //create a request
     var request=XMLHttpResquest();
     request.onreadystatechange= function()
     {
         if(request.readystate===XMLHttpRequest)
         {
             if(request.status===200)
             {
                 var counter=Request.responseText;
                 var span=document.getElementById("count");
                 span.innerHTML=counter.toString();
             }
             //not
         }
     };
     request.open('GET','http://nandhaspmkumar.imad.hasura-app.io/counter',true);
     request.send(null);
};