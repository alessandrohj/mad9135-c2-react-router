import './App.css';
import Users from '../Users/Users';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Addresses from '../Addresses/Addresses';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  const [list, setList] = useState([]);


  async function getData(){
      let seed = 'deje0014';
      let nat = 'au,ca,nz,gb,us';
      let qty = 20;
      let url = `https://randomuser.me/api/?seed=${seed}&format=json&${nat}&results=${qty}`;;

      fetch(url)
      .then(resp=> resp.json())
      .then(data => {
          console.log(data.results);
        setList(data.results)
      })
      .catch(error => console.log(error))
  }

  useEffect(()=>{
      getData();
  }, [])



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
          <Users list={list} />
        </Route>
        <Route path='/address'>
          <Addresses list={list} />
        </Route>
        <Route path="/404" render={()=>{
          return(
          <p>Page not found</p>
          )
        }}>

        </Route>
        <Redirect to="/404" />
      </Switch>
      </main>
    </div>
  );
}

export default App;
