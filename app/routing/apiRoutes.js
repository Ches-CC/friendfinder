//DATA... All of the FRIENDS Data
//==============================

var app = require("express");
var friendArray = require("../data/friends.js");
var path = require("path");

//Routing
//==============================

module.exports = function(app){
    //API GET Requests!
    //First, to show a JSON of the data:
    let newfriend = "";
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
        newfriend = req.body;
    });
    
    //API POST Requests!
    //Users POSTing/sending their data after some has been entered into the form
    // //use 
    app.post("/api/friends", function(req, res){

        //Add the newest friend to the friendArray
        friendArray.push(req.body);

        //Display the JSON to the user(s)
        res.json(true);
    });
};