import './App.css';
import Users from '../Users/Users';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Addresses from '../Addresses/Addresses';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <main>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/address'>
          <Addresses />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
