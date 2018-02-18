import React from 'react';
import {Slide, Heading, List, ListItem} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">Простота</Heading>
    <List>
      <ListItem textSize="2.2rem">Код читается больше чем пишется</ListItem>
      <ListItem textSize="2.2rem">Код часто живёт дольше чем мы думаем</ListItem>
      <ListItem textSize="2.2rem">Если вы занимаетесь поддержкой кода – большая вероятность что его автор кто-то другой</ListItem>
      <ListItem textSize="2.2rem">Сложность языка: 85 страниц спецификации + 55 страниц основного тайного знания</ListItem>
    </List>
    <List ordered>
      <ListItem textSize="2rem">C++ - 1300 страниц</ListItem>
      <ListItem textSize="2rem">Java – 780 страниц</ListItem>
      <ListItem textSize="2rem">C – 550 страниц</ListItem>
      <ListItem textSize="2rem">ECMA-262 – 580 страниц</ListItem>
      <ListItem textSize="2rem">Scala – 191 страница</ListItem>
    </List>
  </Slide>
);
