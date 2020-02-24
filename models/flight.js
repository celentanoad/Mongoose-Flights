const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ["AUS", "DFW", "LAX", "PHL", "SFO"]},
    arrival: {type: Date}
})

const flightSchema = new Schema({
    airline: {type: String, enum: ["American", "Southwest", "United"]},
    flightNo: {
        type: Number, 
        required: true, 
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => {
            now = new Date();
            oneYearFromNow = now.setFullYear(now.getFullYear() + 1);
        return oneYearFromNow;
        }   
    },
    airport: {type: String, enum: ["AUS", "DFW", "LAX", "PHL", "SFO"], default: "AUS"},
    destinations: [destinationSchema]
});

module.exports = mongoose.model("Flight", flightSchema);