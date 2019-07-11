import React from 'react';
const faker = require('faker');
import $ from 'jquery';
import Description from './Description';


var num = faker.random.number({min:1, max:100});
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: num,
            title: '',
            location: '',
            host: {},
            highlights: {},
            desc: {},
            detail: {},
            amenity: {},
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
        $.ajax({
            method:'GET',
            url: '/listing/amenity/' + this.state.id,
            contentType: 'application/json',
            success: (amenity)=>{
                // console.log('amenity',amenity)
                this.setState({
                    amenity: amenity.amenities
                })
                
            }
        })
    }
    render() {
        // console.log('id',this.state)
        return (
            <div id='main'>
                <Description  title={this.state.title} location={this.state.location} host={this.state.host} highlights={this.state.highlights} desc={this.state.desc} detail={this.state.detail} amenity={this.state.amenity}/>
            </div>
        )
    }
}
    
export default App;