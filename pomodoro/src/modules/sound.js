import { Audio } from "expo-av";

export async function playSoundBip() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/sounds/bip.mp3"),
  );
  await sound.playAsync();
}

export async function playSoundStart() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/sounds/start.mp3"),
  );
  await sound.playAsync();
}

export async function playSoundStop() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/sounds/stop.mp3"),
  );
  await sound.playAsync();
}

export async function playSoundEnd() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/sounds/end.mp3"),
  );
  await sound.playAsync();
}
