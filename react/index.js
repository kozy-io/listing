import React from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import $ from 'jquery';
import Description from './component/Description';


var num = faker.random.number({min:1, max:100});
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: num,
            title: null,
            location: null,
            host: null,
            highlights: null,
            desc: null,
            detail: null
        }
    }
    componentDidMount(){
        $.ajax({
            method:'GET',
            url: '/listing/desc/' + this.state.id,
            contentType: 'application/json',
            success: (desc)=>{
                // console.log(desc)
                this.setState({
                    title: desc.title,
                    location: desc.location,
                    host: desc.host,
                    highlights: desc.highlights,
                    desc: desc.desc,
                    detail: desc.detail    
                })
                
            }
        })
    }
    render() {
        // console.log('id',this.state)
        return (
            <Description  title={this.state.title} location={this.state.location} host={this.state.host} highlights={this.state.highlights} desc={this.state.desc} detail={this.state.detail} />
        )
    }
}
    
export default App;

ReactDOM.render(
   <App />, document.getElementById('app')
)