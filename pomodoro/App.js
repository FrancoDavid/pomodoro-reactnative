import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./src/Main";

import { TYPE_TIME_DICTIONARY } from "./src/config/constants";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    TYPE_TIME_DICTIONARY.POMO.backgroundColor,
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: backgroundColor }}>
      <Main setBackgroundColor={setBackgroundColor} />
    </SafeAreaProvider>
  );
}
