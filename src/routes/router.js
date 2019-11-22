'use strict';

const Student = require(constain.CONTROLLER + '/api/StudentController');
// const Tasks = require(constain.CONTROLLER + '/api/TasksController');
const lineRouter = require(constain.ROUTES + '/lineApi');

module.exports = function(app) {
    // app.route('/tasks')
    //     .get(Tasks.listTask)
    //     .post(Tasks.createTask);

    // app.route('/tasks/:taskId')
    //     .get(Tasks.getTask)
    //     .put(Tasks.updateTask)
    //     .delete(Tasks.deleteTask);

    app.route('/student')
        .get(Student.getAllStudents)
        .post(Student.createStudent);

    app.route('/student/:studentId')
        .get(Student.getStudent)
        .put(Student.editStudent)
        .delete(Student.deleteStudent);
    
    app.route('/test')
        .get(Student.helloStudent);

    app.use('/line', lineRouter);
}
