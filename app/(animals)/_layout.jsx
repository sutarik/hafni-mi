import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

import { useLocalSearchParams } from "expo-router";



const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`}
            style={{ color: color}}>
                {name}
            </Text>
        </View>
    )
}

const ProfileLayout = () => {
    const params = useLocalSearchParams();
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#9D6532',
                tabBarInactiveTintColor: '#e8ad78',
                tabBarStyle: {
                    backgroundColor: '#EEE5DD',
                    borderTopWidth: 0,
                    borderTopColor: '#232533',
                    height: 84,
                }
            }}
        >

            <Tabs.Screen 
                name="profile"
                options={{
                    title: `${params.name}`,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name={params.name}
                            focused={focused}
                        />
                    )
                }}
            />  
            <Tabs.Screen 
                name="adopt"
                options={{
                    title: "Adopt",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.paws}
                            color={color}
                            name="Adoptuj"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="walk"
                options={{
                    title: "Walk",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Vyvenči"
                            focused={focused}
                        />
                    )
                }}
            /> 
            <Tabs.Screen 
                name="donate"
                options={{
                    title: "Donate",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Daruj"
                            focused={focused}
                        />
                    )
                }}
            /> 
        </Tabs>
    </>
  )
}

export default ProfileLayout