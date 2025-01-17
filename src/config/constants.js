// freeze set data is const, user cann't change value on it
// Check đường dẫn trên server, gán lại đường dẫn mới theo môi trường
// trên aws sẽ là LAMBDA_ROOT = /var/task
if (!process.env.PWD) {
    process.env.PWD = process.env.LAMBDA_ROOT;
}
process.env.CSS = process.env.PWD + '/public/stylesheets';
process.env.localDomain = 'http://localhost:3000';
process.env.CONTROLLER = process.env.PWD + '/src/controller';

module.exports = Object.freeze({
    ENVIRONTMENT: process.env.MY_SECRET,
    ROOT: process.env.PWD,
    SRC: process.env.PWD + '/src',
    PUBLIC: process.env.PWD + '/public',
    CONTROLLER: process.env.PWD + '/src/controller',
    TABLE: process.env.PWD + '/src/tables',
    CONFIG: process.env.PWD + '/src/config',
    ROUTES: process.env.PWD + '/src/routes',
    TOKEN_LINE_PUSH: Object.freeze({
        channelAccessToken: 'ql9T0R0JbiwGfbna06+5D9tg9ybxaQqNjvcN39Grl+of4o2NfskkQnV/M9cCvGUcIIFRsap3cTXbsVn/P5jGBmWDYM/Bbq7gKIYH7prIUJUfyNjVoF4S7VlBw+A91RX7eJNLn4TFpsM2iga6aVyVogdB04t89/1O/w1cDnyilFU=',
        channelSecret: '90c1487d3c596e639acee0efa5173495'
    }),
    USER_ID_SEND: 'Udeadbeefdeadbeefdeadbeefdeadbeef',
    IMG: process.env.PWD + '/public/images',
    CSS: process.env.PWD + '/public/stylesheets',
    JS: process.env.PWD + '/public/javascripts',
});
