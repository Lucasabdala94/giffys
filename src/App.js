import React from 'react';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResult';
import Detail from './pages/Detail';
import Logo from "./logo.png"
import './App.css';
import { GifsContextProvider } from './context/GifsContext';


function App() {

  return (
    <div className="App" >
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img className='logo' alt='Giffy logo' src={Logo} />
          </figure>
        </Link>
        <GifsContextProvider>
          <Route
            component={Home}
            path='/'
          />
          <Route
            component={SearchResults}
            path='/search/:keyword'
          />
          <Route
            component={Detail}
            path='/gif/:id'
          />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App;
