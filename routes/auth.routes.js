const express=require('express');
const { register, signin, signout,forgotPassword,resetPassword } = require('../controllers/auth.controller');
const{ isAdmin,isManager }= require('../utils/authorisation')
const router=express.Router();
const Users= require('../models/users.model');
const {  isAuth } = require('../utils/authentication');


router.post('/register',register);
router.post('/signin',signin);
router.get('/signout',signout);
router.post('/forgotPassword',forgotPassword);
router.post('/resetPassword',resetPassword);
// Example route that requires authentication
router.get('/protected', isAuth, (req, res) => {
    res.json({ message: `Welcome, ${req.user.name}!` });
  });
  
  // Example route that requires manager authentication
  router.get('/manager-protected', isAuth , isManager, (req, res) => {
    res.json({ message: `Welcome, manager ${req.user.name}!` });
  });
  
  // Example route that requires admin authentication
  router.get('/admin-protected', isAuth, isAdmin, (req, res) => {
    res.json({ message: `Welcome, admin ${req.user.name}!` });
  });

module.exports= router;