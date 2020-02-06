import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryRoot from 'components/root/root.story';

import Component from './index';

storiesOf('MobileDeals/DealsProductNameFilterUI', module)

  .addDecorator(getStory => <StoryRoot>{getStory()}</StoryRoot>)

  .add('Triger action on change TextField', () => {
    return <Component dealsProductNameFilter={action('Filter')} />;
  })
  ;
