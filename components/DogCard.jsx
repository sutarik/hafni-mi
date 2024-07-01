import { View, Text, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Redirect, router } from 'expo-router';

import Swipeable from 'react-native-gesture-handler/Swipeable'

import React from 'react'
import CustomButton from './CustomButton';

const DogCard = ({ dog }) => {
  return (
    <View className="w-full flex-col items-center px-4 mb-4 rounded-xl">
      <View className="flex-row">
        <Image
          source={{uri: dog.image}}
          className="h-80 w-[60%] rounded-xl justify-center items-center"
          resizeMode="cover"
          //onPress={() => router.push('../index')}
          onPress={() => router.push({ pathname: `/details}`, params: dog })} // Remove the braces in params}
        />
        <View className="w-[40%] pl-2 bg-secondary rounded-xl pt-4">
          <Text 
            className="text-2xl text-secondary text-left color-primary pb-4"
           // onPress={() => router.push({ pathname: `/(animals)/profile`, params: dog })} // Remove the braces in params}
            >{dog.name} 
          </Text>
          <Text 
            className="text-m color-primary"
            textAlign="autor">{dog.gender}
          </Text>
          <Text 
            className="text-xl color-primary">{dog.size}  
          </Text>
          <Text 
            className="text-m color-primary"
            textAlign="autor">{dog.location}  
          </Text>
          <CustomButton
               title="Viac"
               handlePress={() => router.push({ pathname: `/(animals)/profile`, params: dog })}
               textStyles="secondary"
               containerStyles="bg-primary w-4/5 mt-10 px-2 border-2 border-secondary"
          />
            
        </View>
      </View>
    </View>
  )
}

export default DogCard