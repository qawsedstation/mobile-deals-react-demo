import React from 'react';

import { expect } from 'chai';

import { shallow, mount } from 'enzyme';

import RootTest from 'components/root/root.test';

import Component from './';

function setUp(props) {
  return mount(
<RootTest><Component {...props} /></RootTest>
);
}

describe('components/modules/MobileDeals/DealsProductNameFilterUI', () => {
  it('should show the TextField', () => {
    const wrapper = setUp();
    expect(wrapper.find('input')).to.have.length(1);
  });

});
