const express = require('express');
const jsonParseError = require('@line/bot-sdk').JSONParseError;
const signatureValidationFailed = require('@line/bot-sdk').signatureValidationFailed;
const line = require('@line/bot-sdk');
const router = express.Router();
const Client = require('@line/bot-sdk').Client;
const Student = require(constain.TABLE + '/studentTable')

const client = new Client (constain.TOKEN_LINE_PUSH);

let middle = line.middleware(constain.TOKEN_LINE_PUSH);

router.post('/webhook', async (req, res) => {
    // console.log(req.body.events) // bắt sự kiện đang xảy ra trên webhook
    req.body.events.map(function(value, index) {
        // Check nếu là trường hợp vừa kết bạn thì lấy thông tin user
        if (value.type == 'follow') {
            let data = {
                name: 'Test',
                class: '10A',
                phone_number: '000',
                idLine: value.source.userId
            }
            Student.addStudent(data, function(resData) {
                console.log(resData);
            });
        }
    })
    Promise.all(req.body.events.map(handleEvent))
        .then(() => res.json(req.body.events))
        .catch((err) => {
            console.log(err);
            res.status(err.statusCode).end();
        })
});

router.post('/mesage', (req, res, next) => {
    let message = {
        type: 'text',
        text: req.body.message
    };
    Student.getStudentHasLineId(function(data) {
        let arrId = [];
        data.map(function(value, index) {
            arrId.push(value.id_line)
        });
        // Send multiple user
        client.multicast(arrId, message)
        .then(() => res.json('success'))
        .catch(err => console.log(err));
    });
    
    // Send 1 user
    // client.pushMessage('U7e27595b479b2fdf942d87a4dfa55c3d', message)
    //     .then(() => res.json('success'))
    //     .catch(err => console.log(err));
});

// Response when user send message
const handleEvent = async (ev) => {
    if (!(ev.type == 'message' || ev.type == 'text')) {
        return null;
    }
    // Check user is admin push notify
    if (ev.source.userId == constain.USER_ID_SEND) {
        return null;
    }

    const message = {
        type: 'text',
        text: 'Hello Bey!'
    };

    client.replyMessage(ev.replyToken, message, false)
        .then(() => {
            console.log('success');
        })
        .catch((err) => {
            console.log(err);
    });
}

// router.use((err, req, res, next) => {
//     if (err instanceof signatureValidationFailed) {
//         res.status(401).send(err.signature);
//     } else if (err instanceof JSONParseError) {
//         res.status(400).send(err.raw);
//     }
//     next(err);
// });

module.exports = router;
