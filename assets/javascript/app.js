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

// var zipcodes = [80210, 80203, 80218, 80205, 87114, 77090];
// var testZip = 77090;
var queryURL =
  "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=80203&tozipcode=80210&key=DEMOAPIKEY";
var userzip = "";
var distances = [];
var maxDistance = "";
var users = [];
var userInput = 0;
var campaignName = "";
var customers = [];

//this information is now in FB. 
// var customers = [
//   {
//     fname: "Joe",
//     lname: "Arnold",
//     email: "josephwilliamgj11@gmail.com",
//     zip: 77090

//   },
//   {
//     fname: "Ken",
//     lname: "Lee",
//     email: "wewert@gmail.com",
//     zip: 80210
//   },
//   {
//     fname: "Amy",
//     lname: "Christine",
//     email: "amychristine29@gmail.com",
//     zip: 80203
//   },
//   {
//     fname: "Joseph",
//     lname: "Arnold",
//     email: "joe@spotswork.com",
//     zip: 90210
//   },
//   {
//     fname: "Saijai",
//     lname: "Osika",
//     email: "hewjang@gmail.com",
//     zip: 80218
//   }
// ];

//this is how I determined distance and filtered the customers when the customers is in the JS file

// function determineDistance() {
//   $.each(customers, function(i, v) {
//     userzip = $("#user-zip")
//       .val()
//       .trim();
//     maxDistance = $("#max-distance")
//       .val()
//       .trim();
//     campaignName = $("#campaign-name")
//       .val()
//       .toUpperCase()
//       .trim();

//     $.ajax({
//       url:
//         "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" +
//         userzip +
//         "&tozipcode=" +
//         v.zip +
//         "&key=WXC5A3ACU3D13WNY58D7",
//       method: "GET"
//     }).done(function(response) {
//       var results = response.DistanceInMiles;

//       if (results <= maxDistance) {
//         users[i] = {
//           zip: v.zip,
//           fname: v.fname,
//           lname: v.lname,
//           email: v.email,
//           distance: results
//         };
   

//       database.ref().push({
//         campaignName: campaignName,
//         zip: v.zip,
//         fname: v.fname,
//         lname: v.lname,
//         email: v.email,
//         distance: results
//       });
//     }

    
//       console.log("people who we email", users);
//     });
//   });
// }
// var cutomerEmail = [];
// var customerFname = [];
// var customerLname = []; 

//   }
  // {
  //   fname: "Ken",
  //   lname: "Lee",
  //   email: "wewert@gmail.com",
  //   zip: 80210
  // },
  // {
  //   fname: "Amy",
  //   lname: "Christine",
  //   email: "amychristine29@gmail.com",
  //   zip: 80203
  // },
  // {
  //   fname: "Saijai",
  //   lname: "Osika",
  //   email: "hewjang@gmail.com",
  //   zip: 80218
  // }
// ];

function determineDistance() {
  var updatedCustomers = [];
  var count=0;
    database.ref("/customers").on("child_added" , function(childSnapshot) {
      
    var customer = childSnapshot.val();
    var zip = customer.zip;
    var userzip = $("#user-zip").val().trim();
    var maxDistance = $("#max-distance").val().trim();
    var campaignName = $("#campaign-name").val().toUpperCase().trim();

  $.ajax({
    url: "http://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=" +
    userzip + "&tozipcode=" + zip + "&key=1KD8MCQCP3U9ID1R4ETZ",
    method: "GET"

    }).done(function(response) {
      var results = response.DistanceInMiles;
      // console.log("our distance", results);
      if (results <= maxDistance) {
        customer.distance = results;
        // customerEmail.push(customer.email);
        // console.log(customer.email);
        // var customerEmail = [];

        function pushEmails() {
        customerEmail.push(customer.email);
        console.log(customerEmail);

      }

        };
      });
      });
    // .then(function(data) {
        // next line is pseudo code
        // if (count === database.children("/customers")) {
          // do our stuff with the updatedCustomers array
          // console.log(updatedCustomers.email);
          // console.log(customer.email);
        // }
        
        // you have potential full array here.
      }

    // }
  // };


$(document).on("click", "#new-campaign-button", function(event) {
  event.preventDefault();
  determineDistance();
});


//This is how to email a using Email.JS 
(function () {
                var name = "Joseph";
                var email = [];
                var customer_name = "Dinosaur Lover";
       
        // customerEmail.push(customer.email);
        console.log(customer.email);

        var name = "Joseph"; 
                var email = customer.email;
                var customer_name = customer.fname; // Need to define


                emailjs.init("user_vRXnWslIHFZMq1MSBb3XD");
                $("#emailButton").on('click',function (event) {
                    event.preventDefault();

                    emailjs.send("jospehwilliamgj11_gmail_com", "template_sEGtEw5R", {

                    // console.log('event', event);
                    // console.log('quill.container.value', quill.container.value);
                    // console.log('quill', quill);
                    var delta = quill.getContents();
                      console.log('content', delta);
                    var from = $('#from').val();
                      console.log('from',from);
                    var subject = $('#subject').val();
                      console.log('subject',subject);
                    $("#emailButton").html('Sending...');
                  emailjs.send("jospehwilliamgj11_gmail_com", "template_sEGtEw5R", {
                    from: from,

                    to_email: email,
                    from_name: "Jurassic Quest!",
                    to_name: customer_name,
                    subject: subject,
                    message_html: delta.ops[0].insert,
                })
                        .then(function () {
                            $("#emailButton").html('Sent');
                            console.log('Sent');
                        }, function (err) {
                            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                        });
                });
         
        };
      });
      });
    // .then(function(data) {
        // next line is pseudo code
        // if (count === database.children("/customers")) {
          // do our stuff with the updatedCustomers array
          // console.log(updatedCustomers.email);
          // console.log(customer.email);
        // }
        
        // you have potential full array here.
      }

    // }
  // };


$(document).on("click", "#new-campaign-button", function(event) {
  event.preventDefault();
  determineDistance();
  console.log('joe');
});


// //-------------------------------------------------------------
// //  Quill editor
// //-------------------------------------------------------------

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
];
var quill = new Quill('#editor-container', {
  //debug: 'info',
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: 'Compose an email here...',
  theme: 'snow'  // or 'bubble'
});







