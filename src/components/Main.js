import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';
import Home from './Home';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
	<main>
	 <Switch>
	  <Route exact path='/' component={Home} />
      <Route path='/Vincent' component={Collection} />
       <Route path='/Vermer' component={Collection} />
        <Route path='/Rembrandt' component={Collection} />
	 </Switch>
	</main>)
		
export default Main;