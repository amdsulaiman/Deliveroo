import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "../../constants/Constants";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import Button from "../../components/Button";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  useEffect(() => {}, []);
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color={Constants.primaryColor} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: '#F4F4F4',
            borderRadius: 75,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/deliveroo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.titleText}>Welcome To Deliveroo</Text>
        <Text style={styles.subTitle}>
          Your favourite restaurants,shops and supermarkets delivered to your
          door
        </Text>
      </View>
      <View style={{ marginVertical: 20, margin: 20 }}>
        <Input
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <Input
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />
        <Button title="Login" onPress={validate} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
        >
          <Text
            style={{
              color: Constants.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Don't have account ?Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.whiteColor,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  logo: {
    height: 100,
    width: 100,
  },
  titleText: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: "bold",
    color: Constants.primaryColor,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: Constants.blackColor,
    width: "70%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
