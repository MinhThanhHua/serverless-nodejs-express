const React = require('react');
var HeadertLayout = require('../layout/head');
var BodyLayout = require('../layout/body');

function index(props) {
    
    return (
        <html>
        <HeadertLayout></HeadertLayout>
        <BodyLayout></BodyLayout>
        </html>
    );
}

module.exports = index;
