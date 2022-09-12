// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import  { useEffect, useState } from 'react'
import {View, Text, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'
 
const HomeScreen = () => {

  const [cardCode,setCardCode] = useState("")
  const [data,setData] = useState([])

  const getUserOrders = async(cardcode) => {
    return api.getOrders(cardcode)
  }

  useEffect(() => {
    const checkStorage = async() => {
      let user = await AsyncStorage.getItem('user')
      user = JSON.parse(user)
      setCardCode(user.cardcode)
      getUserOrders(user.cardcode)
      .then(data => {
        setData(data)
      })
    }
    checkStorage()
  },[])

  const showData = () => {
    return data.map(rec => {
      return (
        <Text key={rec.APPNO}>
          {rec.APPNO}
        </Text>
      )
    })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
                {showData()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
