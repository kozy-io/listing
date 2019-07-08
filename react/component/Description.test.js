import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<Description />);    
    });
});