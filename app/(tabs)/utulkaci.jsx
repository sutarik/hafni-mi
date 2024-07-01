import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DogCard from '../../components/DogCard'

import Swipeable from 'react-native-gesture-handler/Swipeable'

const Utulkaci = () => {
  return (
    <SafeAreaView className="bg-primary h-full" contentContainerStyle={{ height: '100%' }}>
      <FlatList
        data={[
          { name: "Ozzy", location: "Banská Štiavnica", size: "Stredný (do 25kg)", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/ozzy5.jpg", gender: "pes", id: 1},
          { name: "Maura", location: "Námestovo", size: "Malý (do 10kg)", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/Mauri-2.jpg", gender: "fenka", id: 2},
          { name: "Ola", location: "Trstenné pri Hornáde", size: "Šteniatko", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/448757088_850177213823322_6588538310997648465_n.jpg", gender: "fenka", id: 3},
          { name: "Sting", location: "Košice", size: "Stredný (do 25kg)", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/FB_IMG_1718793782843.jpg", gender: "pes", id: 4},
          { name: "Dorota", location: "Košice", size: "Stredný (do 25kg)", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/FB_IMG_1718793670477.jpg", gender: "fenka", id: 5},
          { name: "Dakota", location: "Košice", size: "Stredný (do 25kg)", image: "https://www.adoptuj.psiadusa.sk/wp-content/uploads/FB_IMG_1718793537889.jpg", gender: "fenka", id: 6}
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <DogCard
              dog={item}
            />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View class-name="justify-between items-start flex-row mb-6">
              <View>
                <Text>
                  Naši Útulkáči
                </Text>
              </View>

            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Utulkaci