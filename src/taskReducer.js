const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.nextId, text: action.payload, completed: false },
        ],
        nextId: state.nextId + 1,
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

//useReducer
const initialState = {
  todos: [],
  nextId: 1,
};

const addTodo = useCallback(
  (textTodo) => {
    if (textTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: textTodo });
      // setNewTodo('');
    }
    // setNextId(previousId => previousId + 1)
  },
  [nextId]
);

const toggleTodo = useCallback(
  (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  },
  [todos]
);

const deleteTodo = useCallback(
  (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  },
  [todos]
);

const [state, dispatch] = useReducer(taskReducer, initialState);

//what does this fonction do
// const todoList = useMemo(() => {
//     return filteredTodos.map(todo => (
//         <Todo
//             key={todo.id}
//             todo={todo}
//             toggleTask={toggleTodo}
//             deleteTask={deleteTodo}
//         />
//     ))
// }, [filteredTodos, toggleTodo, deleteTodo])

export default taskReducer;
