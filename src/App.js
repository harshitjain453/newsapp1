import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import React, { Component } from 'react';

export class App extends Component {
   apiKey="2edc79b5c83f4f48984a935f6f226d28";
   pageSize=5;
   state={
      progress:0
   }
   setProgress=(progress)=>{
      this.setState({progress:progress})
   }
   render() {
      return (
         <div>
             <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      //   onLoaderFinished={() => setProgress(0)}
      />

        <Routes>
          <Route exact path="/" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" color="danger" />}>
          
          </Route>
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" color="primary"  />}>
            
          </Route>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"  color="secondary"/>}>
           
          </Route>
          <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" color="danger" />}>
            
          </Route>
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" color="success" />}>
            
          </Route>
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" color="info"/>}>
            
          </Route>
          <Route exact path="/sports" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" color="warning"/>}>
           
          </Route>
          <Route exact path="/technology" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" color="dark" />}>
           
          </Route>
        </Routes>
      </Router>
    </div>
   
      );
   }
}

export default App;

// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App = ()=> {
//   const pageSize = 5;
//   const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       />
//         <Switch>
//           <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
 
// }

// export default App;