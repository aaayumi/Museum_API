import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';

const style = {
  height: 130,
  width: 900,
  margin: 'auto',
  marginBottom : 20,
  padding: 20,
  textAlign: 'center'
};


const baseUrl = "https://www.rijksmuseum.nl/api/en/collection?key=6EN25Xlf&format=json&q=";

export default class Artists extends Component {

constructor(props){
super(props);
this.state = {
data : []
}
}

getCollection(artist) {
	const url = `${baseUrl}${artist}`;
	console.log(url);
	fetch(url)
	 .then(response => response.json())
	 .then(json => {
	 	this.setState({
	 			data: json.artObjects
	 		});
	 });
}
componentDidMount(){
// get artist value from :artist param 
console.log(this.props.match.params.artist)
this.getCollection(this.props.match.params.artist);
}

// get new data when the URL changes 
componentWillReceiveProps(nextProps) {
	if(nextProps.match.params.artist !== this.props.match.params.artist) {
		this.getCollection(nextProps.match.params.artist);
	}
}
render(){

        // add state.data.length to prevent error when it's loaded first time.
        let titles;
if (this.state.data.length) {
titles = this.state.data.map(
         
(obj) => (
<Paper className="artistItem" style={style} zDepth={2} >
<a href={obj.links.web}><h2>{obj.title}</h2></a>
</Paper>
)); 
return <div>
<h2 style = {{"margin": "auto", "textAlign" : "center", "paddingBottom" : "30px", "paddingTop" : "30px"}}>A collection of {this.props.match.params.artist}</h2>
{titles}
</div>
        }
return(	
    <div>{titles}</div>
);
}
}