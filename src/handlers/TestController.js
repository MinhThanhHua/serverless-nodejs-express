'use strict';

module.exports = {
    test: async(event, context, callback) => {
        console.log('Loading function');
        // Load the message passed into the Lambda function into a JSON object 
        var eventText = JSON.stringify(event, null, 2);
        // Load the message passed into the Lambda function into a JSON object 
        console.log(typeof eventText)
        console.log(eventText) // data từ câu query trên iot role
        callback(null, event.key1)
    },
    demo: async(req, res) => {
        console.log('Demo');
    }
}
