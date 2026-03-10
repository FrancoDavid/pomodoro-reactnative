import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { TYPE_TIME_DICTIONARY } from "../config/constants";
import { playSoundBip } from "../modules/sound";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Made by Redrum</Text>
      <Text>Inspired by the Pomodoro Technique</Text>
      <Text>Powered by DarkDevs</Text>
      <Text>with React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
});
