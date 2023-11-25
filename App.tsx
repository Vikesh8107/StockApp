import React from 'react';
import {StyleSheet} from 'react-native';
import StockPage from './screens/stockpage';
const App = () => {
  return (
    <StockPage />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
});

export default App;
