import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Audio } from "expo-av";

import Header from "./components/Header";
import Timer from "./components/Timer";
import Button from "./components/Button";

import { TYPE_TIME_DICTIONARY } from "./config/constants";

export default function Main({ setBackgroundColor }) {
  const INSETS = useSafeAreaInsets();

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(TYPE_TIME_DICTIONARY.POMO.time);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    TYPE_TIME_DICTIONARY.POMO.slug ||
      TYPE_TIME_DICTIONARY.BREAK.slug ||
      TYPE_TIME_DICTIONARY["SHORT BREAK"].slug,
  );

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/timer-cocina-.mp3"),
    );

    await sound.playAsync();
  }
  return (
    <View
      style={{
        paddingTop: INSETS.top,
        paddingBottom: INSETS.bottom,
        paddingHorizontal: 15,
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <Header
        currentTime={currentTime}
        onChangeTabs={(slug) => {
          setCurrentTime(slug);
          setTime(TYPE_TIME_DICTIONARY[slug].time);
          setBackgroundColor(TYPE_TIME_DICTIONARY[slug].backgroundColor);
        }}
      />
      <Timer time={time} />
      <Button
        isActive={isActive}
        onPress={() => {
          setIsActive(!isActive);
          playSound();
        }}
      />
    </View>
  );
}
