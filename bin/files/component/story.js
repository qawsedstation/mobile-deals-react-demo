import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryRoot from 'components/root/root.story';

import Component from './index';


storiesOf('NewComponent', module)

  .addDecorator(getStory => <StoryRoot>{getStory()}</StoryRoot>)

  .add('default view', () => {
    return <Component />;
  })

  .add('with custom name', () => {
    return <Component name="Custom name" />;
  })

  ;
