import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import MyTextArea from "../components/MyTextArea";

export default function ({ navigation }) {
  const onChangePhoneNumber = (phone) => {
    console.log("Утас: " + phone);
  };
  const LoginHandler = () => {
    Alert.alert("Түр хүлээнэ үү...");
  };
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/img/shop.png")} />
      <Text style={styles.text}>Та нэвтрэх нэр нууц үгээ оруулна уу</Text>
      <MyInput
        placeholder={"Нэвтрэх нэрээ оруулна уу"}
        keyboardType="number-pad"
        onChangeText={onChangePhoneNumber}
      />
      <MyInput
        secureTextEntry={true}
        placeholder={"Нууц үгээ оруулна уу"}
        onChangeText={onChangePhoneNumber}
      />

      <MyButton title="Нэвтрэх" onPress={LoginHandler} />
      <MyButton title="Буцах" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { textAlign: "center", fontSize: 20 },
  img: { width: "100%", height: "50%" },
});
