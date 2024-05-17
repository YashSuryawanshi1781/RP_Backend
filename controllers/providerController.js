const Provider = require('../models/provider');

const providerController = {
  createRecord: (req, res) => {
    const recordData = req.body;
    Provider.createRecord(recordData, (err, recordId) => {
      if (err) {
        console.error('Error creating record:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ recordId });
    });
  },

  getRecordById: (req, res) => {
    const { id } = req.params;
    Provider.getRecordById(id, (err, record) => {
      if (err) {
        console.error('Error fetching record:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.json(record);
    });
  },

  getAllRecords: (req, res) => {
    Provider.getAllRecords((err, records) => {
      if (err) {
        console.error('Error fetching records:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(records);
    });
  },

  updateRecordById: (req, res) => {

    console.log("here")
    const { id } = req.params;
    const newData = req.body;
    Provider.updateRecordById(id, newData, (err, success) => {
      console.log(err+"test1")
      console.log(success+"test2")
      if (err) {
        
        console.error('Error updating record:', err);
        return res.status(500).json({ error: 'Internal server error'});
      }
      
      if (!success) {
        return res.status(404).json({ error: 'Record not found' });
      }if(success){
        res.json({ message: 'Record updated successfully' });
      }
      
    });
  },

  deleteRecordById: (req, res) => {
    const { id } = req.params;
    Provider.deleteRecordById(id, (err, success) => {
      if (err) {
        console.error('Error deleting record:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (!success) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.json({ message: 'Record deleted successfully' });
    });
  }
};

module.exports = providerController;
