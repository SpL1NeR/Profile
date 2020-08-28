import React, {Component} from 'react'
import { Route,Switch } from 'react-router-dom'
import LandingPage from './landingpage'
import Project from './project';
import Resume from './resume';
import Contacts from './contact';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Resume" component={Resume}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/Contacts" component={Contacts}/>
        
    
    </Switch>
    
)
export default Main;