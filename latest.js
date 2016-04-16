function latestCommit() {
  var url = "https://api.github.com/repos/colt05/get-request/commits";
  var response = "[]";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false);
  xmlHttp.send( null ); 
  var j = JSON.parse(response);
  return j[0].sha;
}
