import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React , { useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const total = useSelector(selectBasketTotal);

    if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center justify-between space-x-1"
      >
        <Text className="bg-[#01A296] py-1 px-2 text-lg text-white font-extrabold">
          {items.length}
        </Text>
        <Text className="text-white text-center font-extrabold text-lg flex-1">
          View Basket
        </Text>
        <Text className="text-white font-bold text-lg"> $ {total}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon

const styles = StyleSheet.create({})