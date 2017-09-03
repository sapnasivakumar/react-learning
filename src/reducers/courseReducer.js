export default function courseReducer(state = [], action){
    switch(action.type){
        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, action.course)
            ];

        case 'DELETE_COURSE':
            return state.filter((course, index) => index !== action.index);

        default:
            return state;
    }
}
