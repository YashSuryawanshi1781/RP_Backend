const Fund = require('../../models/fund');

// Controller function to handle fund transfer request
const fundController = {
transferFunds: (req, res) => {
    const { senderId, receiverId, amount } = req.body;

    // Call the transferFunds function from the model
    Fund.transferFunds(senderId, receiverId, amount, err => {
        if (err) {
            console.error('Error transferring funds:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.json({ message: 'Funds transferred successfully' });
    });
}
};

module.exports = fundController;
