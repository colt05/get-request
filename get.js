function httpget(url, reponame) {
  if (reponame === undefined) {
    reponame = "default";
  }
  var response = "0";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  //do not catch error, error handling would not be good
  return response;
}
function proxyget(url, reponame) {
  if (reponame === undefined) {
    reponame = "default";
  }
  var proxy = "http://crossorigin.me/";
  url = proxy.concat(url);
  return httpget(url, reponame);
}
