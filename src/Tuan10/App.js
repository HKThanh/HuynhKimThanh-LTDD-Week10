import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './Screens/TodoApp';
import TodoApp2 from './Screens/TodoApp(2)';
import TodoApp3 from './Screens/TodoApp(3)';
import store from './store';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

export default function App() {
  return ( 
    // <Provider store={store}>
      // {/* <TodoApp /> */}
      // {/* <TodoApp2 /> */}
    // {/* </Provider> */}
    <RecoilRoot>
      <TodoApp3 />
    </RecoilRoot>
  )
}