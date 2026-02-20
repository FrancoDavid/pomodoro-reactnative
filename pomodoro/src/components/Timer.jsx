import { Text, View } from "react-native";

export default function Timer({ time }) {
  const formatTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 0.3,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
};
