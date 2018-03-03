import React from 'react';
import {Slide, Image, Text} from 'spectacle';

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      Что будет на курсе?
    </Text>
    <Image src="/assets/broken.png" height="100%"/>
  </Slide>
);
