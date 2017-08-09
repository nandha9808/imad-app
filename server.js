var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


 var articles={
     'article':{
     title:'article',
     heading:'article one',
     content:`<p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>
            <p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p><p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>`
 },
     'a2':{
         title:'article2',
     heading:'article two',
     content:`<p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>
            <p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p><p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>`
     },
     'a3':{ 
         title:'article3',
         heading:'article three',
         content:`<p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>
            <p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p><p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>`
     },
 };
 function createTemplate (data){
        var title  = data.title;
        var heading =  data.heading;
        var content = data.content;
        var htmlTemplate=`
        <html>
            <head>
            <title>
                ${title}
                </title>
               
                </head>
                <link href="/ui/style.css" rel="stylesheet" />
           
                    
            <body>
                
                <a href="/">home</a>
                <hr>
                <h4>
                   ${heading}
               </h4>
                <div class="container">
                    <div>            
                    ${content}
                     </div>
                </div>
            </body>
        </html>

`;

return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;

app.get('/:articleName',function(req,res){
 counter=counter+1; 
   res.send(counter.toString());
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
