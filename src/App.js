import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import {useStateValue} from './StateProvider'

function App() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
            <Login/>
        ) : (
          <>
          <Header />
        <div className="app__body">
          <Sidebar/>
          <Switch>
            <Route path="/room/:roomId">
               <Chat/>
            </Route>
            <Route path="/">
               <h1>Welcom!!</h1>
            </Route>
            
          </Switch>
        </div>
        </>
        )
        }
      </Router>
    </div>
  )

}

export default App;
