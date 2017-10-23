import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Artists from './Artists';
import CollectionInfo from './CollectionInfo';

const Collection = () => (
	<div>
	<Switch>
	    <Route exact path='/collection' component={CollectionInfo} />
	    <Route path='/collection/:artist' component={Artists} />
	</Switch>
	 </div>
	);

export default Collection;