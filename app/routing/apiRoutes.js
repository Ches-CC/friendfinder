//DATA... All of the FRIENDS Data
//==============================

var app = require("express");
var existingFriendArray = require("../data/friends.js");
var path = require("path");

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
    app.post("/api/friends", function(req, res){
        let newfriend = req.body;       
        let newFriendScore = (newfriend.scores);
        let matchingName = "";
        let matchingPhoto = "";

        console.log("Newfriend scores: " + newfriend.scores)

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
        console.log("NEW BFF: " + matchingName);
        res.json({matchingName: matchingName, matchingPhoto: matchingPhoto});

        existingFriendArray.push(newfriend);


    });
};