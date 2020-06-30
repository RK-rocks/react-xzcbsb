import React, { Component } from 'react';
import { render } from 'react-dom';

import SinglePage from "./components/SinglePage";
import MultiPage from "./components/MultiPage";
import SmallerTier from "./components/SmallerTier";
import PrintButton from "./components/PrintButton";
import ReactDOM from 'react-dom'
// import App from "./App"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});



const App = () => (<div className="bg-black-80 w-100 pv5">
    <div className="white mt5 tc f3">Higher tier Mode</div>
    <PrintButton id={"multiPage"} label={"Print multiplate pages"} />
    <MultiPage id={"multiPage"} />
    <div className="white mt5 tc f3">Small tier pdf</div>
    <PrintButton id={"smallerTier"} label={"Print multiplate pages"} />
    <SmallerTier id={"smallerTier"} />
</div>);

// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={MultiPage} />
//       <Route path="/users" component={MultiPage} />
//       <Route path="/contact" component={SinglePage} />
//     </div>
//   </Router>
// )

render(<App />, document.getElementById('root'));
