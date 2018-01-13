var zipcodes = [80210, 80203, 80218, 80205, 87114, 77090];
var queryURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=80203&tozipcode=80210&key=DEMOAPIKEY";
var userzip = 80210;
var distances = [];
var distanceURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + zipcodes[i] + "&key=DEMOAPIKEY";

$.ajax( {
  url: queryURL,
  method: "GET"
}).done(function(response) {
  // console.log(response);
  // console.log(response.FromPointDetails.FromZipCode);
  var results = response.DistanceInMiles;
console.log(results);
  for (var i = 0; i < zipcodes.length; i++) {
    if (userzip === zipcodes[i]) {
      console.log("hey");
    }
    console.log(zipcodes[i]);
  }
});
