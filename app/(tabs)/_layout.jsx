import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

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

const TabsLayout = () => {
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
                name="utulkaci"
                options={{
                    title: "Utulkaci",
                    headerShown: false,
                    headerBackVisible: false,
                    headerBackTitleVisible: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.paws}
                            color={color}
                            name="Útulkáči"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="bookmark"
                options={{
                    title: "Bookmark",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
            /> 
            <Tabs.Screen 
                name="create"
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
            /> 
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />  
        </Tabs>
    </>
  )
}

export default TabsLayout