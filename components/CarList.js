import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import cars from '../assets/cars';
import CarItem from './CarItem';
const CarList = ({navigation}) => {
  const navigateHandler = () => {
    navigation.navigate('FoodStart');
  };
  return (
    <View>
      <Button onPress={navigateHandler} title="Click To Proceed" />
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarList;

const styles = StyleSheet.create({});
