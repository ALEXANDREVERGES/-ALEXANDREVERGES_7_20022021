
import './App.css';
// import Feed from './components/Feed';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        <Route exact path="/">
          <Nav />
          <Home/>
        </Route>
      {/* </Switch> */}
     
      
    </div>
  );
}

export default App;
