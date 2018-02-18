import React from 'react';
import {Slide, List, ListItem, Heading, Cite} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">История Go</Heading>
    <List>
      <ListItem>
          2007 - Начало разработки<br/>
            <Cite>Кен Томпсон ( UNIX, UTF-8 )</Cite>
            <Cite>Роб Пайк ( UTF-8, Plan 9, Inferno )</Cite>
            <Cite>Роберт Гризмер (Java HotSpot, Sawzall, распределённые системы Google )</Cite>
      </ListItem>
      <ListItem>
        2009 – Первая доступная версия
      </ListItem>
      <ListItem>
        2012 – Версия 1.0
      </ListItem>
      <ListItem>
        2014 – Первый сервис в Почте@Mail.ru
      </ListItem>
      <ListItem>
        2016 – Первое API в Почте@Mail.ru, BeepCar
      </ListItem>
    </List>
  </Slide>
);
