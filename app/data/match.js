//Modular File for the Display Match Logic
let existingFriendArray = require("./friends");
let path = require("path");

//Going to try to STORE IT ALL IN AN EXPORTED FUNCTION
module.exports = function(newfriend) {
    //Set up the VARS
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
   
}

//===========================================