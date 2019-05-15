//Modular File for the Display Match Logic
let existingFriendArray = require("./friends");
let path = require("path");

//Going to try to STORE IT ALL IN AN EXPORTED FUNCTION
module.exports = function(newfriend) {
    //Set up the VARS
    let newScore = newfriend.scores;
    let newTotal = newScore.reduce(function(total, amount){
        return (Number (total) + Number(amount))});
    let matchNum;
    let existingFriendScore;
    let totalScore;
    let diffScore;

    console.log("New Score: " + newScore);
    console.log("New Total: " + newTotal);


    for (let i = 0; i < existingFriendArray.length; i++){
        let existingFriendScore = existingFriendArray[i].scores;
        let totalScore = existingFriendScore.reduce(function(total, amount){
            return (Number(total) + Number(amount))});

        if(Math.abs(newTotal - totalScore) < diffScore){
            matchNum = i;
            diffScore = Math.abs(newTotal - totalScore);
        }
        
    };

    existingFriendArray.push(newfriend);
    res.json(existingFriendArray[matchNum]);
    console.log("New BFF: " + existingFriendArray[matchNum]);

}

//===========================================