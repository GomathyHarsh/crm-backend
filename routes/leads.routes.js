const express=require('express');
const {  isAuth } = require('../utils/authentication');
const router=express.Router();
const Lead = require('../models/leads.model.js');
const { getLeads,addLead,editLead,deleteLead } = require('../controllers/lead.controller');


router.get('/leads',getLeads);
router.post('/leads_create',addLead);
router.put('/leads/:id',editLead);
router.delete('/leads/:id',deleteLead);


module.exports= router;