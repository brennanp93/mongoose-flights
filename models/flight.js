const mongoose = require('mongoose');
//Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'MSY', 'SNA']
    },
    arrival: {
        type: Date
    }
},{
    timestamps: true
});


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'MSY', 'SNA'],
    },
    flightNo: {
        type: Number, 
        default: 666,
        // min: 10,
        // max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().setFullYear(new Date().getFullYear() + 1)
        },
    },
    destinations: [destinationSchema]   
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);

// default: new Date().getFullYear 
// function() {
//     return new Date().setFullYear(new Date().getFullYear() + 1)
// },