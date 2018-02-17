import React from "react";
import styled from 'styled-components';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Slide,
  Text,
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
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
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">Зачем нужен ещё один язык программирования?</Heading>
          <div style={{display: 'flex'}}>
            <div style={{flex: '1 0 300px', textAlign: 'left', marginRight: 10}}>
              1972 – C<br/>
              1980 – C++<br/>
              1987 – Perl<br/>
              1991 – Python<br/>
              1993 – Ruby<br/>
              1993 – Lua<br/>
              1995 – PHP<br/>
              1995 – JavaScript<br/>
              2001 – C#<br/>
              2009 – Go<br/>
              2010 – Rust<br/>
              2014 - Swift<br/>
            </div>
            <Image src="/assets/langs.png"/>
          </div>
        </Slide>
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
      </Deck>
    );
  }
}
