function latestCommit() {
  var url = "https://api.github.com/repos/colt05/get-request/commits";
  var response = "[]";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false);
  xmlHttp.send( null ); 
  response = xmlHttp.responseText;
  var j = JSON.parse(response);
  return j[0].sha;
}
function latestURL() {
  var hash = latestCommit();
  var part1 = "//cdn.rawgit.com/colt05/get-request/";
  var part2 = "/get.js?hash=";
  var part3 = Date.now();
  return part1.concat(hash.concat(part2.concat(part3)));
}
function importGet() {
  var callback = function() {return;};
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = latestURL();
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}
