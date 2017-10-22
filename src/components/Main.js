import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';
import Home from './Home';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
	<main>
	 <Switch>
	  <Route exact path='/' component={Home} />
      <Route path='/:artist' component={Collection} />
	 </Switch>
	</main>)
		
export default Main;