import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/Button'
import * as ImagePicker from 'expo-image-picker';
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  const imageSource = selectedImage  ? { uri: selectedImage } : {uri:'https://docs.expo.dev/static/images/tutorial/background-image.png'};
  return (
    
    <View className=" bg-[#25292e] flex-1 items-center ">
      <View className=" flex-1 pt-[58px] w-full items-center">
     

          <Image source={imageSource} className="h-[440] w-[80%] rounded-[18px]" />

      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary' onPress={pickImageAsync}></Button>
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

