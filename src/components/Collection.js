import React ,  { Component } from 'react';
import ReactDOM from 'react-dom';

const name = "Rembrandt";
const url = `https://www.rijksmuseum.nl/api/en/collection?key=6EN25Xlf&format=json&q=${name}`;

export default class Collection extends Component {

constructor(props){
super(props);
this.state = {
data : []
}
this.handleClick = this.handleClick.bind(this);
}
componentDidMount(){
console.log(url)
fetch(url)
.then(response => response.json())
.then(json => {
this.setState({
data: json.artObjects
});
});
}

handleClick(event){
let name;

    if( event.target.className.includes('Vincent')){
name = "Vincent"
} else if ( event.target.className.includes('Vermer')) {
name = "Vermer"
} else {
name = "Rembrandt"
}
   
console.log(name);
        const url = `https://www.rijksmuseum.nl/api/en/collection?key=6EN25Xlf&format=json&q=${name}`;
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(json => {
            console.log("goh" + json.artObjects)
            this.setState({
            data: json.artObjects
            });
        
         });
    }
render(){

        // add state.data.length to prevent error when it's loaded first time.
        let titles;
if (this.state.data.length) {
titles = this.state.data.map(
         
(obj) => (
<div>
<a href={obj.links.web}><h2>{obj.title}</h2></a>
</div>
)); 
return <div>
<button onClick={this.handleClick} className="Vincent">Vincent van Gogh</button>
<button onClick={this.handleClick} className="Vermer">Vermer</button>
<button onClick={this.handleClick} className="Rembrandt">Rembrandt</button>
{titles}
</div>
        }
return(
            <div>{titles}</div>
);
}
}