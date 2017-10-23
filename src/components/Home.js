import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';
import { Switch, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 300,
  width: 900,
  margin: 'auto',
  marginBottom : 20,
  padding: 20,
  textAlign: 'center'
};

const buttonStyle = {
	height: 30,
	width: 100,
	backgroundColor : '#B8F789',
	margin : 10,
	border: 'none'
}

const eventInfo = {
	 height: 200,
     margin: 'auto',
     textAlign: 'center'
}

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
    console.log(value)
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
 	<Paper style={style} zDepth={2} >
 	<a href={obj.links.web}><h2>{obj.exposition.name}</h2></a>
 	<p>{obj.exposition.description}</p>
 	<p>Price : {obj.exposition.price.amount}  Euro</p>
 	<p>Starting time : {obj.period.startDate}</p>
 	<p>End time : {obj.period.endDate}</p>
 	</Paper>
 	))
 	return <div>
 	<div className="eventInfo" style={eventInfo} >
 	<h2>Event information</h2>
 	<h3>Choose date</h3>
 	<input type="date" onChange={this.handleSubmit} id="dateInput" />
 	<button style={buttonStyle} primary={true}  onClick={this.handleClick} className="today">Today</button>
 	<button  style={buttonStyle} onClick={this.handleClick} className="tomorrow"> Tomorrow </button >
 	</div>
 	{events}
 	</div>
 }
	return( <div>{events}</div>
		)
}
}

export default Home;