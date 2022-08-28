import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import store from "./redux/store";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import WelcomeScreen from "./screens/auth/WelcomeScreen";
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}
            options={{presentation : 'modal' , headerShown : false}}
             />
              <Stack.Screen name="PrepareOrder" component={PrepareOrderScreen}
               options={{presentation : 'fullScreenModal' , headerShown : false}} />
               <Stack.Screen name="Delivery" component={DeliveryScreen}
                options={{presentation : 'fullScreenModal' , headerShown : false}} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
