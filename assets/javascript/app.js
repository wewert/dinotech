var zipcodes = [80210, 80203, 80218, 80205, 87114, 77090];
var testZip = 77090;
var queryURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=80203&tozipcode=80210&key=DEMOAPIKEY";
var userzip = 80210;
var distances = [];
var maxDistance = 150;
var users = [];
var userInput = 0;

var customers = [
{
  name: "Joe Arnold",
  email: "josephwilliamgj11@gmail.com",
  zip: 77090
},
{
  name: "Ken Lee",
  email: "wewert@gmail.com",
  zip: 80210
},
{
  name: "Amy Christine",
  email: "amychristine29@gmail.com",
  zip: 80203
},
{
  name: "Saijai Osika",
  email: "hewjang@gmail.com",
  zip: 80218
}];



// $("#submit").on("click" , function(event) {
//   console.log("joe");




$.each(customers, function(i , v) {
  // distanceURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + i + "&key=DEMOAPIKEY";
  $.ajax( {
    url: "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + v.zip + "&key=WXC5A3ACU3D13WNY58D7",
    method: "GET"
  }).done(function(response) { 
    var results = response.DistanceInMiles;
    // console.log(userzip);
  console.log('our results', i, v, results);
  
 


  // if (results <= maxDistance) {
    if (results <= maxDistance) {
      
    users[i] = {
      zip: v.zip,
      name: v.name,
      email: v.email
     

    //[variable]: value -- this will allow for variable based property names because of the square bracket notation
    }
  }
  console.log("people who we email", users);
});
});
// });
