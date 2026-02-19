import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "./components/Header";
import Timer from "./components/Timer";

import { TYPE_TIME_DICTIONARY } from "./config/constants";

export default function Main({ setBackgroundColor }) {
  const INSETS = useSafeAreaInsets();

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(TYPE_TIME_DICTIONARY.POMO.time);
  const [currentTime, setCurrentTime] = useState(
    TYPE_TIME_DICTIONARY.POMO.slug ||
      TYPE_TIME_DICTIONARY.BREAK.slug ||
      TYPE_TIME_DICTIONARY["SHORT BREAK"].slug,
  );

  return (
    <View
      style={{
        paddingTop: INSETS.top,
        paddingBottom: INSETS.bottom,
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
      {/* <Timer />  */}
    </View>
  );
}
