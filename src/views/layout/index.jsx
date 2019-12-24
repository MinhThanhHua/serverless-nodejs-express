const React = require('react');
var HeadertLayout = require('./head');
var BodyLayout = require('./body');

function index(props) {
    return (
        <html>
        <HeadertLayout></HeadertLayout>
        <BodyLayout>
            {props.children}
        </BodyLayout>
        </html>
    );
}

module.exports = index;
