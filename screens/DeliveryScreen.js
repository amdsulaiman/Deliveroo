import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/restaurantSlice';
import MapView, { Marker } from "react-native-maps";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import Constants from 'expo-constants';

const DeliveryScreen = () => {
    const statusBarHeight = Constants.statusBarHeight
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  return (
    <View style={{
        paddingTop : Platform.OS == 'android' ? statusBarHeight : 0
    }}className="bg-[#00CCBB] flex-1">
    <SafeAreaView className="z-50">
      <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>

      <View className="bg-white mx-5 my-2 rounded-md p-4 z-50 shadow-md">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">45-55 minutes</Text>
          </View>

          <Image
            source={{
              uri: "https://links.papareact.com/fls"
            }}
            className="h-20 w-20"
          />
        </View>

        <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
        <Text className="mt-3 text-gray-500">
          Your order at {restaurant.title} being prepared
        </Text>
      </View>
    </SafeAreaView>

    <MapView
      initialRegion={{
        latitude: parseFloat(restaurant.lat),
        longitude: parseFloat(restaurant.long),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      className="flex-1 mt-10 z-0"
      mapType="mutedStandard"
    >
      <Marker
        coordinate={{
          latitude: restaurant.lat,
          longitude: restaurant.long
        }}
        title={restaurant.title}
        description={restaurant.short_dscription}
        identifier="origin"
        pinColor="#00CCBB"
      />
    </MapView>

    <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
        source={{
          uri: "https://links.papareact.com/wru"
        }}
        className="h-12 w-12 bg-gray-300 rounded-full ml-5"
      />

      <View className="flex-1">
        <Text className="text-lg">Sharrod Hines</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>

      <Text className="text-[#00CCBB] mr-5 font-bold">Call</Text>
    </SafeAreaView>
  </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
})