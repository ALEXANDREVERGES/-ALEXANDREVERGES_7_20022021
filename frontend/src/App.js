
import './App.css';
// import Feed from './components/Feed';
import Home from './components/Home';
import Nav from './components/Nav';
import Profil from './components/Profil';
// import Commentaires from '../src/components/Commentaires'
// import { BrowserRouter as Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
       <Nav />   
      <Home /> 
      <Profil/>
    </div>
  );
}

export default App;
