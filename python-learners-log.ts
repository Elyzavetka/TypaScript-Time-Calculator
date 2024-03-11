export type PythonLearners = {
    id: string;
    name: string;
    activities: PythonActivity[];
};

export type PythonActivity = {
    notes: string;
    time: number;
    verified: boolean;
};

export const pythonLearnersTeam = [
    {
        id: '400sg',
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
        id: '401cm',
        name: 'Cormac Mcfarlane',
        activities: [
            {
            notes: 'Completed a Python project on data manipulation',
            time: 3,
            verified: true,
            },
            {
            notes: 'Studied Python functions and practiced writing them',
            time: 2,
            verified: true,
            },
        ],
    },
    {
        id: '402mm',
        name: 'Maisha Mcconnell',
        activities: [
            {
            notes: 'Reviewed Python fundamentals and practiced problem-solving',
            time: 2,
            verified: false,
            },
        ],
    },
    {
        id: '403jr',
        name: 'Joanna Reilly',
        activities: [
            {
            notes: 'Explored Python libraries for data analysis and visualization',
            time: 5,
            verified: true,
            },
            {
            notes: 'Learned about object-oriented programming in Python',
            time: 3,
            verified: true,
            },
        ],
    },
];