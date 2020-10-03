const mongoose = require('mongoose');
const { Schema } = mongoose;

const CalculationSchema = new Schema({

    expression : {type: String},
    timestamp: { type: Date, default: Date.now } 
    
});

module.exports = mongoose.model('LastCalc', CalculationSchema);