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
    });
    ///
    it('render App' , ()=>{
        const app = mount(<App />);
        console.log(app.debug())
    })
});

describe('App funcationality test suite', () => {
    
   it('calls componentDidMount' , ()=>{
        const spy = jest.spyOn(App.prototype, 'componentDidMount');
        const app = shallow(<App />)
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();              
    });
   
});