import React from 'react';
import Amenity from '../component/Amenity.jsx'
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
require('babel-core/register');
require('babel-polyfill');

configure({ adapter: new Adapter() });

describe('Amenity test suite', () => {
    it('render App' , ()=>{
        const amenityWrapper = shallow(<Amenity />);
        amenityWrapper.setProps({
            amenity: {
                Basic:{
                    'Air conditioning': null,
                    'Cable TV': null,
                    'Essentials': null,
                    'Hair dryer': null
                }
            }
        });
        // console.log(amenityWrapper.debug())
        expect(amenityWrapper.exists()).toBe(true);
    })
    it('snapshots', async()=>{
        const amenityWrapper = shallow(<Amenity />);
        amenityWrapper.setProps({
            amenity: {
                Basic:{
                    'Air conditioning': null,
                    'Cable TV': null,
                    'Essentials': null,
                    'Hair dryer': null
                }
            }
        });
        expect(toJson(amenityWrapper)).toMatchSnapshot()
    })
})