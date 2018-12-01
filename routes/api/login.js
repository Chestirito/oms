var db = require("../../models");
const passport = require('passport');
// const axios = require("axios");
// const router = require("express").Router();
// const bcrypt = require("bcrypt");

module.exports = function(app) {

    app.post("/api/login/accounts", passport.authenticate('local'),
    function(req,res){
        console.log("hello", req.user.username);
        res.json(true)
        // db.User.findOne({
        //     where: {
        //         username: req.body.userName,
        //     },
        //     attributes: { include: ['password'] }
        // }).then(function(result) {
        //     // console.log(result)
        //     console.log("this is the hash : " + result.dataValues.password)
        //     console.log("this is the password : " + req.body.password)
        //     bcrypt.compare(req.body.password, result.dataValues.password).then(function(comparePass) {
        //         console.log(comparePass)
        //         if(comparePass){
        //             console.log("login successful");
        //             res.json({status: true});
        //         } else {
        //             res.json({status: false});
        //         }
        //     });
        //     //res.json(result);
        // });
    });

    app.post("/api/signup", (req,res) => {
        db.User.create({
            username: req.body.userName,
            password: req.body.password
        }).then(result => {
            console.log(result)
            res.json(result)
        })
         .catch(function(err) {
             res.json(err)
         });
    });

    // app.post("/api/login/accounts",
    // passport.authenticate('local'),
    // function(req, res) {
    //   // If this function gets called, authentication was successful.
    //   // `req.user` contains the authenticated user.
    //   res.redirect('/users/' + req.user.username);
    // });
    
}
