import React from 'react';
import {Slide, Heading, List, ListItem} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">Ключевые идеи</Heading>
    <List>
      <ListItem>
        Простота
      </ListItem>
      <ListItem>
        Читабельность
      </ListItem>
      <ListItem>
        Конкурентность
      </ListItem>
    </List>
  </Slide>
);
