const React = require('React');
const Layout = require('../layout/index');



function List(props) {
    return (
        <Layout>
            <div className="container-fluid">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Tables</li>
                </ol>
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
                            <th>Class</th>
                            <th>Phone Number</th>
                            <th>Line ID</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.students.map((value, index) => {
                            return (
                                <tr data-href="site.com/whatever">
                                    <td>{(value.name)}</td>
                                    <td>{value.class}</td>
                                    <td>{value.phone_number}</td>
                                    <td>{value.id_line}</td>
                                    <td>{value.date.toLocaleDateString()}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                <p className="small text-center text-muted my-5">
                <em>More table examples coming soon...</em>
                </p>
            </div>
        </Layout>
    );
}

module.exports = List;

