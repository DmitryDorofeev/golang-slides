import React from 'react';
import {Slide, Heading, Text, CodePane, Code} from 'spectacle';

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={5} textColor="secondary">Установка</Heading>
    <Heading size={6} textColor="secondary">Windows</Heading>
    <Code>Далее - Далее - Далее - Готово</Code>
    <Heading size={6} textColor="secondary">macOS</Heading>
    <Code>brew install go</Code>
    <Heading size={6} textColor="secondary">Linux</Heading>
    <CodePane source={`
      wget --no-check-certificate https://storage.googleapis.com/golang/go1.9.linux-amd64.tar.gz
      tar -C /usr/local -xzf go1.9.linux-amd64.tar.gz
      echo 'export PATH=$PATH:/usr/local/go/bin
      export GOPATH=$HOME/GO
      export PATH=$PATH:$GOPATH/bin' >> /etc/profile
      `}/>
  </Slide>
);
