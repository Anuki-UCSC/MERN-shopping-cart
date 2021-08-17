import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import CartScreen from './components/screens/CartScreen'
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle,setSideToggle]=useState(false);



  return (
    <div className="App">
     <Router>
       <Navbar click={()=>setSideToggle(true)}/>
       <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
       <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
     <Switch>
       <Route exact path='/' component={HomeScreen}/>
       <Route exact path='/product/:id' component={ProductScreen}/>
       <Route exact path='/cart' component={CartScreen}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
