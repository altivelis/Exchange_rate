import { View, Text, ScrollView, Button } from "react-native";
import { useState } from "react";

import { exchange } from "@/src/components/exchange";
import { Keyboard } from "@/src/components/keyboard";
import { DatePicker } from "@/src/components/datePicker";
import { PairSelect } from "@/src/components/pairSelect";

import type { FC } from "react";

const HomeScreen: FC = () => {
  const today = new Date();
  const [value, setValue] = useState<string>("");
  const [pair, setPair] = useState<string>("USD/JPY");
  const [date, setDate] = useState<string>(
    `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`
  );
  const [result, setResult] = useState<number | string>("");

  return (
    <ScrollView>
      <View className="mt-14 mb-4">
        <Text className="text-center font-semibold text-2xl">通貨換算ツール</Text>
      </View>
      <View className="mx-4">
        <DatePicker date={date} dateSetter={setDate} />
        <View className="mt-2">
          <PairSelect setValue={setPair} />
        </View>
        <View className="flex-row gap-1 justify-between items-center mt-2 mr-2">
          <View className="flex-1 flex-row gap-1 justify-between items-center">
            <Text className="flex-1 border-dotted border-[1px] border-gray-500 py-1.5 px-2">{value}</Text>
            <Text>{pair.split("/")[0]}</Text>
          </View>
          <View>
            <Text>→</Text>
          </View>
          <View className="flex-1 flex-row gap-1 justify-between items-center">
            <Text className="flex-1 border-dotted border-[1px] border-gray-500 py-1.5 px-2">
              {Number(result).toFixed(5)}
            </Text>
            <Text>{pair.split("/")[1]}</Text>
          </View>
        </View>
        <View className="mt-3 mb-5">
          <Text className="text-[10px] text-center">※あくまでもこの結果は一つの目安としてお使いください</Text>
        </View>
        <Button
          onPress={() => {
            exchange({
              currency: Number(value),
              from: pair.split("/")[0],
              to: pair.split("/")[1],
              date: date.replace(/\//g, ""),
              setResult: setResult,
            });
          }}
          title={`${date} のレートで ${pair} を計算する`}
        />
        <View className="mt-8">
          <Keyboard currentValue={value} setValue={setValue} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
