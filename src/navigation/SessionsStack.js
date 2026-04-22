import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SessionsScreen from "../screens/SessionsScreen";
import SessionDetailsScreen from "../screens/SessionDetailsScreen";

const Stack = createNativeStackNavigator();

export default function SessionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SessionsMain"
        component={SessionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SessionDetails"
        component={SessionDetailsScreen}
        options={{
          title: "Session Details",
          headerStyle: { backgroundColor: "#F5F0E8" },
          headerTintColor: "#1F2A24",
        }}
      />
    </Stack.Navigator>
  );
}
