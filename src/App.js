import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Index from './pages';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
