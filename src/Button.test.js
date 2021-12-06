import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MyButton from './MyButton';
import { handleTest } from './dummi';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

handleTest(MyButton)

describe('event click', () => {
  
  it("is triggered on click", () => {
    let eventHandler = jest.fn();
    let wrapper = mount(<MyButton onClick={eventHandler}/>);
    wrapper.simulate("click");
    expect(eventHandler).toBeCalled();
  });

});