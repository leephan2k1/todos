import "../styles/App.scss";
import TodoList from "../components/Todos";
function App() {
  return (
    <div className="App">
      <h1 id="app-title">Todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
