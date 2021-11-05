import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ColorBox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
}

export default ColorBox;

const styles = StyleSheet.create({
  primary: {
    color: 'black',
  },

  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
