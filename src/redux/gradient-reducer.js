const CHANGE_GRADIENT = "CHANGE_GRADIENT"
const ADD_GRADIENT = "ADD_GRADIENT"
const DELETE_GRADIENT = "DELETE_GRADIENT"


let initialStore = {
    gradientsList: []
}

export const add_gradient = (gradient) => ({
    type: ADD_GRADIENT,
    gradient
})
export const change_gradient = (gradient, id) => ({
    type: CHANGE_GRADIENT,
    gradient,
    id
})
export const delete_gradient = (id) => ({
    type: DELETE_GRADIENT,
    id
})

const gradientReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_GRADIENT: {
            const newState = {...state}
            newState.gradientsList.push(action.gradient)
            return newState
        }
        case CHANGE_GRADIENT: {
            const newState = {...state}
            newState.gradientsList[action.id] = action.gradient
            return newState
        }
        case DELETE_GRADIENT:
            return {
                ...state, gradientsList: state.gradientsList.filter((e, i) => i !== action.id)
            }
        default:
            return state;
    }
}
export default gradientReducer