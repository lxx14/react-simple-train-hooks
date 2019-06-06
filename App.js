import React, { useState } from 'react';
import Toggle from './src/components/Toggle';
import SimpleForm from './src/components/SimpleForm';
import PageWithFetch from './src/components/PageWithFetch';

const App = () => {

  return (
    <div>
      <Toggle />
      <SimpleForm />
      <PageWithFetch />
    </div>
  );
}

export default App;