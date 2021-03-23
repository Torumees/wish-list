//const Wish = require('../models/wishListFromFile');
const mongoose = require('mongoose');
const Wish = mongoose.model('Task');

exports.getWishPage = (req, res)=> {
    Wish.find((error, wishList) => {
        if(!error){
            res.render('index.ejs', {wishItems: wishList});
        } else {
            console.log("Failed to retrieve data.");
        }
    });

};
exports.postnewWish = (req, res) =>{
    let wish = new Wish(req.body.newWish, req.body.newPrice);
    let newTask = new Wish();
    newTask.wish = wish;

    newTask.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to save data.");
        }
    });
};

exports.deleteWish = (req, res) =>{
    console.log('call from delete' + req.body.hidden);
    res.redirect('/');
};