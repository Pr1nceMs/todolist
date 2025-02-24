const [todos, setTodos] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [nextId, setNextId] = useState(1);
const [filter, setFilter] = useState("all");
const [error, setError] = useState(false);

const addTask = useCallback(
  (textTodo) => {
    if (todos.some((todo) => todo.text === textTodo)) {
      return alert("Tache deja existante");
    }
    if (textTodo.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: nextId, text: textTodo, completed: false },
      ]);
      setNextId((previousId) => previousId + 1);
    }
  },
  [nextId]
);

const toggleTask = useCallback(
  (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  },
  [todos]
);

const deleteTask = useCallback(
  (id) => {
    setTodos((prevTodos) =>
      prevTodos
        .filter((todo) => todo.id !== id)
        .map((todo, index) => ({ ...todo, id: index + 1 }))
    );
    // console.error();
  },
  [todos]
);
