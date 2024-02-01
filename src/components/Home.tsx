import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.subContainer, {width: 90}]}>
          <Icon name="person" size={30} color="green" />
          <Text style={{color: 'black'}}>Hi, Paul</Text>
        </View>
        <View style={[styles.subContainer, {width: 140}]}>
          <Icon name="headphones" size={30} color="#000" />
          <Icon name="flip" size={30} color="#000" />
          <Icon name="notifications" size={30} color="#000" />
        </View>
      </View>
      {/* Account Balance and others */}
      <View style={{width: '100%', marginTop: 20}}>
        <View
          style={{
            backgroundColor: 'green',
            borderRadius: 20,
            width: '94%',
            height: 115,
            marginHorizontal: '3%',
          }}>
          <View style={styles.balance}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="verified-user" size={13} color="white" />
              <Text style={{paddingHorizontal: 4, color: 'white'}}>
                Available Balance
              </Text>
              <Icon name="visibility" size={15} color="white" />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', paddingRight: 3}}>
                Transaction History
              </Text>
              <Icon name="chevron-right" color="white" size={20} />
            </View>
          </View>
          <View style={styles.balance}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: "baseline"}}>
              <Icon name="currency-pound" color="white" size={15}/>
              <Text style={{color: 'white', fontSize: 30}}>10,000.00</Text>
            </View>
            <TouchableOpacity style={styles.addMoney} activeOpacity={0.9}>
              <View>
                <Text style={{color: 'green', textAlign: 'center'}}>
                  + Add Money
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addMoney: {
    backgroundColor: "white",
    color: "green",
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 110,
    borderRadius: 20
  },
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
  },
  balance: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 15,
    color: "black",
  }

})