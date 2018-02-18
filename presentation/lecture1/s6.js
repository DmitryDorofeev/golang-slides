import React from 'react';
import {Slide, Heading, List, ListItem} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">Читабельность</Heading>
    <List>
      <ListItem textSize="2.2rem">Жёстко зафиксированный стиль кода</ListItem>
      <ListItem textSize="2.2rem">Инструмент для автоматического форматирования</ListItem>
      <ListItem textSize="2.2rem">Мало магии и синтаксического сахара</ListItem>
    </List>
  </Slide>
);
