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


    test('render listing house titel without crashing', () => {
        const description = shallow(<Description />) 
        expect(description.find('.title').exists()).toBeTruthy() 
    });
    test('render listing house titel with correct text', () => {
        const description = shallow(<Description />) 
        description.setProps({
            title: "Quis ab sint veritatis"
        });
        expect(description.find('.title').text()).toEqual("Quis ab sint veritatis")
    });

    test('render listing house location without crashing', () => {
        const description = shallow(<Description />) 
        expect(description.find('.location').exists()).toBeTruthy() 
    });

    test('render listing house location with correct text', () => {
        const description = shallow(<Description />) 
        description.setProps({
            location: "Schneidermouth"
        });
        expect(description.find('.location').text()).toEqual("Schneidermouth")
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
        expect(description.find('.host').children().length).toBe(2)
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
      expect(description.find('.hls').children().children().length).toBe(4)
    });
    test('render correct amount of bedrooms in sleeping arrangement area', () => {
      const description =  mount(<Description />) 
      var mockData = {
          detail: {bedrmnum:2}
      }
      var roomCount = mockData.detail.bedrmnum;
      // console.log('count',roomCount)
      description.setProps({
        detail: {
          "bathrmnum": 2,
          "bednum": 3,
          "bedrmnum": 2,
          "beds": ["1 queen bed", "2 single beds"],
          "guestmax": 3,
          "type": "Hotel room"
        }
      })  
      
      expect(description.find('.arrgarea').children().length).toBe(roomCount)
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
        description.find('.readmore').simulate('click')
        expect(description.state("showmoredesc")).toEqual(true)
      });

      test('doesn\'t show amenity list before click button', () => {
        const description =  mount(<Description />) 
        
        expect(description.state("showstatus")).toEqual(false)
      });

      test('show amenity list after clicking button', () => {
        const description =  mount(<Description />) 
        description.find('.btnMoreamen').simulate('click')
        expect(description.state("showstatus")).toEqual(true)
      });
      test('hide amenity list after clicking button', () => {
        const description =  mount(<Description />) 
        description.setState({
            showstatus: true
        })   
        description.find('.btnClose').simulate('click')
        expect(description.state("showstatus")).toEqual(false)
      });
      test('hide amenity list after pressing esc', () => {
        const description = shallow (<Description />)
        description.find('.poplistback').simulate('keyDown',{keyCode:27});
        expect(description.state("showstatus")).toEqual(false)
      });
      //////
      test('no slide animition before click button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('.arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        expect(degree).toEqual('0')
      });

      test('slide left after click previous button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('.arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        description.find('.btnPre').simulate('click')
        const newDegree = (parseFloat(degree)+(100/3)).toString()+'%'
        expect(description.find('.arrgarea').props('style').style.transform.split(/[()]+/)[1]).toEqual(newDegree)
      });

      test('slide right after click next button in sleeping arrangement area', () => {
        const description =  mount(<Description />) 
        const degree = description.find('.arrgarea').props('style').style.transform.split(/[()%]+/)[1]
        description.find('.btnNext').simulate('click')
        const newDegree = (parseFloat(degree)-(100/3)).toString()+'%'
        expect(description.find('.arrgarea').props('style').style.transform.split(/[()]+/)[1]).toEqual(newDegree)
      });
});