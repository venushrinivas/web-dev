const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];
const todoReducer = (state=data, action) => {
    switch (action.type) {
        case 'create-todo':
            const newTodo = {...action.todo, _id: (new Date()).getTime()+""};
            return [...state, newTodo];
        case 'delete-todo':
            return state.filter(todo => todo !== action.todo);
        case 'update-todo':
            return state.map(todo => {
                return todo._id === action.todo._id ? action.todo : todo;
            });
        default:
            return state;
    }
}
export default todoReducer;
