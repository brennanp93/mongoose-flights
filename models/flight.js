const mongoose = require('mongoose');
//Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'MSY', 'SNA'],
        default: 'SNA'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date().getFullYear 
        // function() {
        //     return new Date().setFullYear(new Date().getFullYear() + 1)
        // },
    }
 
});

module.exports = mongoose.model('Flight', flightSchema);
