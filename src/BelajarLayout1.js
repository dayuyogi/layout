import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout1 extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
        <Text style={styles.text}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
        <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box3}>
        <View style={styles.box4}>
        <View style={styles.button}><Text> 1 </Text></View>
        <View style={styles.button}><Text> 2 </Text></View>
        <View style={styles.button}><Text> 3 </Text></View>
        <View style={styles.button}><Text> 4 </Text></View>
        </View>
        <View style={styles.box5}>
        <View style={styles.button}><Text> 5 </Text></View>
        <View style={styles.button}><Text> 6 </Text></View>
        <View style={styles.button}><Text> 7 </Text></View>
        <View style={styles.button}><Text> 8 </Text></View>
        </View>
      </View>
        <View style={styles.box6}>
        <Text style={styles.text}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
       );
      }
  }
  const styles = StyleSheet.create({
   containerMain: {
    backgroundColor: 'skyblue',
     flex: 1,
     flexDirection: 'column',
   },
  box1: {
        backgroundColor: '#0D47A1',
        flex: 1,
      },
      box2: {
        backgroundColor: '#2196F3',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
  },
  box3: {
    flex: 2,
    backgroundColor: '#BBDEFB',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  box4: {
    flex: 1,
    backgroundColor: '#4FC3F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 350,
    height: 40,
  },
  box5: {
    flex: 1,
    backgroundColor: '#4FC3F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 350,
    height: 40,
  },
  box6: {
    flex: 1,
    backgroundColor: '#0D47A1',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
      },
  text: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    padding: 25,
  },
});
