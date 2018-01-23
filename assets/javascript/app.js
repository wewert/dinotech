// window.open('mailto:josephwilliamgj11@gmail.com');

var config = {
    apiKey: "AIzaSyAYcEFQz7-dPSlnRzDkHOmkyoh53zWwab4",
    authDomain: "dinotech-42ff0.firebaseapp.com",
    databaseURL: "https://dinotech-42ff0.firebaseio.com",
    projectId: "dinotech-42ff0",
    storageBucket: "",
    messagingSenderId: "1029126190429"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var zipcodes = [80210, 80203, 80218, 80205, 87114, 77090];
var testZip = 77090;
var queryURL = "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=80203&tozipcode=80210&key=DEMOAPIKEY";
var userzip = "";
var distances = [];
var maxDistance = "";
var users = [];
var userInput = 0;
var campaignName = "";

var customers = [
{
  name: "Joe Arnold",
  email: "josephwilliamgj11@gmail.com",
  zip: 77090
},
// {
//   name: "Ken Lee",
//   email: "wewert@gmail.com",
//   zip: 80210
// },
// {
//   name: "Amy Christine",
//   email: "amychristine29@gmail.com",
//   zip: 80203
// },
{
  name: "Saijai Osika",
  email: "hewjang@gmail.com",
  zip: 80218
}];


function determineDistance() {

$.each(customers, function(i , v) {
  userzip = $("#user-zip").val().trim();
  maxDistance = $("#max-distance").val().trim();
  campaignName = $("#campaign-name").val().trim();

  
  $.ajax( {
    url: "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" + userzip + "&tozipcode=" + v.zip + "&key=WXC5A3ACU3D13WNY58D7",
    method: "GET"
  }).done(function(response) { 
    var results = response.DistanceInMiles;

    database.ref().push({
    campaignName: campaignName,  
    zip: v.zip,
    name: v.name,
    email: v.email,
    distance: results

    
  });
  
    if (results <= maxDistance) {
      
    users[i] = {
      zip: v.zip,
      name: v.name,
      email: v.email,
      distance: results


    //[variable]: value -- this will allow for variable based property names because of the square bracket notation
    }
  }
  console.log("people who we email", users);
});
});

}

$(document).on("click" , "#new-campaign-button" , function(event) {
  event.preventDefault();
  determineDistance();
  console.log(userzip);
  $("#available-emails").prepend(name);

});

(function () {
                var name = "Joseph";
                var email = ["joe@spotswork.com" , "josephwilliamgj11@gmail.com" , "hewjang@gmail.com" , "wewert@gmail.com" , "amychristine29@gmail.com"];
                var customer_name = "Dinosaur Lover";


                emailjs.init("user_vRXnWslIHFZMq1MSBb3XD");
                $("#form").submit(function (event) {
                    event.preventDefault();
                  emailjs.send("jospehwilliamgj11_gmail_com", "template_sEGtEw5R", {
                    to_email: email,
                    from_name: "Jurassic Quest!",
                    to_name: customer_name,
                    subject: "We're BACK!",
                    message_html: 
                    `Jurassic Quest is returning to your area.

                    Visit www.jurassicquest.com for more information`
                })
                        .then(function () {
                            console.log("sent")
                        }, function (err) {
                            console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                        });
                });
            })();








