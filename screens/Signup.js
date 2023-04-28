import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {useDispatch} from 'react-redux';
import {SET_USER_INFO} from '../redux/actions';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
  });
  const [error, setError] = useState({});
  const handleInput = (value, field) => {
    setInput(prevState => ({...prevState, [field]: value}));
  };
  const handleSubmit = () => {
    console.log('Form value is', input);
    const valid = true;
    if (!input.firstname) {
      handleError('Please enter your first name', 'firstname');
    }
    if (!input.lastname) {
      handleError('Please enter your lastname', 'lastname');
    }
    // if(!input.email)
    // {
    //     handleError('Please enter your email','email')
    // }
    // if(!input.phonenumber)
    // {
    //     handleError('Please enter your phonenumber','phonenumber')
    // }
    // if(!input.password)
    // {
    //     handleError('Please enter your password','password')
    // }
    // if(!input.confirmpassword)
    // {
    //     handleError('Please confirm your password','confirmpassword')
    // }
    if (input.firstname && input.lastname) {
      dispatch({type: SET_USER_INFO, payload: input});
      navigation.navigate('Profile');
    }
  };
  const handleError = (value, field) => {
    setError(prevState => ({...prevState, [field]: value}));
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff', height: '100%', marginBottom: 30}}>
        <View style={{marginHorizontal: 35, marginTop: 26}}>
          <Text style={{color: 'grey', fontSize: 26, fontWeight: 600}}>
            Complete your signup
          </Text>
          <Text style={{color: '#A3A3AD', fontSize: 18}}>
            Please enter the following details
          </Text>
        </View>
        <Input
          label="First Name"
          icon=""
          value={input.firstname}
          error={error.firstname}
          onChangeText={text => handleInput(text, 'firstname')}
          onFocus={() => handleError(null, 'firstname')}
        />
        <Input
          label="Last Name"
          icon=""
          value={input.lastname}
          error={error.lastname}
          onChangeText={text => handleInput(text, 'lastname')}
          onFocus={() => handleError(null, 'lastname')}
        />
        <Input
          label="Email"
          icon=""
          value={input.email}
          error={error.email}
          onChangeText={text => handleInput(text, 'email')}
        />
        <Input
          label="Phone number"
          icon=""
          value={input.phonenumber}
          error={error.phonenumber}
          onChangeText={text => handleInput(text, 'phonenumber')}
        />
        <Input
          label="Password"
          icon=""
          password
          value={input.password}
          error={error.password}
          onChangeText={text => handleInput(text, 'password')}
        />
        <Input
          label="Confirm Password"
          icon=""
          password
          value={input.password}
          error={error.password}
          onChangeText={text => handleInput(text, 'confirmpassword')}
        />

        <View
          style={{
            height: 50,
            backgroundColor: 'blue',
            marginTop: 20,
            justifyContent: 'center',
            borderRadius: 26,
            width: 345,
            alignSelf: 'center',
          }}>
          <Pressable onPress={handleSubmit}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
