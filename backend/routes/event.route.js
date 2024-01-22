let mongoose = require("mongoose");

express = require("express");

router = express.Router();

// event model
let eventSchema = require("../models/Event");

// create event
router.post("/create-event",(req,res,next) => {
    eventSchema.create(req.body, (error,data) => {
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// read events
router.get("/",(req,res) => {
    eventSchema.find((error,data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);

        }
    });
});

// update event 
router.route("/update-event/:id")
   //get single event
   .get((req,res) => {
    eventSchema.findById(
        req.params.id, (error,data) => {
            if(error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
   })
    // update event data
   .put((req,res,next) => {
    eventSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error,data) => {
            if(error) {
                return next(error);
                console.log(error);
            } else {
                res.json(data);
                console.log("Event updated succesfully!");

            }
        }
    );
   });


   // delete event
    router.delete("/delete-event/:id",
    (req,res,next) => {
        eventSchema.findByIdAndRemove (  //findByIdAndDelete olabilir
            req.params.id, (error,data) => {
                if(error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data,
                    });
                }
            }
        );
    });

    module.exports = router;
