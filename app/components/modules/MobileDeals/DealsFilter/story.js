import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryRoot from 'components/root/root.story';

import Container from 'redux/modules/MobileDeals/DealsFilter/container';

import Component from '.';

storiesOf('MobileDeals/DealsFilter', module)

  .addDecorator(getStory => <StoryRoot>{getStory()}</StoryRoot>)

  .add('Fitlers viewUI', () => {
    return (<Component
      getMobileDealsRequest={action('Update Results Action')}
      setMinutesFilter={action('Mins Filter changed')}
      setTextsFilter={action('Texts Filter changed')}
      setDataFilter={action('Data Filter changed')}
    />);
  })

  .add('Fitlers Comtainer', () => {
    return (<Container />);
  })
  ;
