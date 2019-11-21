// freeze set data is const, user cann't change value on it
module.exports = Object.freeze({
    ENVIRONTMENT: process.env.MY_SECRET,
    ROOT: process.env.PWD,
    SRC: process.env.PWD + '/src',
    PUBLIC: process.env.PWD + '/public',
    CONTROLLER: process.env.PWD + '/src/controller',
    TABLE: process.env.PWD + '/src/tables',
    CONFIG: process.env.PWD + '/src/config',
    ROUTES: process.env.PWD + '/src/routes'
});
