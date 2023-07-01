import axios from 'axios'


const initialState = {
    items: []
}

export const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {items: [...state.items, action.payload]}   
        case 'REMOVE_TODO':
            return {items: state.items}
        case 'SET_TODOS':
            return {items: action.payload}
        default:
            return state
    }
}


export const fetchTodos = () => {
  return (dispatch) => {
    axios.get('https://dummyjson.com/todos')
    .then(res => {
          dispatch({type: 'SET_TODOS', payload: res.data.todos}) // можно вынести в отдельный action creator
    })
  }
}

export const addTodo = (payload) => (
    {type: 'ADD_TODO', payload}
)

export const removeTodo = (payload) => (
    {type: 'REMOVE_TODO', payload}
) 
