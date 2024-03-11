import {
    JavaScriptLearners,
    JavaScriptExercises,
    javaScriptLearners,
} from './js-learners-log';

import {
    PythonLearners,
    PythonActivity,
    pythonLearners,
} from './python-learners-log';

type CombinedActivity = JavaScriptExercises | PythonActivity;

type Students = {
    id: number;
    name: string;
    activities: CombinedActivity[];
};

function combineStudents(
    students: (JavaScriptLearners | PythonLearners)[]
) {
    return students.map((student) => {
        let id = student.id
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: student.name,
            activities: student.activities
            }
        })
    }

const isCompleted = (completed: string | boolean) => {
    if (typeof completed === 'string') {
        return completed === 'Yes'
    }
    return completed;
}

const getHours = (activity: CombinedActivity) => {
    if ('hours' in activity) {
        return activity.hours;
    } else {
        return activity.time;
    }
}

function calculateHours(students: Students[]) {
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
}

const combinedStudents = combineStudents(
    [].concat(pythonLearners, javaScriptLearners)
);
console.log(combinedStudents);
let result = calculateHours(combinedStudents);
console.log(result.sort(byHours))