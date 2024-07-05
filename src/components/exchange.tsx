import axios, { AxiosResponse } from "axios";

type Props = {
  currency: number;
  from: string;
  to: string;
  date?: string;
  setResult: (value: number | string) => void;
};

const symbols = [
  ["USD", "JPY"],
  ["EUR", "JPY"],
  ["GBP", "JPY"],
  ["AUD", "JPY"],
  ["NZD", "JPY"],
  ["CAD", "JPY"],
  ["CHF", "JPY"],
  ["TRY", "JPY"],
  ["ZAR", "JPY"],
  ["MXN", "JPY"],
  ["EUR", "USD"],
  ["GBP", "USD"],
  ["AUD", "USD"],
  ["NZD", "USD"],
];

export const exchange = async ({ currency, from, to, date, setResult }: Props): Promise<void> => {
  let right = true;
  let index = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i][0] == from && symbols[i][1] == to) {
      right = true;
      index = i;
      break;
    } else if (symbols[i][0] == to && symbols[i][1] == from) {
      right = false;
      index = i;
      break;
    }
  }

  const endPoint = "https://forex-api-coin-z.vercel.app/public";
  const path = `/v1/klines?symbol=${symbols[index][0]}_${symbols[index][1]}&priceType=ASK&interval=1min&date=${date}`;

  setResult(
    await axios
      .get(endPoint + path)
      .then((res: AxiosResponse) => {
        const rate = res.data.data[res.data.data.length - 1].close;
        const result = right ? currency * rate : currency / rate;
        return result;
      })
      .catch((err: Error) => {
        return "";
      })
  );
};
