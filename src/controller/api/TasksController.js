'use strict';

import mongoose from 'mongoose';
import Task from '../models/mongosee';

module.exports = {
    listTask: async(req, res) => {
        // Get a task
        Task.find({}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    },

    createTask: async(req, res) => {
        var newTask = new Task(req.body);
        // Create new task
        newTask.save(function(err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    },

    getTask: async(req, res) => {
        Task.findById(req.params.taskId, function(err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    },

    updateTask: async(req, res) => {
        Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new:true}, function(err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    },

    deleteTask: async(req, res) => {
        Task.remove({_id: req.params.taskId}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Task successfully deleted'});
        })
    },
}