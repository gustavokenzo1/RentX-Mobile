import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Home } from "./src/screens/Home";

import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import theme from "./src/styles/theme";
import { CarDetails } from "./src/screens/CarDetails";
import { Scheduling } from "./src/screens/Scheduling";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SchedulingDetails />
      </ThemeProvider>
    </View>
  );
}
