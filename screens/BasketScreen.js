import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../redux/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Constants from 'expo-constants';


const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const totalCost = useSelector(selectBasketTotal);
  const statusBarHeight = Constants.statusBarHeight

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={{
        paddingTop : Platform.OS == 'android' ? statusBarHeight : 0
    }}  className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="bg-white px-4 py-3 flex-row items-center space-x-4 mb-4 my-5 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="w-8 h-8 rounded-full"
          />
          <Text className="text-xs flex-1">Deliver in 50-75 mins</Text>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, groupedItems]) => (
            <View
              key={key}
              className="bg-white px-4 py-2 flex-row items-center justify-between space-x-4 border-b border-[#00CCBB]/25"
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-gray-400 text-xs">
                  {groupedItems.length} x
                </Text>
                <Image
                  source={{
                    uri: urlFor(groupedItems[0]?.imgUrl).url(),
                  }}
                  className="w-12 h-12 rounded-full mx-3"
                />
                <Text>{groupedItems[0]?.title}</Text>
              </View>

              <View className="flex-row items-center space-x-3">
                <Text>$ {groupedItems[0]?.price}</Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white mt-5 px-4 py-4 space-y-3">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$ {totalCost}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$ 0.00</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text>Order Total</Text>
            <Text className="font-extrabold">$ {totalCost}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PrepareOrder")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="font-bold text-center text-white text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
