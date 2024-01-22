const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let eventSchema = new Schema({
    eventName: {
        type: String
    },
    city: {
        type: String
    },
    visuals: {
        type: String
    },
    location: {
        type: Number
    },
    detail: {
        type: String
    },
    tickets: {
        type: String
    },
    ticketPrice: {
        type: Number,
    }
}, {
    collection: "events"
})

module.exports = mongoose.model("Event", eventSchema);
