import React from 'react'
import { View, StatusBar } from 'react-native'

export default function Practice() {
  return (
    <View style={{backgroundColor: 'blue', flex: 7, flexDirection: 'column'}}>
      <View style={{backgroundColor: 'green', height: 80}}>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
        }}></View>
    </View>
  );
}
