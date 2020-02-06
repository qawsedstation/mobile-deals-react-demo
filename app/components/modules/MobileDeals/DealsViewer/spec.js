import React from 'react';

import { expect } from 'chai';

import { shallow, mount } from 'enzyme';

import RootTest from 'components/root/root.test';

import deals from './mockDeals.js';

import Component from './';

function setUp(props) {
  return mount(
<RootTest><Component {...props} /></RootTest>
);
}

describe('components/modules/MobileDeals/DealsViewerUI', () => {
  it('should show the table captions', () => {
    const wrapper = setUp();
    expect(wrapper.find('tr').first().text()).to.contain('DealMinsTextsDataMonthlyTotal');
  });

  it('should show no data as nothing provided yet', () => {
    const wrapper = setUp();
    expect(wrapper.find('tr')).to.have.length(1);
  });

  it('should show 10 deals', () => {
    const wrapper = setUp(deals);
    expect(wrapper.find('tr')).to.have.length(10);
  });

  it('should contain deal details', () => {
    const wrapper = setUp(deals);
    const dealTitle = 'Medium';
    const mins = '500';
    const texts = '5000';
    const data = '1024';
    const monthlyCost = '£10';
    const totalCost = '£240';

    expect(
			wrapper.find('tr').at(3).text()).to.contain(
				dealTitle + mins + texts + data + monthlyCost + totalCost
			);
  });
});
