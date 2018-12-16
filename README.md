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
```

```
```



