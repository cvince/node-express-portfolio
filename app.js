// var express = require('express');
// var app = express();



// app.get('/test/:id', function(req, res){

//   var route_location = req.params.id;

//   res.setHeader('Content-type', 'text/plain');
//   res.setHeader('content-length', Buffer.byteLength(route_location));
//   res.send(route_location);

//   res.render(route_location/case.html)


// })

// app.listen(3000);
// console.log('Listening on port 3000');



var express = require('express');
var app = express();
var cons = require('consolidate');

// assign the swig engine to .html files
app.engine('html', cons.handlebars);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', {
    partials:
    {
      footer: 'footer',
      header: 'header'
    }
  });
});

app.use('/static', express.static('./static'));

app.get('/work/:id', function(req, res){
  res.render('works', {
    partials:
    {
      header: 'header',
      casestudy: 'work/'+req.params.id+'/case',
      footer: 'footer'
    }
  });
});


app.listen(3000);
console.log('Express server listening on port 3000');
