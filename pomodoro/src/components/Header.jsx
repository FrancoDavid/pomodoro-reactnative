import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { TYPE_TIME_DICTIONARY } from "../config/constants";

export default function Header({ currentTime, onChangeTabs }) {
  return (
    <View>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.container}>
        {Object.values(TYPE_TIME_DICTIONARY).map((type, index) => (
          <TouchableOpacity
            key={type.slug}
            style={[
              styles.item,
              currentTime === type.slug && styles.activeItem,
            ]}
            onPress={() => onChangeTabs(type.slug)}
          >
            <Text style={styles.itemText}>{type.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
  },
  item: {
    padding: 5,
    width: "33%",
    alignItems: "center",
  },
  activeItem: {
    borderColor: "red",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
  },
  itemText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});
