import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/Button'

const Home = () => {
  return (
    
    <View className=" bg-[#25292e] flex-1 items-center ">
      <View className=" flex-1 pt-[58px] w-full items-center">
        <Image source={{uri:'https://docs.expo.dev/static/images/tutorial/background-image.png'}} className="h-[440] w-[80%] rounded-[18px]"></Image>
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary'></Button>
        <Button label='Use this photo'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
export default Home

