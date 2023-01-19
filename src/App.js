import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Alltodo from './components/Alltodo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <TodoForm/>
<Alltodo/>
      </header>
    </div>
  );
}

export default App;
