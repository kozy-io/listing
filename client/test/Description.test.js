import React from 'react';
import Description from '../component/Description';
import { shallow, configure ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


configure({ adapter: new Adapter() });
require('babel-core/register');
require('babel-polyfill');

describe('Description basic rendering test suite', () => {
    
    test('render Description', () => {
        const description = shallow(<Description />) 
        // console.log(description.debug()) 
    });

    test('snapshot', async() => {     
        const description = shallow(<Description />)
        description.setProps({
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
            }
        })       
        expect(toJson(description)).toMatchSnapshot();
    });

    test('render listing house titel without crashing', () => {
        const description = shallow(<Description />) 
        expect(description.find('#title').exists()).toBeTruthy() 
    });
    test('render listing house titel with correct text', () => {
        const description = shallow(<Description />) 
        description.setProps({
            title: "Quis ab sint veritatis"
        });
        expect(description.find('#title').text()).toEqual("Quis ab sint veritatis")
    });

    test('render listing house location without crashing', () => {
        const description = shallow(<Description />) 
        expect(description.find('#location').exists()).toBeTruthy() 
    });

    test('render listing house location with correct text', () => {
        const description = shallow(<Description />) 
        description.setProps({
            location: "Schneidermouth"
        });
        expect(description.find('#location').text()).toEqual("Schneidermouth")
    });

    test('host div has 2 children ', () => {
        const description =  mount(<Description />) 
        description.setProps({
            host: {
                "name":"Hardy",
                "pic":"http://lorempixel.com/640/480"
            }
        })       
        // console.log('===',description.debug());
        expect(description.find('#host').children().length).toBe(2)
      });

      test(' highlight div has 4 children ', () => {
        const description =  mount(<Description />) 
        description.setProps({          
            highlights: {
                "Private room in hostel":"3 guests\t1 room\t1 bed\t1 bath",
                "Self check-in":"Rerum modi nihil est et.",
                "Hardy is a Superhost":"Iure illo possimus impedit blanditiis ullam laborum omnis.",
                "Sparkling clean":"In necessitatibus id."
            },         
        })       
        expect(description.find('#hls').children().children().length).toBe(4)
      });
      test('render correct amount of bedrooms in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        var mockData = {
            detail: {"bedrmnum":2}
        }
        var roomCount = mockData.detail.bedrmnum;
        console.log('count',roomCount)
        description.setProps({
            detail: {
              "bedrmnum":2,
              "bednum" :[ "1 queen bed", "1 king bed"]
            },
        })  
        console.log(description.debug())
        expect(description.find('#arrgarea').children().length).toBe(roomCount)
      });
});
describe('Description animation test suite', () => {

      test('show general description area before click button', () => {
        const description =  mount(<Description />) 
        description.setProps({           
            desc: {
                "General":"General description.",
                "Interation with guests":"Description paragraph 2",
                "License or registartion number":"STR-3921741"
            }          
        })      
        expect(description.state("showmoredesc")).toEqual(false)
      });

      test('show more description area after click button', () => {
        const description =  mount(<Description />) 
        description.setProps({          
            desc: {
                "General":"General description.",
                "Interation with guests":"Description paragraph 2",
                "License or registartion number":"STR-3921741"
            }         
        })
        description.find('#readmore').simulate('click')
        expect(description.state("showmoredesc")).toEqual(true)
      });

      test('doesn\'t show amenity list before click button', () => {
        const description =  mount(<Description />) 
        
        expect(description.state("showstatus")).toEqual(false)
      });

      test('show amenity list after click button', () => {
        const description =  mount(<Description />) 
        description.find('#btn-moreamen').simulate('click')
        expect(description.state("showstatus")).toEqual(true)
      });
      test('show amenity list after click button', () => {
        const description =  mount(<Description />) 
        description.setState({
            showstatus: true
        })   
        description.find('#btn-close').simulate('click')
        expect(description.state("showstatus")).toEqual(false)
      });

      //////
      test('no slide animition before click button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('#arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        expect(degree).toEqual('0')
      });

      test('slide left after click previous button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('#arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        description.find('#btn-pre').simulate('click')
        const newDegree = (parseFloat(degree)+(100/3)).toString()+'%'
        expect(description.find('#arrgarea').props('style').style.transform.split(/[()]+/)[1]).toEqual(newDegree)
      });

      test('slide right after click next button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('#arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        description.find('#btn-next').simulate('click')
        const newDegree = (parseFloat(degree)-(100/3)).toString()+'%'
        expect(description.find('#arrgarea').props('style').style.transform.split(/[()]+/)[1]).toEqual(newDegree)
      });
});