import { StyleSheet, Text, View } from 'react-native'
import { Redirect, router } from 'expo-router';

const Profile = () => {
  const user = undefined;

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})