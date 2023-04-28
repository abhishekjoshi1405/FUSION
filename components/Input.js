import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({label, password, icon, ...props}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={hidePassword}
          style={{color: 'white', marginLeft: 30}}
          {...props}
        />
        {password && (
          <View style={{marginRight: 10}}>
            <Icon
              onPress={togglePassword}
              name="eye-outline"
              size={20}
              color="white"
            />
          </View>
        )}
      </View>
      <Text style={{color: 'red', marginTop: 10}}>{props.error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 24,
  },
  inputContainer: {
    marginTop: 10,
    borderRadius: 26,
    width: 345,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#343347',
  },
  label: {
    color: 'black',
    marginHorizontal: 25,
  },
});
