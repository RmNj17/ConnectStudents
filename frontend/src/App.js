import './App.css';
import LoginPage  from './components/Login/login';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <LoginPage/>
        </Router>
        <div className="bg-balls"></div>
    </div>
    
  );
}

export default App;
