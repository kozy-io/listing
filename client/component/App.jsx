import React from 'react';
const faker = require('faker');
import $ from 'jquery';
import Description from './Description';
import styles from './style/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
        var num = faker.random.number({min:1, max:100});
        this.getDescInfo(num);
        this.getAmenInfo(num);
    }

    getDescInfo(num){
        $.ajax({
            method:'GET',
            url: '/listing/desc/' + num,
            contentType: 'application/json',
            success: (desc)=>{
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

    getAmenInfo(num){
        $.ajax({
            method:'GET',
            url: '/listing/amenity/' + num,
            contentType: 'application/json',
            success: (amenity)=>{
                this.setState({
                    amenity: amenity.amenities
                })
            }
        })
    }
    
    render() {
        return (
            <div className={styles.main}>
                <Description  
                title={this.state.title} location={this.state.location} host={this.state.host} highlights={this.state.highlights} desc={this.state.desc} detail={this.state.detail} amenity={this.state.amenity}
                />
            </div>
        )
    }
}
    
export default App;