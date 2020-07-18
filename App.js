import React from 'react';
import MainPage from './js/MainPage'
import Page1 from './js/Page1'
import { View } from 'native-base';
import Navigations from './js/navigation/Navigations'

export default class App extends React.Component {
   render() {
      return (
        <Navigations/>
      );
   }
}