var button=document.getElementById("counter");
var counter=0;

button.onclick=function(){
  
            var request=new XMLHttpRequest();
            request.onreadystatechange=fuction()
            {
            if(request.readystate===XMLHttp..DONE)
            {
             if(request status===200)
             {
                 var counter=request.responseText;
                 var span=document.getElementById("count");
                 span.innerHTML=counter.toString();

             }
            }
            
            }
            request.open('GET','http://http://nandhaspmkumar.imad.hasura-app.io/counter',true);
            request.send(null);
            };