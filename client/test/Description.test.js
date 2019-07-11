import React from 'react';
import Description from '../component/Description';
import { shallow, configure ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
require('babel-core/register');
require('babel-polyfill');

describe('Description test suite', () => {
    
    
    test('render Description', () => {
        const description = shallow(<Description />) 
        // console.log(description.debug()) 
    });
    test('render listing house titel in Description', () => {
        const description = shallow(<Description />) 
        expect(description.find('#title').exists()).toBeTruthy() 
    });
    test('render listing house location in Description', () => {
        const description = shallow(<Description />) 
        expect(description.find('#location').exists()).toBeTruthy() 
    });
    test('snapshot', async() => {     
        const description = mount(<Description />) 
        expect(toJson(description)).toMatchSnapshot();
    });
    test(' host has 2 children ', () => {
        const description =  mount(<Description />) 
        description.setProps({
            // title: "Quis ab sint veritatis",
            // location: "Schneidermouth",
            host: {
                "name":"Hardy",
                "pic":"http://lorempixel.com/640/480"
            },
            // detail: {
            //     "type":"Hotel room","bedrmnum":1,"bathrmnum":1,"guestmax":3,"bednum":1        
            // },
            // highlights: {
            //     "Private room in hostel":"3 guests\t1 room\t1 bed\t1 bath",
            //     "Self check-in":"Rerum modi nihil est et.",
            //     "Hardy is a Superhost":"Iure illo possimus impedit blanditiis ullam laborum omnis.",
            //     "Sparkling clean":"In necessitatibus id."
            // },
            // desc: {
            //     "General":"General description.",
            //     "Interation with guests":"Description paragraph 2",
            //     "License or registartion number":"STR-3921741"
            // }
        })
        console.log('===',description.debug());
        expect(description.find('#host').children().length).toBe(2)
      })
});