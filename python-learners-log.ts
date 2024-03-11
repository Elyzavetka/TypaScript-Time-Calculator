export type PythonLearners = {
    id: number;
    name: string;
    activities: PythonActivity[];
};

export type PythonActivity = {
    notes: string;
    time: number;
    completed: boolean;
};

export const pythonLearners = [
    {
        id: 400,
        name: 'Sarah Galloway',
        activities: [
            {
            notes: 'Solved Python coding challenges on loops and conditionals',
            time: 7,
            verified: true,
            },
        ],
    },
    {
        id: 401,
        name: 'Cormac Mcfarlane',
        activities: [
            {
            notes: 'Completed a Python project on data manipulation',
            time: 3,
            completed: true,
            },
            {
            notes: 'Studied Python functions and practiced writing them',
            time: 2,
            completed: true,
            },
        ],
    },
    {
        id: 402,
        name: 'Maisha Mcconnell',
        activities: [
            {
            notes: 'Reviewed Python fundamentals and practiced problem-solving',
            time: 2,
            completed: false,
            },
        ],
    },
    {
        id: 403,
        name: 'Joanna Reilly',
        activities: [
            {
            notes: 'Explored Python libraries for data analysis and visualization',
            time: 5,
            completed: true,
            },
            {
            notes: 'Learned about object-oriented programming in Python',
            time: 3,
            completed: true,
            },
        ],
    },
];