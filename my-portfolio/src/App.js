import './App.css';
import Layout from './layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './layout/Footer';

function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route path='/projects'>

        </Route>
        <Route path='/AboutMe'>

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

