import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({label}) => {
  return (
    
    <Pressable>
    
      <View style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
      </View>
    </Pressable>

  
  )
}

export default CustomButton

const styles = StyleSheet.create({
   
      button:{
        width:'100%',
        marginTop:10,
        height:40,
        padding:5,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
      },
      buttonText:{
        color:'white',
        justifyContent:'center',
        alignItems:'center'
      },
})