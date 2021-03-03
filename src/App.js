import './App.css';
import SearchForm from './components/SearchForm';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Exercise 2</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchForm />
          </Route>
          <Route path='/:username'>
              <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
