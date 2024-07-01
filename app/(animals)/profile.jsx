import { View, Text, Image } from 'react-native'
import React from 'react'

import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const params = useLocalSearchParams();
  return (
    <View style="justifyContent: center">
    <Image
        source={{uri: params.image}}
        className="w-[80%] h-60 rounded-xl mt-3 relative justify-center items-center"
        resizeMode="cover"
      />
      <Text className="text-3xl">{params.name}</Text>
      <Text>{params.size}</Text>
      <Text>{params.location}</Text>
    </View>
  )
}

export default Profile