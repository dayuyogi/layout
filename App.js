import React  from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
//import HitungVolumeBalok from './src/HitungVolumeBalok';
//import Header from './src/Header';
//import Footer from './src/footer';
//import sales from './src/sales';
//import layout from './src/layout';
//import BelajarLayout from './src/BelajarLayout';
import BelajarLayout1 from './src/BelajarLayout1';
//import HitungLuasSegitiga from './src/HitungLuasSegitiga';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
      <BelajarLayout1 />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#0091EA',
  },
});
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
