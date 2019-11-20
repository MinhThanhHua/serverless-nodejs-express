// freeze set data is const, user cann't change value on it
module.exports = Object.freeze({
    ENVIRONTMENT: process.env.MY_SECRET
});
