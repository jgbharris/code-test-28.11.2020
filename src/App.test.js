import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
  it('renders input components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("integer-input"));
  });
});

describe('<App />', () => {
  it('renders trades', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("trades"));
  });
});

describe('<App />', () => {
  it('renders filtered trades', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("trades"));
  });
});



