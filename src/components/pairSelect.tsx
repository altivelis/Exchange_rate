import { useState, useEffect } from "react";

import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

import type { FC, ReactElement } from "react";

type Props = {
  setValue: (value: string) => void;
};

const pairs: string[] = [
  "USD/JPY",
  "JPY/USD",
  "EUR/JPY",
  "JPY/EUR",
  "GBP/JPY",
  "JPY/GBP",
  "AUD/JPY",
  "JPY/AUD",
  "NZD/JPY",
  "JPY/NZD",
  "CAD/JPY",
  "JPY/CAD",
  "CHF/JPY",
  "JPY/CHF",
  "TRY/JPY",
  "JPY/TRY",
  "ZAR/JPY",
  "JPY/ZAR",
  "MXN/JPY",
  "JPY/MXN",
  "EUR/USD",
  "USD/EUR",
  "GBP/USD",
  "USD/GBP",
  "AUD/USD",
  "USD/AUD",
  "NZD/USD",
  "USD/NZD",
];

const PairSelect: FC<Props> = ({ setValue }) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0));
  const displayValue = pairs[selectedIndex.row];

  useEffect(() => {
    setValue(pairs[selectedIndex.row]);
  }, [selectedIndex]);

  const renderOption = (title: string): ReactElement => <SelectItem key={title} title={title} />;

  return (
    <Select
      value={displayValue}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index as IndexPath)}
    >
      {pairs.map(renderOption)}
    </Select>
  );
};

export { PairSelect };
