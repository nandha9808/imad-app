var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 var articles={
     title:"article",
     heading:"article one",
     content:`<p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>
            <p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p><p>
                this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.this my article.
            </p>`
 };
 function createTemplate (data){
        var title  =data.title;
        var heading=data.heading;
        var content=data.content;
        var htmlTemplate=`
        <html>
            <head>
                <title>
                   ${title}
                </title>
                </head>
                <link href="/ui/style.css" rel="stylesheet" />
           
                    
            <body>
                <h4>
                   ${heading}
               </h4>
                <a href="/">home</a>
                <hr>
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
app.get('/article',function(req,res){
 
var articlename=req.params.articlename;
res.send(createTemplate(articles));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
