### phantom.js
---
https://github.com/ariya/phantomjs

https://code.google.com/archive/p/phantomjs/downloads

https://github.com/nathanboktae/mocha-phantomjs

```js
var page = require('webpage').create();
page.open('http://www.google.com', function(){
  setTimeout(function(){
    page.render('google.png');
    phantom.exit();
  }, 200);
});
```

```js
//
var page = require('webpage').create();
console.log();
page.settings.userAgent = 'SpecialAgent';
page.open('http://www.httpuseragent.org', function(status){
  if(status !== 'success'){
    console.log('Unable to access network');
  }else{
    var ua = page.evaluate(function(){
      return document.getElementById('qua').textContent;
    });
    console.log(ua);
  }
  phantom.exit();
});
```

```js
// mocha-phantomjs

var page = require('webpage');
page.open('http;//www.sample.com', function(){
  page.includeJs("http://ajax.googleapi.com/ajax/libs/jquery/1.6.1/jquery.min.js", function(){});
    page.evaluate(function(){
      $("button").click();
    });
    phantom.exit()
  });
});

var page = require('webpage').create();


afterEach(function () {
  if (this.currentTest.state == 'failed') {
    takeScreenshort()
  }
})


function takeScreenshot() {
  if (window.callPhantom) {
    var date = new Date()
    var filename = "screenshots/" + date.getTime()
    console.log("Takeing screenshots/" + filename)
    callPhantom({'screenshot': filename})
  }
}


```

```sh
mocha-phantomjs -R dot /test/file.html
mocha-phantomjs https://testserver.com/file.html --ignore-ssl-error=true
mocha-phatomjs -p ~/bin/phantomjs /test/file.html

env COLUMNS=$COLUMNS phantomjs mocha-phantomjs.coffee URL dot
```

```
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="mocha.js"></script>
    <script src="chai.js"></script>
    <script>
      mocha.ui('bdd')
      expect = chai.expect
    </script>
    <script src="src/mycode.js"></script>
    <script src="test/mycode.js"></script>
    <script>
      mocha.run()
    </script>
  </body>
</html>
```
