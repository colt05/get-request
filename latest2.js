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
  var part2 = "/get.js";
  return part1.concat(hash.concat(part2));
}
