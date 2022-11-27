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
    return(<>
        {todos.map( (todo, i) => <div key={i}>{todo.text}</div> )}
    </>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)