import React from 'react';
import {Slide, Image, Text} from 'spectacle';

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      8 дз
    </Text>
    <Image src="/assets/homework.gif" height="200px"/>
  </Slide>
);
