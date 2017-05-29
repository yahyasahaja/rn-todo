import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Home from '../Home';
import utils from '../../utils';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: utils.statusBarHeight,
  },
});