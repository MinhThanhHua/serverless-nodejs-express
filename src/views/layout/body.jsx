const React = require('react');
const NavLayout = require('./nav');
const LeftMenu = require('./leftMenu');

function body(props) {
    return (
    <body id="page-top">

    <NavLayout></NavLayout>

    <div id="wrapper">
        
        <LeftMenu></LeftMenu>

        <div id="content-wrapper">
            { props.children }
            <footer className="sticky-footer">
                <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2019</span>
                </div>
                </div>
            </footer>
        </div>
    </div>
    
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
        </div>
    </div>

    <script src={process.env.localDomain + '/javascripts/vendor/jquery/jquery.min.js'}></script>
    <script src={process.env.localDomain + '/javascripts/vendor/bootstrap/js/bootstrap.bundle.min.js'}></script>
    <script src={process.env.localDomain + '/javascripts/vendor/jquery-easing/jquery.easing.min.js'}></script>
    <script src={process.env.localDomain + '/javascripts/vendor/chart.js/Chart.min.js'}></script>
    <script src={process.env.localDomain + '/javascripts/vendor/datatables/jquery.dataTables.js'}></script>
    <script src={process.env.localDomain + '/javascripts/vendor/datatables/dataTables.bootstrap4.js'}></script>
    <script src={process.env.localDomain + '/javascripts/sb-admin.min.js'}></script>
    <script src={process.env.localDomain + '/javascripts/demo/datatables-demo.js'}></script>
    <script src={process.env.localDomain + '/javascripts/demo/chart-area-demo.js'}></script>
    </body>
    );
}

module.exports = body;
