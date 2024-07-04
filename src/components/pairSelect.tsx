import type { FC } from "react"

type Props = {
  currentValue: string;
  setValue: (value: string) => void;
}

const PairSelect: FC<Props> = ({ currentValue, setValue }) => (
    <select onChange={(e) => setValue(e.target.value)} value={currentValue} className="h-20">
      <option value="USD_JPY">米ドル → 日本円</option>
      <option value="JPY_USD">日本円 → 米ドル</option>
      <option value="EUR_JPY">ユーロ → 日本円</option>
      <option value="JPY_EUR">日本円 → ユーロ</option>
      <option value="GBP_JPY">英ポンド → 日本円</option>
      <option value="JPY_GBP">日本円 → 英ポンド</option>
      <option value="AUD_JPY">豪ドル → 日本円</option>
      <option value="JPY_AUD">日本円 → 豪ドル</option>
      <option value="NZD_JPY">NZドル → 日本円</option>
      <option value="JPY_NZD">日本円 → NZドル</option>
      <option value="CAD_JPY">カナダドル → 日本円</option>
      <option value="JPY_CAD">日本円 → カナダドル</option>
      <option value="CHF_JPY">スイスフラン → 日本円</option>
      <option value="JPY_CHF">日本円 → スイスフラン</option>
      <option value="TRY_JPY">トルコリラ → 日本円</option>
      <option value="JPY_TRY">日本円 → トルコリラ</option>
      <option value="ZAR_JPY">南アフリカランド → 日本円</option>
      <option value="JPY_ZAR">日本円 → 南アフリカランド</option>
      <option value="MXN_JPY">メキシコペソ → 日本円</option>
      <option value="JPY_MXN">日本円 → メキシコペソ</option>
      <option value="EUR_USD">ユーロ → 米ドル</option>
      <option value="USD_EUR">米ドル → ユーロ</option>
      <option value="GBP_USD">英ポンド → 米ドル</option>
      <option value="USD_GBP">米ドル → 英ポンド</option>
      <option value="AUD_USD">豪ドル → 米ドル</option>
      <option value="USD_AUD">米ドル → 豪ドル</option>
      <option value="NZD_USD">NZドル → 米ドル</option>
      <option value="USD_NZD">米ドル → NZドル</option>
    </select>
  )

export default PairSelect
