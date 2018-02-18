import React from 'react';
import {Slide, Heading, Text} from 'spectacle';

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={5} caps lineHeight={1} textColor="secondary">
      Разработка веб-сервисов на Go
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      {location.search.includes('park') ? 'Технопарк' : ''}
      {location.search.includes('sphere') ? 'Техносфера' : ''}
      {location.search.includes('atom') ? 'Техноатом' : ''}
    </Text>
  </Slide>
);
