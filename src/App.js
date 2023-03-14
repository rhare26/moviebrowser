import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import { Switch, Route } from 'react-router-dom'

function App() {

    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');

    return (
        <div className="App">
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={AboutView} />  
                <Route path="/search">
                    <SearchView keyword={searchText} searchResults={searchResults} />
                </Route>
            </Switch >
          
          

        </div>
    );
}

export default App;
