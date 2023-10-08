import Todo from "./components/Todo"

function App() {
  return (
    <div className="card">
      <h1>My Todoes</h1>
      <Todo text='first Todo'/>
      <Todo text='second Todo'/>
      <Todo text='third Todo'/>
    </div>
  );
}

export default App;
