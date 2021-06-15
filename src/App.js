import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Intro from './components/Intro';
import H from './components/H';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/aboutme'  component={Intro} />
        {/* <Route path='/' exact component={Home} />
        
        <Route path='/products'  component={Products} />
        <Route path='/sign-up'  component={SignUp} /> */}
      </Switch>
      <Footer/>

      
    </Router>

  );
}

export default App;
