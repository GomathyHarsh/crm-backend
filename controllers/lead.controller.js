const Lead = require('../models/leads.model.js');
const express=require('express');


const getLeads= async (req, res) => {
    try {
      const leads = await Lead.find();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const addLead = async (req, res) => {
    const { name, email, phone, status } = req.body;
    const lead = new Lead({ name, email, phone, status });
    try {
      const newLead = await lead.save();
      res.status(201).json(newLead);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  const editLead = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, status } = req.body;
    try {
      const lead = await Lead.findByIdAndUpdate(
        id,
        { name, email, phone, status },
        { new: true }
      );
      if (!lead) throw new Error("Lead not found");
      res.json(lead);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  const deleteLead = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedLead = await Lead.findByIdAndDelete(id);
      if (!deletedLead) throw new Error("Lead not found");
      res.json(deletedLead);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports={getLeads,addLead,editLead,deleteLead};



