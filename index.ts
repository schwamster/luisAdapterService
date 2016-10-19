
import * as express from 'express';
import {utils} from './utils';

var app = express();

app.use(function(req: any, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

app.get('/', function (req: any, res) {
  res.send("POST the text you want to analyze to this enpoint");
});

app.post('/', function (req: any, res) {
  let text = req.text;

  utils.analyze(text).then((result) =>{
    var json = JSON.stringify(result);
    res.send(`${json}`);
  }).error((reason) => {
    console.log(`Error while querying luis => ${reason}`);
    res.send("something went wrong");
  });
});

var PORT =process.env.PORT | 3000;
app.listen(PORT , function() {
    console.log("HTTP server listening on port %s", PORT);
});
