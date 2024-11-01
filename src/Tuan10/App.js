import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './Screens/TodoApp';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return ( 
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}