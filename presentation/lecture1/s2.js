import React from 'react';
import {Slide, Heading, Image} from 'spectacle';

export default (
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
      <Image src="/assets/langs.png" height="100%"/>
    </div>
  </Slide>
);
