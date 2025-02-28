import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style= {styles.textColor} >Hello, world!</Text>
    </View>
  );
};

// React Native style
const styles =  StyleSheet.create({
  textColor:{
    color: 'white',

  }
});
export default HelloWorldApp;