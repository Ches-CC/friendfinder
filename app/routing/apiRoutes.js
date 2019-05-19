//DATA... All of the FRIENDS Data
//==============================

var app = require("express");
var existingFriendArray = require("../data/friends.js");
var path = require("path");
var findMatch = require("../data/match.js");

//Routing
//==============================

module.exports = function(app){
    //API GET Requests!
    //First, to show a JSON of the data:
    let newfriend = "";
    app.get("/api/friends", function(req, res) {
        res.json(existingFriendArray);
        newfriend = req.body;
    });
    
    //API POST Requests!
    //Users POSTing/sending their data after survey is completed/submitted
    // //use 
    app.post("/api/friends", function(req, res){
        let newfriend = req.body;
        // findMatch(newfriend);
        // console.log("This is newfriend info: " + newfriend.name);
        //Add the newest friend to the friendArray
        // existingFriendArray.push(newfriend);

        //Display the JSON to the user(s)
        // res.json(true);

        let newFriendScore = parseInt(newfriend.scores);
        let matchingName = "";
        let matchingPhoto = "";

        let totalDifference = 666;

        for (let i = 0; i < existingFriendArray.length; i++){
            let difference = 0
            
            for (let j = 0; j < newFriendScore.length; j++){
                difference += Math.abs(existingFriendArray[i].scores[j]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                matchingName = existingFriendArray[i].name;
                matchingPhoto = existingFriendArray[i].photo;
            }
        };

        res.json({newBFF: matchingName, selfie: matchingPhoto});
        existingFriendArray.push(newfriend);


    });
};