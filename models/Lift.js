const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const liftSchema = new Schema({
    liftName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    reps: {
        type: Number,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    muscleGroup:{
        type: String,
        required: false
    },
   
},{ timestamps: true },
 {
    toJSON: {
        getters: true
    },
    id: false
});


const Lift = model('Lift', liftSchema);

module.exports = Lift;