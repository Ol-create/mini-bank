import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, {width: 90}]}>
        <Icon name="person" size={30} color="green" />
        <Text style={{color: "black"}}>Hi Paul,</Text>
      </View>
      <View style={[styles.subContainer, {width: 140}]}>
        <Icon name="headphones" size={30} color="#000" />
        <Icon name="flip" size={30} color="#000" />
        <Icon name="notifications" size={30} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },

  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }

})