import React from 'react';
import {Slide, Heading, List, ListItem} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">Конкурентность</Heading>
    <List>
      <ListItem textSize="2.2rem">Много сетевой работы</ListItem>
      <ListItem textSize="2.2rem">Большое время ожидания</ListItem>
    </List>
  </Slide>
);
