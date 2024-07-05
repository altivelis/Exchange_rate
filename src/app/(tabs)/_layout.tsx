import { Tabs } from "expo-router";
import { View, Text } from "react-native";

import type { FC } from "react";

const TabLayout: FC = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
    }}
    tabBar={() => (
      <View className="my-4">
        <Text className="text-center">情報工学実験Ⅳ (1)</Text>
      </View>
    )}
  />
);

export default TabLayout;
