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
import Lecture1 from './lecture1';

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
        {Lecture1}
      </Deck>
    );
  }
}
