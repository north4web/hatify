import React from 'react'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignIn from './component/Home/Header/Signin/Signin'
import Dashboard from './component/Home/Header/Dashboard/Dashboard'
import Berets from './component/Home/Body/Hat-types-beret/berets'
import Bowlers from './component/Home/Body/Hat-types-bowler/bowlers'
import Buckets from './component/Home/Body/Hat-types-bucket/Buckets'

import Header from './component/Home/Header/Header'
import Footer from './component/Home/Footer/Footer'
 
import Beret1 from './component/Home/Body/Hat-types-beret/Details-berets/Beret1';
import Beret2 from './component/Home/Body/Hat-types-beret/Details-berets/Beret2';
import Beret3 from './component/Home/Body/Hat-types-beret/Details-berets/Beret3';
import Beret4 from './component/Home/Body/Hat-types-beret/Details-berets/Beret4';
import Beret5 from './component/Home/Body/Hat-types-beret/Details-berets/Beret5';
import Beret6 from './component/Home/Body/Hat-types-beret/Details-berets/Beret6';
import Beret7 from './component/Home/Body/Hat-types-beret/Details-berets/Beret7';
import Beret8 from './component/Home/Body/Hat-types-beret/Details-berets/Beret8';
import Beret9 from './component/Home/Body/Hat-types-beret/Details-berets/Beret9';

import Bowler1 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler1';
import Bowler2 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler2';
import Bowler3 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler3';
import Bowler4 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler4';
import Bowler5 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler5';
import Bowler6 from './component/Home/Body/Hat-types-bowler/Details-bowlers/Bowler6';

import Bucket1 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket1';
import Bucket2 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket2';
import Bucket3 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket3';
import Bucket4 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket4';
import Bucket5 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket5';
import Bucket6 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket6';
import Bucket7 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket7';
import Bucket8 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket8';
import Bucket9 from './component/Home/Body/Hat-types-bucket/Details-buckets/Bucket9';
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
        
        <Route exact path="/Berets" component={Berets} />
        <Route exact path="/Beret1" component={Beret1} />
        <Route exact path="/Beret2" component={Beret2} />
        <Route exact path="/Beret3" component={Beret3} />
        <Route exact path="/Beret4" component={Beret4} />
        <Route exact path="/Beret5" component={Beret5} />
        <Route exact path="/Beret6" component={Beret6} />
        <Route exact path="/Beret7" component={Beret7} />
        <Route exact path="/Beret8" component={Beret8} />
        <Route exact path="/Beret9" component={Beret9} />
        
        <Route exact path="/Bowlers" component={Bowlers} />
        <Route exact path="/Bowler1" component={Bowler1} />
        <Route exact path="/Bowler2" component={Bowler2} />
        <Route exact path="/Bowler3" component={Bowler3} />
        <Route exact path="/Bowler4" component={Bowler4} />
        <Route exact path="/Bowler5" component={Bowler5} />
        <Route exact path="/Bowler6" component={Bowler6} />

        <Route exact path="/Buckets" component={Buckets} />
        <Route exact path="/Bucket1" component={Bucket1} />
        <Route exact path="/Bucket2" component={Bucket2} />
        <Route exact path="/Bucket3" component={Bucket3} />
        <Route exact path="/Bucket4" component={Bucket4} />
        <Route exact path="/Bucket5" component={Bucket5} />
        <Route exact path="/Bucket6" component={Bucket6} />
        <Route exact path="/Bucket7" component={Bucket7} />
        <Route exact path="/Bucket8" component={Bucket8} />
        <Route exact path="/Bucket9" component={Bucket9} />


      <Footer/>

      </BrowserRouter>
    )
  }
export default App;
