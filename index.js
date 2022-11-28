function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn react',
            isCompleted: false
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'Build todo app',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    return(<>
        {todos.map( (todo, i) => 
            <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div> )}
        <TodoForm addTodo={addTodo}/>
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)