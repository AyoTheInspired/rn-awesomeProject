import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Food({ name }) {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default Food;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'green',
  },

  text: {
    color: 'red',
  },
});
