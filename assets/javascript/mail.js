var email = "josephwilliamgj11@gmail.com";
var mailgun = "http://httpdocumentation.mailgun.com/en/latest/api-intro.html"

$.ajax({
  url: mailgun,
  method: "GET"
}).done(function(response) {
	console.log(response);

  
})



  var send = send("POST", "http://httpdocumentation.mailgun.com/en/latest/api-intro.html",{
    "parameters": {
      "from": "Mailgun Sandbox <postmaster@sandbox224f28ae45a8499d84184fd4c48e62ee.mailgun.org>",
      "to": "Jordi <josephwilliamgj11@gmail.com>",
      "subject": "Hello Jordi",
      "text": "Congratulations Jordi, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free."
    }
  });