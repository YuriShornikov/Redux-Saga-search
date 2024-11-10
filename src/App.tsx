import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Search } from './components/Search';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search Skills</h1>
      <Search />
    </Provider>
  );
};

export default App;
