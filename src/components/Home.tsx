import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!isVisible);
  };
  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <View style={[styles.subContainer, {width: 90}]}>
          <Icon name="person" size={30} color="green" />
          <Text style={{color: 'black'}}>Hi, Paul</Text>
        </View>
        <View style={[styles.subContainer, {width: 140}]}>
          <Icon name="headset-mic" size={30} color="#000" />
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
              <TouchableOpacity
                onPress={toggleVisibility}
                activeOpacity={0.1}
                style={{padding: 3, borderRadius: 2}}>
                {isVisible ? (
                  <Icon name="visibility" size={15} color="white" />
                ) : (
                  <Icon name="visibility-off" size={15} color="white" />
                )}
              </TouchableOpacity>
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
            <View>
              {isVisible ? (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Icon name="currency-pound" color="white" size={15} />
                  <Text style={{color: 'white', fontSize: 30}}>10,000.00</Text>
                </View>
              ) : (
                <Text style={{fontSize: 30, color: 'white', marginLeft: 10}}>
                  ****
                </Text>
              )}
            </View>
            <TouchableOpacity style={styles.addMoney} activeOpacity={0.7}>
              <View>
                <Text style={{color: 'green', textAlign: 'center'}}>
                  + Add Money
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* To Opay */}
      </View>
      <View style={styles.toPay}>
        <View style={styles.flexVertical}>
          <Icon style={styles.iconStyle} name="account-box" size={20} />
          <Text style={[styles.iconTextBold, styles.iconTextColor]}>
            To Opay
          </Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon style={styles.iconStyle} name="account-balance" size={20} />
          <Text style={[styles.iconTextBold, styles.iconTextColor]}>
            To Bank
          </Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon style={styles.iconStyle} name="money" size={20} />
          <Text style={[styles.iconTextBold, styles.iconTextColor]}>
            Withdraw
          </Text>
        </View>
      </View>
      {/* Buy Airtime */}
      <View style={styles.airtime}>
        <View style={styles.flexHonrizontal}>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="account-box"
              size={20}
            />
            <Text>To Opay</Text>
          </View>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="account-balance"
              size={20}
            />
            <Text>To Bank</Text>
          </View>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="money"
              size={20}
            />
            <Text>Withdraw</Text>
          </View>
        </View>
        <View style={styles.flexHonrizontal}>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="account-box"
              size={20}
            />
            <Text>To Opay</Text>
          </View>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="account-balance"
              size={20}
            />
            <Text>To Bank</Text>
          </View>
          <View style={styles.flexVertical}>
            <Icon
              style={[styles.iconStyle, {borderRadius: 20}]}
              name="money"
              size={20}
            />
            <Text>Withdraw</Text>
          </View>
        </View>
      </View>
      {/* Advert: Get your Vouchers */}
      <View style={styles.voucher}></View>
      {/* Footer */}
      <View style={[styles.footer]}>
        <View style={styles.flexVertical}>
          <Icon
            style={[styles.footerIcon, {color: 'green'}]}
            name="account-box"
            size={20}
          />
          <Text
            style={[
              styles.footerIconText,
              {color: 'green', fontWeight: 'bold'},
            ]}>
            Home
          </Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon name="stars" size={20} />
          <Text style={styles.footerIconText}>Rewards</Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon name="credit-score" size={20} />
          <Text style={styles.footerIconText}>Finance</Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon name="credit-card" size={20} />
          <Text style={styles.footerIconText}>Cards</Text>
        </View>
        <View style={styles.flexVertical}>
          <Icon name="account-circle" size={20} />
          <Text style={styles.footerIconText}>Me</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {flex: 1},
  addMoney: {
    backgroundColor: 'white',
    color: 'green',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 110,
    borderRadius: 20,
  },
  container: {
    marginHorizontal: 12,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucher: {
    height: 100,
    marginHorizontal: 12,
    borderRadius: 12,
    backgroundColor: 'transparent',
    // backgroundImage: 'linear-gradient(180deg, light-green, light-green, light-yellow)',
  },
  balance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
    color: 'black',
  },
  toPay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingVertical: 20,
    backgroundColor: '#ffffef',
    elevation: 30,
    marginHorizontal: 12,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: 'white',
  },
  airtime: {
    height: 166,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
    backgroundColor: '#ffffef',
    paddingVertical: 12,
    elevation: 30,
    marginHorizontal: 12,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: 'white',
  },
  flexHonrizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  flexVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconStyle: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    color: 'green',
  },
  iconTextBold: {
    fontWeight: 'bold',
  },
  iconTextColor: {
    color: 'black',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#ffffef',
    elevation: 40,
    borderWidth: 4,
    borderColor: 'white',
  },
  footerIcon: {
    color: 'grey',
  },
  footerIconText: {
    fontSize: 12,
    color: 'grey',
  },
});
