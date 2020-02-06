import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryRoot from 'components/root/root.story';
import Component from './index';
import deals from './mockDeals.js';

storiesOf('MobileDeals/DealsViewerUI', module)

  .addDecorator(getStory => <StoryRoot>{getStory()}</StoryRoot>)

  .add('Load basic Deals', () => {
    return <Component deals={deals.deals} />;
  })
  .add('Load Deals with filter word "Me"', () => {
    return <Component deals={deals.deals} dealsProductName="Me" />;
  })
;
