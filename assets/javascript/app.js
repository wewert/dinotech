var zipcodes = [80210, 80203, 80218, 80205, 87114, 77090];
var testZip = 77090;
var queryURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=80203&tozipcode=80210&key=DEMOAPIKEY";
var userzip = 80210;
var distances = [];
var maxDistance = 150;
var users = {};
var userInput = 0;



$("#submit").on("click" , function(event) {
  console.log("joe");

$.each(zipcodes, function(i, v) {
  // distanceURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + i + "&key=DEMOAPIKEY";
  $.ajax( {
    url: "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + v + "&key=DEMOAPIKEY",
    method: "GET"
  }).done(function(response) {
    // console.log(response);
    // console.log(response.FromPointDetails.FromZipCode);
    var results = response.DistanceInMiles;
    console.log(userzip);
  console.log('our results', i, v, results);
  //   for (var i = 0; i < zipcodes.length; i++) {
  //     if (userzip === zipcodes[i]) {
  //       console.log("hey");
  //     }
  //     console.log(zipcodes[i]);
  //   }
  // });

  if (results <= maxDistance) {
    users[i] = {
      zip: v,
      name: "person",
      email: "something",
      distance: results

    //[variable]: value -- this will allow for variable based property names because of the square bracket notation
    }
  }
  console.log("people who we email", users);
})
});
});


