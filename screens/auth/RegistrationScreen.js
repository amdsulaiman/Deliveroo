import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import Constants from "../../constants/Constants";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RegistrationScreen = () => {
  useEffect(() => {}, []);
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
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
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 80, paddingHorizontal: 0}}>
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
              backgroundColor: "#F4F4F4",
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
        <View style={{ marginVertical: 20,margin : 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
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
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.goBack()}
            style={{
              color: Constants.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have account ?Login
          </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.whiteColor,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
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
