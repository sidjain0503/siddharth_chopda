import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Mainbody from './Mainbody/Mainbody';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from './Projects/Projects';
import Timeline from './Timeline/Timeline';

function App() {
  return (
    <div className="App">
      

      <Router>
        
        <Switch>
        
        <Route path="/Projects">
            <Header/>
            <Projects/>
            <Timeline/>
           <Footer/> 
          </Route>
        
    
        <Route path="/">
          <Header/>
          <Mainbody/>
          <Footer/> 
        </Route>
    </Switch>
      </Router>
      {/* Home */}
      {/* projects */}
      {/* contact me*/}
      {/* footer having social media handles */}
       
    </div>
  );
}

export default App;
