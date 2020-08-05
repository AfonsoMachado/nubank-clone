import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    {/* definindo cor padrão da status bar */}
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Routes />
  </>
);

export default App;
