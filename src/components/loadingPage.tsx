import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
} from 'react-native';

function LoadingPage() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('./assets/images/logo.jpg')}
        style={styles.image}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'black',
          paddingVertical: 20,
        }}>
        We are Beyond Banking
      </Text>
      <View style={styles.baseText}>
        <Image
          source={require('./assets/images/cbn-logo.png')}
          style={styles.smallImage}
        />
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'black',
            paddingHorizontal: 7,
          }}>
          LICENSED BY CBN AND INSURED BY
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>NDIC</Text>
          <Text style={styles.smallText}>
            Nigeria Deposit Insurance Corporation
          </Text>
          <Text style={styles.smallText}>Protecting your bank deposit</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'green',
    paddingHorizontal: 60,
  },
  baseText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  smallImage: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  smallText: {
    fontSize: 4,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoadingPage;
