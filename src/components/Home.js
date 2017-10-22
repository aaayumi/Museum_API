import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';
import { Switch, Route } from 'react-router-dom';

var date = new Date();
var month = date.getUTCMonth() + 1; //months from 1-12
var day = date.getUTCDate();
var year = date.getUTCFullYear();

var newDate = year + "-" + month + "-" + day;
console.log(newDate);

const eventUrl = `https://www.rijksmuseum.nl/api/en/agenda/${newDate}?key=6EN25Xlf&format=json`;

class Home extends Component {
constructor(props){
super(props);
this.state = {
event : [],
date : ""
}
this.handleClick = this.handleClick.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount(){
console.log(eventUrl)
fetch(eventUrl)
.then(response => response.json())
.then(json => {
this.setState({
event: json.options
});
console.log(this.state.event)
});
}

handleClick(event) {
	console.log(this.state.date)
	var newDate;

	//today
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    var newDate = year + "-" + month + "-" + day;

    // tomorrow
	var tomorrow = date.getUTCDate() + 1;
    var nextDate = year + "-" + month + "-" + tomorrow;

    if(event.target.className == "tomorrow") {
   newDate = nextDate;
    } else {
    	newDate = newDate;
    }
console.log(newDate);
const eventUrl = `https://www.rijksmuseum.nl/api/en/agenda/${newDate}?key=6EN25Xlf&format=json`;
console.log(eventUrl)
fetch(eventUrl)
.then(response => response.json())
.then(json => {
this.setState({
event: json.options
});
console.log(this.state.event)
});
}

handleSubmit(){
	var value = new Date( document.getElementById('dateInput').value);

	var day = value.getDate();
	var month = value.getMonth() + 1;
	var year = value.getFullYear();

	var thisDate = [year, month, day].join('-');
	console.log(thisDate)
	
    var newDate = thisDate;
 
     const eventUrl = `https://www.rijksmuseum.nl/api/en/agenda/${newDate}?key=6EN25Xlf&format=json`;
     console.log(eventUrl)
    fetch(eventUrl)
    .then(response => response.json())
    .then(json => {
    this.setState({
    event: json.options
    });
    console.log(this.state.event)
});

}
render() {
let events;
if(this.state.event.length){
 events =  this.state.event.map(
 (obj)  => (
 	<div>
 	<a href={obj.links.web}><h2>{obj.exposition.name}</h2></a>
 	<p>{obj.exposition.description}</p>
 	<p>Price : {obj.exposition.price.amount}  Euro</p>
 	<p>Starting time : {obj.period.startDate}</p>
 	<p>End time : {obj.period.endDate}</p>
 	</div>
 	))
 	return <div>
 	<input type="date" onChange={this.handleSubmit} id="dateInput" />
 	<button  onClick={this.handleClick} className="today"> Today </button>
 	<button onClick={this.handleClick} className="tomorrow"> Tomorrow </button>
 	{events}
 	</div>
 }
	return( <div>{events}</div>
		)
}
}

export default Home;