const React = require('react');

function body(props) {
    return (
    <body id="page-top">
    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>
        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
            <button className="btn btn-primary" type="button">
                <i className="fas fa-search"></i>
            </button>
            </div>
        </div>
        </form>

        <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger">9+</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger">7</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-circle fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">Settings</a>
            <a className="dropdown-item" href="#">Activity Log</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
            </div>
        </li>
        </ul>
    </nav>

    <div id="wrapper">
        <ul className="sidebar navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="login.html">Login</a>
            <a className="dropdown-item" href="register.html">Register</a>
            <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="404.html">404 Page</a>
            <a className="dropdown-item" href="blank.html">Blank Page</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>
        </ul>
        <div id="content-wrapper">
        <div className="container-fluid">
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Overview</li>
            </ol>
            <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                    </span>
                </a>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                    </span>
                </a>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                    </span>
                </a>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                    <div className="card-body-icon">
                    <i className="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                    </span>
                </a>
                </div>
            </div>
            </div>

            <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area"></i>
                Area Chart Example</div>
            <div className="card-body">
                <canvas id="myAreaChart" width="100%" height="30"></canvas>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>

            <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-table"></i>
                Data Table Example</div>
            <div className="card-body">
                <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
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
