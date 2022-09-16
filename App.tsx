import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Text>This is feed screen</Text>
    </Provider>
  );
};

export default App;

