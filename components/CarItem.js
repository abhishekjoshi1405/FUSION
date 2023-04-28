import { StyleSheet, Text, View,ImageBackground,Dimensions } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
  return (
    
    <View  >
    <ImageBackground  style={styles.carContainer} source={image} />

   <View style={styles.textContainer}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.price}>{tagline}</Text>
    </View>
    <View style={styles.buttonContainer}>
        <CustomButton label="Custom Order" />
        <CustomButton label="Existing Inventory" />
    </View> 
    </View>
    
  )
}

export default CarItem

const styles = StyleSheet.create({
    container:{
        // height:'100%',
        // paddingTop:50,
    //    justifyContent:'flex-start',
    //    alignItems:'center'
      },
    carContainer:{
        // position:'absolute',
        width:'100%',
        height: Dimensions.get('window').height,
      },
      text:{
        fontSize:40,
        fontWeight:'bold'
      },
      price:{
        fontSize:20
      },
      textContainer:{
        position:'absolute',
        top:50,
        alignItems:'center',
        width:'100%',
      },

      buttonContainer:{
        position:'absolute',
        alignSelf:'center',
        bottom:50,
        width:'90%',
      },
})