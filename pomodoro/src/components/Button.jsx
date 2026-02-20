import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function Button({ onPress, isActive, setActive }) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <Text style={styles.buttonText}>{isActive ? "STOP" : "START"}</Text>
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
