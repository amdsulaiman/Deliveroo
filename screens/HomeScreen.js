import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useLayoutEffect , useEffect , useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Constants from "../constants/Constants";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from '../sanity';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "featured"] {..., restaurants[]->{..., dishes[]->}}`)
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((err) => {
        console.log("Err at Home Page:", err);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 30 : 30,
      }}
      className="bg-white pt-5"
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={Constants.primaryColor} />
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <UserIcon size={35} color={Constants.primaryColor} />
        </TouchableOpacity>
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            returnKeyType="default"
          />
        </View>
        <AdjustmentsIcon size={20} color={Constants.primaryColor} />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {featuredCategories?.map((category) => (
 <FeaturedRow
 key={category._id}
 id={category._id}
 title={category.name}
 description={category.short_description}
 

 />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
