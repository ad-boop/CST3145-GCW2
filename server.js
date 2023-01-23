const express = require('express'); // Requires the Express module

// Calls the express function to start a new Express application
var app = express();

// An array of all the lessons
let lessons=[
    {'topic':'maths','location':'Hendon','price':100},
    {'topic':'maths','location':'Colindale','price':80},
    {'topic':'maths','location':'Brent Cross','price':90},
    {'topic':'maths','location':'Golders Green','price':120}]

// Routes GET requests to /lessons to the request handler
app.get("/lessons", function(request, response) {    
    response.send(JSON.stringify(lessons));
});

let user={'email':'user@email.com','password':'mypassword'};
app.get("/user", function(request, response) {    
    response.send(JSON.stringify(user));
});


// Starts the server on port 3000
app.listen(3000);