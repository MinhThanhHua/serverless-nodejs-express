'use strict';

const Student = require(constain.CONTROLLER + '/api/StudentController');
// const Tasks = require(constain.CONTROLLER + '/api/TasksController');
const lineRouter = require(constain.ROUTES + '/api/lineApi');

module.exports = function(app) {
    // app.route('/tasks')
    //     .get(Tasks.listTask)
    //     .post(Tasks.createTask);

    // app.route('/tasks/:taskId')
    //     .get(Tasks.getTask)
    //     .put(Tasks.updateTask)
    //     .delete(Tasks.deleteTask);

    app.route('/api/student')
        .get(Student.getAllStudents)
        .post(Student.createStudent);

    app.route('/api/student/:studentId')
        .get(Student.getStudent)
        .put(Student.editStudent)
        .delete(Student.deleteStudent);

    app.use('/api/line', lineRouter);

    app.use('/api/scane', Student.scaneOCR);
    app.use('/api/quickstart', Student.quickstart);
}
