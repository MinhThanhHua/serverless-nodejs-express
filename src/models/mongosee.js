'use strict';

import mongoose, { model } from 'mongoose';
var Schema = mongoose.Schema;

var TarkSchema = new Schema({
    name: {
        type: String,
        required: 'Plaese enter the name of task'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed'] // chọn 1 trong 3
        }]
    },
    default: ['pending']
});

module.exports = mongoose.model('Tasks', TarkSchema);