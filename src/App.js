import React, {Component} from 'react';
import './fonts.css';
import Home from './Home';
import ProjectList from './ProjectList';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import './App.css';


class App extends Component {

  render(){
    return (
      <div>
        <Home />
        
        <About/>

        <ProjectList />
        
        <Resume />
        
        <Contact />
      </div>
    );
  }
}

export default App;
