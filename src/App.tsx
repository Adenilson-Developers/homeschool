import React from 'react';

import { createGlobalStyle } from 'styled-components';
import ContactsAlunos from './containers/ContactsAlunos';

function App() {
  return (
    <>
     <ContactsAlunos />

     <Styles />
     
     
    </>
  );
};

const Styles = createGlobalStyle`
html{
  font-size: 16px;
  font-family: sans-serif;
}

html, body, #root{
  height: 100%;
}

body{
  background: #FFFFE0;
  margin: 0;
}
`;

export default App;
