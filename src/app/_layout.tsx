import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ApplicationProvider } from "@ui-kitten/components";

import type { FC } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: FC = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ApplicationProvider>
  );
};
export default RootLayout;
