"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_learners_log_1 = require("./js-learners-log");
const python_learners_log_1 = require("./python-learners-log");
function combineStudents(students) {
    return students.map((student) => {
        let id = student.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: student.name,
            activities: student.activities
        };
    });
}
const isCompleted = (completed) => {
    if (typeof completed === 'string') {
        return completed === 'Yes';
    }
    return completed;
};
const getHours = (activity) => {
    if ('hours' in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
};
function calculateHours(students) {
    return students.map((student) => {
        let hours = 0;
        student.activities.forEach((activity) => {
            if (isCompleted(activity.completed)) {
                hours = hours + getHours(activity);
            }
        });
        return {
            id: student.id,
            name: student.name,
            hours: hours,
        };
    });
}
const byHours = (a, b) => {
    return b.hours - a.hours;
};
const combinedStudents = combineStudents([].concat(python_learners_log_1.pythonLearners, js_learners_log_1.javaScriptLearners));
console.log(combinedStudents);
let result = calculateHours(combinedStudents);
console.log(result.sort(byHours));
