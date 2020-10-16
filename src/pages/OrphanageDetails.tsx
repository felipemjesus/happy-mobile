import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text >Detalhe do orfanato</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});