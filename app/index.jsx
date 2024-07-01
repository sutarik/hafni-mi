import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';

import DOMParser from 'react-native-html-parser';

async function loadData() {
    const searchUrl = `https://www.adoptuj.psiadusa.sk/`;
    const response = await fetch(searchUrl);   // fetch page
  
    const htmlString = await response.text();  // get response text


    const parser = new DOMParser.DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    //const items = doc.querySelector('.pflist-item');
    const items = doc.querySelect('ul');


    console.log(items[0].textContent);
    /*
    for(i=0;i<items.length;i++){
        console.log(items[i].querySelect('li.pflist-itemtitle'));
    }*/
  }

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[250px] h-[200px]"
                        resizeMode = "contain"
                    />
                    <View className="relative mt-1">
                        <Text className="text-3xl text-white font-bold text-center text-secondary">ADOPTUJ LÁSKU</Text>
                        <Text className="text-2xl text-white font-bold text-center text-secondary">DARUJ DOMOV</Text>
                        <Text className="text-m text-white font-bold text-center text-secondary mt-3">Nájdi svojho píska v appke</Text>
                    </View>
                    
                    <CustomButton 
                        title="Daruj Domov 🐶"
                        handlePress={() => router.push('/utulkaci')}
                        textStyles="primary"
                        containerStyles="bg-secondary w-4/5 mt-20"
                    />
                    <CustomButton 
                        title="Zaregistruj sa"
                        handlePress={()=>{}}
                        textStyles="secondary"
                        containerStyles="bg-primary w-4/5 mt-5 border-2 border-secondary"
                    />
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor='#EEE5DD'
                style='dark'
            />
        </SafeAreaView>
    )
}