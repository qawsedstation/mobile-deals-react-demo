import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryRoot from 'components/root/root.story';

import Component from './index';

storiesOf('Pages/MobileDealsPage', module)

  .addDecorator(getStory => <StoryRoot>{getStory()}</StoryRoot>)

  .add('Show Deals', () => {
    return <Component />;
  })
  ;
