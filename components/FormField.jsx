import { View, Text } from 'react-native'

const FormField = ({title}) => {
  return (
    <View className="space-y-2">
      <Text className="text-base text-secondary font-pmedium">{title}</Text>
    </View>
  )
}

export default FormField