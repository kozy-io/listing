import React from 'react';
import App from '../component/App.jsx'
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
require('babel-core/register');
require('babel-polyfill');

configure({ adapter: new Adapter() });

describe('App test suite', () => {
    it('render App' , ()=>{
        const app = shallow(<App />);
        expect(app.exists()).toBe(true);
    })
    it('snapshots', async()=>{
        const app = shallow(<App />);
        expect(toJson(app)).toMatchSnapshot()
    })
    it('render child div' , ()=>{
        const app = shallow(<App />);
        expect(app.exists('#main')).toBeTruthy();
    })
});