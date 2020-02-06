import React from 'react';

import { expect } from 'chai';

import { shallow, mount } from 'enzyme';

import RootTest from 'components/root/root.test';
import Slider from 'material-ui/Slider';

import Component from './';

function setUp(props) {
  return mount(
<RootTest><Component getMobileDealsRequest={() => {}} /></RootTest>
);
}

describe('components/modules/MobileDeals/DealsFilterUI', () => {
  it('should show the 3 Filter Sliders', () => {
    const wrapper = setUp();
    expect(wrapper.find(Slider)).to.have.length(3);
  });

  it('should show the default values of Filter Sliders', () => {
    const wrapper = setUp();

    expect(wrapper.find('#mins').text()).to.have.contain('500');
    expect(wrapper.find('#texts').text()).to.have.contain('5000');
    expect(wrapper.find('#data').text()).to.have.contain('1024');

  });

});
