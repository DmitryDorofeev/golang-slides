import React from 'react';
import {Slide, Image, Text} from 'spectacle';

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      8 лекций
    </Text>
    <Image src="/assets/lectures.jpg" height="200px"/>
  </Slide>
);
