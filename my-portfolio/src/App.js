import './App.css';
import Layout from './layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe'
import Projects from './screens/Projects';


function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/AboutMe'>
          <AboutMe />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </Layout>
      
    </>
  );
}

export default App;


