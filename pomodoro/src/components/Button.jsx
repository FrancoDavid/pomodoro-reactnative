import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useState } from "react";

import { playSoundStart, playSoundStop } from "../modules/sound";
import { TYPE_MOMENT_DICTIONARY } from "../config/constants";

export default function Button({ onPress, isRunning, setTimerRunning }) {
  const [btnText, setBtnText] = useState(TYPE_MOMENT_DICTIONARY.START);

  const handlePress = () => {
    setTimerRunning((prev) => !prev);
    console.log("is running en button", isRunning);
    if (!isRunning) {
      console.log("start...", isRunning);
      playSoundStart();
      setBtnText(TYPE_MOMENT_DICTIONARY.STOP);
    } else {
      console.log("stop...", isRunning);
      playSoundStop();
      setBtnText(TYPE_MOMENT_DICTIONARY.START);
    }

    onPress(isRunning);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
};
