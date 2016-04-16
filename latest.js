function latestCommit() {
  var url = "api.github.com/repos/colt05/get-request/commits";
  var response = "0";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  //do not catch error, error handling would not be good
  return response;
}
