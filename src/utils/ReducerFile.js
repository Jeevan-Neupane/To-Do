const reducer = (state, action) => {
    switch (action.type) {
        case "THEME_TOGGLER":

            return {
                ...state,
                darkTheme: action.payload
            }

        case "ADD_TASK":
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case "DELETE":
            const UpdatedTask = state.tasks.filter((task) => {
                return task.id !== action.payload
            })
            return {
                ...state,
                tasks: [...UpdatedTask]
            }
        case "SET_EDIT_TASK":
            return {
                ...state,
                editTask: action.payload,


            }
        case "CHANGE_EDITED_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id) {
                        return { ...task, name: action.payload.name, status: action.payload.status }
                    }
                    return task;
                })


            }



        case "CHECKBOX_STATUS":


            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload) {
                        return { ...task, status: !task.status }
                    }
                    return task;
                })

            }


        default:
            return state;
    }

}

export default reducer;