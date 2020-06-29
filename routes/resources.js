const express = require('express');
const router = express.Router();

/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
    if (res.locals.loggedIn) {
      next()
    } else {
      res.redirect('/login')
    }
  }
  async (req, res, next) => {
    res.locals.items = await ToDoItem.find({userId:req.user._id})
    res.render('resources');
}

module.exports = router;