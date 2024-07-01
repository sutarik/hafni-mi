import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`rounded-full min-h-[62px] justify-center items-center ${containerStyles}
        ${isLoading ? 'opacity-50' : ''}
        disabled={isLoading}`}
        >
      <Text className={`font-psemibold text-lg text-${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton