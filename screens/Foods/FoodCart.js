import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FoodCart = ({navigation}) => {
  const {cartItems, totalPrice} = useSelector(state => state.appReducer);
  console.log('Cart Items', cartItems);
  const navigateFoodHandler = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.container}>
      <Icon
        onPress={navigateFoodHandler}
        name="arrow-back-ios"
        size={28}
        color="black"
      />
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <View>
                  <Text style={{color: 'white', fontFamily: '700'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'white', fontFamily: '700'}}>
                    ${item.price}
                  </Text>
                </View>
                <Text style={{color: 'white', fontFamily: '700'}}>
                  {item.quantity}
                </Text>
              </View>
            );
          }}
        />
      )}
      <View
        style={{
          width: '90%',
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
          padding: 20,
          borderRadius: 20,
          backgroundColor: '#ccc',
        }}>
        <Text>Total Price</Text>
        <Text>{totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default FoodCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 4,
    backgroundColor: 'green',
  },
});
