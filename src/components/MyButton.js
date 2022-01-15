import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

export default function ({ title, onPress, style }) {
  return (
    <View style={[styles.button, style]}>
      <Button title={title} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
