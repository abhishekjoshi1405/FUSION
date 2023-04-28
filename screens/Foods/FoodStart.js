import {StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';
import React from 'react';

const FoodStart = ({navigation}) => {
  const navigateFoodHandler = () => {
    navigation.navigate('FoodHome');
  };
  const navigateCarHandler = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={{flex: 1}}>
      <Button title="Go Back" onPress={navigateCarHandler} />
      <View style={styles.foodcontainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Food/images/assets/onboardImage.png')}
        />
      </View>
      <View style={styles.foodTextContainer}>
        <Text style={styles.bold}>Delicious Food</Text>
        <Text>We help you to find best and</Text>
        <Text>delicious food</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.bar1}></View>
        <View style={styles.bar2}></View>
        <View style={styles.bar3}></View>
      </View>
      <Pressable onPress={navigateFoodHandler} style={styles.buttonContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
          }}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default FoodStart;

const styles = StyleSheet.create({
  foodcontainer: {
    paddingTop: 70,
  },
  image: {
    height: 300,
    width: '100%',
  },
  foodTextContainer: {
    marginVertical: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 50,
  },
  bar1: {
    backgroundColor: 'orange',
    width: 20,
    height: 10,
    borderRadius: 25,
    borderColor: 'black',
  },
  bar2: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
    width: 10,
    height: 10,
    borderRadius: 55,
    borderColor: 'black',
  },
  bar3: {
    backgroundColor: 'orange',
    width: 10,
    height: 10,
    borderRadius: 55,
    borderColor: 'black',
  },
  buttonContainer: {
    height: 50,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 50,
  },
});
