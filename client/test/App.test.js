import React from 'react';
import App from '../component/App.jsx'
import { shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
require('babel-core/register');
require('babel-polyfill');

configure({ adapter: new Adapter() });

describe('App basic render test suite', () => {
    it('render App' , ()=>{
        const app = shallow(<App />);
        expect(app.exists()).toBe(true);
    })
    it('snapshots', async()=>{
        const app = shallow(<App />);
        app.setState({
            title: "Quis ab sint veritatis",
            location: "Schneidermouth",
            host: {
                "name":"Hardy",
                "pic":"http://lorempixel.com/640/480"
            },
            detail: {
                "type":"Hotel room",
                "bedrmnum":1,
                "bathrmnum":1,
                "guestmax":3,
                "bednum":[ "1 single bed" ]    
            },
            highlights: {
                "Private room in hostel":"3 guests\t1 room\t1 bed\t1 bath",
                "Self check-in":"Rerum modi nihil est et.",
                "Hardy is a Superhost":"Iure illo possimus impedit blanditiis ullam laborum omnis.",
                "Sparkling clean":"In necessitatibus id."
            },
            desc: {
                "General":"General description.",
                "Interation with guests":"Description paragraph 2",
                "License or registartion number":"STR-3921741"
            },
            amenity:{
                "Basic":{
                  "Hot water":null,
                  "Dryer":"In the building, free or for a fee",
                  "Cable TV":null,
                  "Laptop friendly workspace":"A table or desk with space for a laptop and a chair that’s comfortable to work in",
                  "Washer":"In the building, free or for a fee",
                  "Hotwater":null,
                  "Essentials":"Towels, bed sheets, soap, and toilet paper"
                  },
                "Not included":{
                  "TV":null,
                  "Hair dryer":null,
                  "Iron":null,
                  "Kitchen":null,
                  "Air conditioning":null,
                  "Wifi":null,
                  "Free parking on premises":null
                  },
               },
        })       
        expect(toJson(app)).toMatchSnapshot()
    })
    it('render child div' , ()=>{
        const app = shallow(<App />);
        expect(app.exists('#main')).toBeTruthy();
    })
});

describe('App funcationality test suite', () => {
    it('GET request' , ()=>{
        const app = shallow(<App />);
        beforeEach(()=>{
            if(app.state('title')){
                console.log('waiting done');
                done()
            }
        },2000)
        afterEach(()=>{
            expect(app.state('title')).toEqual('?????');

        })
      
    })
   
});