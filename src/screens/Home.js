import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function (props) {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Login"
      />
    </View>
  );
}
