const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['QANTAS', 'Virgin', 'Air Emerates', 'Singapore Airlines']
    },
    airport: {
        type: String,
        enums: ['MEL', 'SYD', 'SNG', 'LDN', 'PRS', 'LAX', 'Milan', 'Rome', 'Tokyo', 'Hawaii'],
        default: 'SNG'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            // let year = new Date().getFullYear();
            // return year + 1;
            return Date.now()+365*24*60*60*1000;
                // let date = new Date()
                // let year = date.getFullYear();
                // return date.setFullYear(year + 1);
        }
    }
})


module.exports = mongoose.model('Flights', flightSchema);