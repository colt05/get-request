var proxyList = ["http://crossorigin.me/", "http://cors.io/?u="];
function httpget(url, reponame, returnAll) {
  if (reponame === undefined) {
    reponame = "default";
  }
  var response = "0";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  //do not catch error, error handling would not be good
  if (returnAll == false || returnAll === undefined) {
  return response;
  } else {
  return [response, xmlHttp.status];
  }
}
function asyncget(url, reponame, returnAll) {
  if (reponame === undefined) {
    reponame = "default";
  }
  var response = "0";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, true );
  xmlHttp.onreadystatechange = function() {
  response = xmlHttp.responseText;
  //do not catch error, error handling would not be good
  if (returnAll == false || returnAll === undefined) {
  return response;
  } else {
  return [response, xmlHttp.status];
  }
  }
  xmlHttp.send( null );
}
function proxyget(url, reponame) {
  if (reponame === undefined) {
    reponame = "default";
  }
  var proxy = proxyList[0]
  url = proxy.concat(url);
  var response = httpget(url, reponame, true);
  if (response[1] == 503 && proxy == "http://crossorigin.me/") {
    //crossorigin.me is using captcha
  }
  return response[0];
}
