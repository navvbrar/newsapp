
import './App.css';

import React, { useState } from 'react' ;
import Navbar from './components/Navbar';
import News from './components/News'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> { 
   const apikey=  process.env.REACT_APP_NEWS_API 
    const[loading,setloading]= useState(0)
    
    const setprogress = (progress)=>{
      setloading(progress);
    }
  
  
    return (
      <div> 
        <Router> 
       
        <Navbar/>
        <LoadingBar 
         height={3}
        color='#f11946'
        progress={loading}
  />
        <Switch>
          <Route exact path="/"><News apikey={apikey}  setprogress={ setprogress } key="general" pagesize= "8" country="in" category="general"/></Route>
          <Route exact path="/business"><News apikey={apikey}  setprogress={ setprogress } key="business" pagesize= "8" country="in" category="business"/></Route>
          <Route exact path="/health"><News apikey={apikey}  setprogress={ setprogress  } key="health" pagesize= "8" country="in" category="health"/></Route>
          <Route exact path="/entertainment"><News apikey={apikey}  setprogress={ setprogress } key="entertainment" pagesize= "8" country="in" category="entertainment"/></Route>
          <Route exact path="/sports"><News apikey={apikey}  setprogress={ setprogress } key="sports" pagesize= "8" country="in" category="sports"/></Route>
          <Route exact path="/science"><News apikey={apikey}  setprogress={ setprogress } key="science" pagesize= "8" country="in" category="science"/></Route>
          <Route exact path="/technology"><News apikey={apikey}  setprogress={ setprogress } key="technology" pagesize= "8" country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div> 
    )
  }


  export default App;
