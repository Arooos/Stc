
const initialState = [
    {
        id: '1',
        status: 'Todo',
        title: 'Расстановка отряда',
        date: '31 марта',
        time: '19:00',
        executor: 'Петров А.А',
    },
    {
        id: '2',
        status: 'Plan',
        title: 'Починить ноутбук',
        date: '31 марта',
        time: '19:00',
        executor: 'Петров А.А',  
    },
];

const state = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
};

export default state
