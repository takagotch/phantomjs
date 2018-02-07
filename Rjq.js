console.log('Hello!');
phantom.exit();

var page = require().create(),
	jQuerySrc = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
	targetUrl = 'http://jquery.com';

page.open(targetUrl, function(status){
  if(status !== 'success'){
    console.log('failed to load the targetUrl');
  }else{
    page.includeJs(jQuerySrc, function(){
      page.evaluate(function(){
        console.log('There is ' + $('span').length + 'a tags.');
      });
      phantom.exit();
    });
  }
});

page.onConsoleMessage = function(msg, line, src){
  console.log('console > ' + line + ': ' + msg + ': ' + src);
};

