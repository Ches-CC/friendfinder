//Dependencies
//==============================
var express = require("express");
var path = require("path");

//Express Server Setup
//==============================
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Router-->showing the server where to go!
//==============================
require("/routing/apiRoutes")(app);
require("/routing/htmlRoutes")(app);

//Listener-->Lets Get the Server Started in Here!
//==============================
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});