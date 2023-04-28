import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../assets/Food/constants/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../assets/Food/constants/consts/categories';
import foods from '../../assets/Food/constants/consts/foods';
import {useSelector, useDispatch} from 'react-redux';
import {SET_FOOD_ITEMS, ADD_CART} from '../../redux/actions';
import appReducer from '../../redux/reducers';
const FoodDashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const {userInfo, foodItems} = useSelector(state => state.appReducer);
  // console.log('USer Info to be shown', userInfo);
  const {firstname} = userInfo;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const navigateFoodHandler = () => {
    navigation.navigate('FoodStart');
  };
  const navigateCartHandler = () => {
    navigation.navigate('Cart');
  };
  const pressHandler = name => {
    // console.log('Food selected', name);
    const newCategories = foods.filter(cat => {
      return cat.name.toLowerCase().includes(name.toLowerCase());
    });
    // console.log('New Categories', newCategories);
    setFoodList(newCategories);
    console.log('ULTIMATE', newCategories);
    dispatch({type: SET_FOOD_ITEMS, payload: newCategories});
  };
  const addToCart = item => {
    // console.log('Items to be added in cart', item);
    // console.log('Food Items in store', foodItems);
    dispatch({type: ADD_CART, payload: item});

    // if (foodItems.length === 0) {
    // } else if (foodItems.length > 0) {
    //   const selItem = foodItems.filter(item => {
    //     return item.name === foodItems.name;
    //   });
    //   if (selItem.length > 0) {
    //     console.log('Item Already exists');
    //   } else {
    //     console.log('New Item to be added');
    //   }
    // }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon
          onPress={navigateFoodHandler}
          name="arrow-back-ios"
          size={28}
          color="black"
        />
        <Icon
          onPress={navigateCartHandler}
          name="shopping-cart"
          size={28}
          color="orange"
        />
      </View>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('FoodStart');
        }}
      />

      <View style={styles.profileContainer}>
        <View style={styles.nameContainer}>
          <Text style={{color: 'black', fontWeight: '700', fontSize: 30}}>
            Hello, {firstname}
          </Text>
          <Text style={{fontSize: 20}}>What do you want today</Text>
        </View>
        <Image
          style={styles.person}
          source={require('../../assets/Food/images/assets/person.png')}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <View style={styles.searchIcon}>
            <Icon name="search" size={28} />
          </View>
          <TextInput placeholder="Search any food" />
        </View>
        <View style={styles.filterIcon}>
          <Icon name="tune" size={28} color="white" />
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => pressHandler(item.name)}
                style={styles.foodCategory}>
                <Image source={item.image} style={{width: 30, height: 30}} />
                <Text style={{color: 'white', fontWeight: '600'}}>
                  {item.name}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      {foodList.length > 0 && (
        <View>
          <FlatList
            data={foodList}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Pressable style={styles.foodItemCategory}>
                  <Image
                    source={item.image}
                    style={{width: 100, height: 100}}
                  />
                  <Text style={{color: 'black', fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={{color: 'grey', fontWeight: '600'}}>
                        $ {item.price}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => {
                        addToCart(item);
                      }}
                      style={{
                        position: 'relative',
                        width: 25,
                        height: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'orange',
                        borderRadius: 50,
                      }}>
                      <Icon name="add" color="white" size={22} />
                    </Pressable>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default FoodDashboard;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
    width: '100%',
  },
  nameContainer: {
    padding: 10,
  },
  person: {
    height: 50,
    width: 50,
    marginTop: 20,
    borderRadius: 50,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'red',
    width: '100%',
    height: 30,
  },
  searchBox: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 40,
    width: '80%',
    backgroundColor: COLORS.light,
  },
  searchIcon: {
    marginTop: 5,
  },
  filterIcon: {
    width: 40,
    height: 40,
    padding: 5,
    backgroundColor: 'orange',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  foodCategory: {
    width: 100,
    padding: 20,
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 6,
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  foodItemCategory: {
    width: 150,
    height: 200,
    marginVertical: 5,
    marginHorizontal: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
  },
});
