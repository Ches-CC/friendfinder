//HTML Routes-->Serving Up Pages Since 2019
//==============================

//Dependencies First, Natch
//==============================
var path = require("path");
var app = require("express");


module.exports = function(app){
    //GET Requests, for HTML's Pleasure

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../home.html"));
    });
};