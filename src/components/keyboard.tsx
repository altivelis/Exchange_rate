import { View, Text, Button } from "react-native";

type Props = {
  currentValue: string;
  setValue: (value: string) => void;
};

export const Keyboard = ({ currentValue, setValue }: Props) => (
  <>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "1")} title="1" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "2")} title="2" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "3")} title="3" />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "4")} title="4" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "5")} title="5" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "6")} title="6" />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "7")} title="7" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "8")} title="8" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "9")} title="9" />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View className="w-[100px]">
            <Button onPress={() => setValue("")} title="clear" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue + "0")} title="0" />
          </View>
          <View className="w-[100px]">
            <Button onPress={() => setValue(currentValue.slice(0, -1))} title="backspace" />
          </View>
        </View>
      </View>
    </View>
  </>
);
