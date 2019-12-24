'use strict';

module.exports = {
    checkValidate: (req) => {
        req.checkBody('class', "Check required class").notEmpty();
        req.checkBody('name', "Check required name").notEmpty();

        return  req.validationErrors(true);
    }
};
