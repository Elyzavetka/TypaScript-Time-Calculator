export type JavaScriptLearners = {
    id: number;
    name: string;
    activities: JavaScriptExercises[];
};

export type JavaScriptExercises = {
    description: string;
    hours: number; // changing 'hours' to 'timeSpent' for clarity
    completed: boolean; // changing 'verified' to 'completed' for clarity
};

export const javaScriptLearners: JavaScriptLearners[] = [
    {
        id: 100,
        name: 'Rose Sutton',
        activities: [
            {
            description: 'Complete Introduction to JavaScript',
            hours: 3,
            completed: true,
            },
            {
            description: 'Create a simple todo list application',
            hours: 2,
            completed: false,
            },
        ],
    },
    {
        id: 101,
        name: 'Leigh Gilmour',
        activities: [
            {
            description: 'Debugging JavaScript applications',
            hours: 4,
            completed: true,
            },
        ],
    },
    {
        id: 102,
        name: 'Raj Wardle',
        activities: [
            {
            description: 'Working with JavaScript frameworks',
            hours: 6,
            completed: true,
            },
        ],
    },
    {
        id: 103,
        name: 'Rayan Gutierrez',
        activities: [
            {
            description: 'JavaScript project: Build a weather app',
            hours: 5,
            completed: false,
            },
            {
            description: 'Implementing authentication in JavaScript apps',
            hours: 3,
            completed: true,
            },
        ],
    },
];

  // Function to calculate total time spent by JavaScript learners
export function calculateTotalTimeSpent(): number {
    let totalTimeSpent = 0;
    for (const learner of javaScriptLearners) {
        for (const exercise of learner.activities) {
            totalTimeSpent += exercise.hours;
        }
    }
    return totalTimeSpent;
}

  // Calculate and log total time spent by JavaScript learners
const totalJavaScriptTimeSpent = calculateTotalTimeSpent();
console.log(`Total time spent by JavaScript learners on exercises: ${totalJavaScriptTimeSpent} hours.`);
