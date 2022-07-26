import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayTodo from './components/DisplayTodo';
import CreateTodo from './components/CreateTodo';
import './App.css';

function App() {
  return (
    <div className="todo-Container">
      <Router>
        <Routes>
          <Route exact path="/" component={DisplayTodo} />
          <Route path="/add-list" component={CreateTodo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
