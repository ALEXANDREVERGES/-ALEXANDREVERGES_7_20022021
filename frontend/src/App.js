
import './App.css';
// import Feed from './components/Feed';
import Home from './components/Home';
import Nav from './components/Nav';
import Profil from './components/Profil';
// import Commentaires from '../src/components/Commentaires'
// import { BrowserRouter as Route} from 'react-router-dom';
 import SignUp from './components/SignUp';
 import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
       <Nav /> 
       <Profil/>  
      <Home /> 
      
    </div>
  );
}

export default App;
