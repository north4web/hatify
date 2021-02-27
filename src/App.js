import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import SignIn from './components/Signin/Signin'
import Dashboard from './components/Dashboard/Dashboard'

import Berets from './components/Pages/Hat-types-beret/BeretsList'
import BeretsDetails from './components/Pages/Hat-types-beret/beretsDetails'

import Bowlers from './components/Pages/Hat-types-bowler/BowlersList'
import BowlersDetails from './components/Pages/Hat-types-bowler/bowlersDetails'

import Buckets from './components/Pages/Hat-types-bucket/bucketsList'
import BucketsDetails from './components/Pages/Hat-types-bucket/bucketsDetails'

import ScrollToTop from './scrollToTop';


function App() {


    return (
      <BrowserRouter>
        <ScrollToTop />
        
         <Header/>

        <Route exact path="/"component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Dashboard" component={Dashboard} />
        
        <Route exact path="/berets" component={Berets} />
        <Route path="/berets/:beretsId" >
                    <BeretsDetails />
                </Route>
        
        <Route exact path="/bowlers" component={Bowlers} />
        <Route path="/bowlers/:bowlersId" >
                    <BowlersDetails />
                </Route>

        <Route exact path="/Buckets" component={Buckets} />
        <Route path="/buckets/:bucketsId" >
                    <BucketsDetails />
                </Route>
      <Footer/>
      </BrowserRouter>
    )
  }
export default App;
