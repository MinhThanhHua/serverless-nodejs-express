const React = require('react');

var HeaderLayout = (props) => {
    return (
        <head>
            <meta charSet="utf-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>SB Admin - Dashboard</title>
            <link href={process.env.localDomain + '/stylesheets/vendor/fontawesome-free/css/all.min.css'} rel="stylesheet" type="text/css"/>
            <link href={process.env.localDomain + '/stylesheets/vendor/datatables/dataTables.bootstrap4.css'} rel="stylesheet"/>
            <link href={process.env.localDomain + '/stylesheets/sb-admin.css'} rel="stylesheet"/>
        </head>
    );
}

module.exports = HeaderLayout;