// console.log("New Score: " + newScore);
// console.log("New Total: " + newTotal);

// existingFriendArray.push(newfriend);

// let diffScoreArray = [];

// for (let i = 0; i < existingFriendArray.length; i++){
//     let diffScore = newfriend.scores.reduce((accumulator, currentValue) => accumulator + currentValue) - existingFriendArray[i].scores.reduce((accumulator, currentValue) => accumulator + currentValue);
//     diffScoreArray.push(Math.abs(diffScore));
// };

// console.log(Math.min.apply(null, diffScoreArray));

//===================================================
// let rawScore = [];
//   let totalScore = 0;
//   let scoreArray = [];
//   let newScore = (scoreAdder(newfriend.scores));
//   let closestScore = 0;

//     console.log("New Score: " + newScore);

//   //Sumctions
//   function getSum(total, num) {
//     return total + num;
//   }
//   function scoreAdder(item) {
//     totalScore = rawScore.reduce(getSum);
//   }

//   //Array of Existing Scores
//   for (let i = 0; i < existingFriendArray.length; i++) {
//     rawScore = existingFriendArray[i].scores;
//     scoreAdder(rawScore);
//     scoreArray.push(parseInt(totalScore));
//   }

//   //Closest Number Function
//   function closest(num, arr) {
//     var curr = arr[0];
//     var diff = Math.abs(num - curr);
//     for (var val = 0; val < arr.length; val++) {
//       var newdiff = Math.abs(num - arr[val]);
//       if (newdiff < diff) {
//         diff = newdiff;
//         curr = arr[val];
//       }
//     }
//     return curr;
//   }
//     closestScore = (closest(newScore, scoreArray));

//     for (let j = 0; j < existingFriendArray.length;j++){
    
//         if (closestScore === scoreAdder(existingFriendArray[j].scores)){
//             console.log("We've got your new friend: " + existingFriendArray[j].name);
//             break;
//         }
//     }




//   for (let i = 0; i < existingFriendArray.length; i++){
//     let existingFriendScore = parseInt(existingFriendArray[i].scores);
//     let difference = function (a, b){
//         console.log(Math.abs(a-b));
//     };
//     difference(newScore, existingFriendScore);
//     // for (let x = 0; x < existingFriendArray[i].length; x++){



//========================================
// let rawScore = 0;
// let totalScore = 0;
// let scoreArray = [];
// let numberrr = 40;

//   let newBFF = {
//       name: "",
//       photo: "",
//       friendDifference: 0
//   };

// module.exports = function(findMatch){
//     console.log(findMatch)
// }

//Survey Point Tallying Machine:
// function getSum(total, num) {
//   return total + num;
// }
// function scoreAdder(item) {
//   totalScore = rawScore.reduce(getSum);
// }

// for (let i = 0; i < existingFriendArray.length; i++) {
//   rawScore = existingFriendArray[i].scores;
//   scoreAdder();
  // console.log(existingFriendArray[i].scores);
  // console.log("Total Score: " + totalScore);
//   scoreArray.push(parseInt(totalScore));
  // console.log("Score Array: " + scoreArray);
// }

//FROM INTERNET:Some Number-Matching Fairy Dust
// function closest(num, arr) {
//   var curr = arr[0];
//   var diff = Math.abs(num - curr);
//   for (var val = 0; val < arr.length; val++) {
//     var newdiff = Math.abs(num - arr[val]);
//     if (newdiff < diff) {
//       diff = newdiff;
//       curr = arr[val];
//     }
//   }
//   return curr;
// }

// console.log(closest(numberrr, scoreArray));

//----------
// var counts = [4, 9, 15, 6, 2],
//   goal = 5;

// var closest = counts.reduce(function(prev, curr) {
//   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// });

// console.log(closest);
//----------

// let matchFriend = function(){
//     let newFriend = existingFriendArray[existingFriendArray - 1];
//     if(existingFriendArray.includes(newFriend)){
//         console.log("There's a match!");
//     };

//     scoreTally(existingFriendArray[0]);

//     function scoreTally(friend){
//         let surveyScore = 0;

//         for (let i = 0;i < existingFriendArray[i].scores.length; i++){
//         surveyScore += parseInt(existingFriendArray[i].scores);
//         console.log("Score Tally: " + surveyScore)
//         }
//     };
// };

// matchFriend();
