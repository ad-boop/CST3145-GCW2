const express = require('express'); // Requires the Express module

// Calls the express function to start a new Express application
var app = express();
const port = 3000;

// An array of all the lessons
let lessons=[
    {'topic':'maths','location':'Hendon','price':100},
    {'topic':'maths','location':'Colindale','price':80},
    {'topic':'maths','location':'Brent Cross','price':90},
    {'topic':'maths','location':'Golders Green','price':120}]


let user=[{'email':'user@email.com','password':'mypassword'}];



// Routes GET requests to /lessons to the request handler
// when /lesson is acessed, the lesson array is sent as the response
app.get("/lessons", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(lessons));
});

//when /user is accessed, the users array is sent as the response
app.get("/user", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(user));
});


//incase of any error
app.use(function(request, response){
    response.status(404).send("Page not found. Enter /lessons  or /users");

});

//running the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
