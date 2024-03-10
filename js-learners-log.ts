export type JavaScriptLearner = {
    id: number;
    name: string;
    exercises: JavaScriptExercise[];
};

export type JavaScriptExercise = {
    description: string;
    timeSpent: number; // changing 'hours' to 'timeSpent' for clarity
    completed: boolean; // changing 'verified' to 'completed' for clarity
};

export const javascriptLearners: JavaScriptLearner[] = [
    {
        id: 100,
        name: 'Rose Sutton',
        exercises: [
            {
            description: 'Complete Introduction to JavaScript',
            timeSpent: 3,
            completed: true,
            },
            {
            description: 'Create a simple todo list application',
            timeSpent: 2,
            completed: false,
            },
        ],
    },
    {
        id: 101,
        name: 'Leigh Gilmour',
        exercises: [
            {
            description: 'Debugging JavaScript applications',
            timeSpent: 4,
            completed: true,
            },
        ],
    },
    {
        id: 102,
        name: 'Raj Wardle',
        exercises: [
            {
            description: 'Working with JavaScript frameworks',
            timeSpent: 6,
            completed: true,
            },
        ],
    },
    {
        id: 103,
        name: 'Rayan Gutierrez',
        exercises: [
            {
            description: 'JavaScript project: Build a weather app',
            timeSpent: 5,
            completed: false,
            },
            {
            description: 'Implementing authentication in JavaScript apps',
            timeSpent: 3,
            completed: true,
            },
        ],
    },
];

  // Function to calculate total time spent by JavaScript learners
export function calculateTotalTimeSpent(): number {
    let totalTimeSpent = 0;
    for (const learner of javascriptLearners) {
        for (const exercise of learner.exercises) {
            totalTimeSpent += exercise.timeSpent;
        }
    }
    return totalTimeSpent;
}

  // Calculate and log total time spent by JavaScript learners
const totalJavaScriptTimeSpent = calculateTotalTimeSpent();
console.log(`Total time spent by JavaScript learners on exercises: ${totalJavaScriptTimeSpent} hours.`);
