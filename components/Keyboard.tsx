import { View } from "react-native";

type Props = {
    currentValue: string;
    setValue: (value: string) => void;
  }
  
export const ButtonsList = ({ currentValue, setValue }: Props) => {
return (
    <>
    <View style={{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
    }}>
    <View style={{ gap: 5 }}>
    <View style={{ flexDirection: "row", gap: 5 }}>
    <button onClick={() => setValue(currentValue + "1")}style={{ width: "100px" , height: "30px" }}>1</button>
    <button onClick={() => setValue(currentValue + "2")}style={{ width: "100px" , height: "30px" }}>2</button>
    <button onClick={() => setValue(currentValue + "3")}style={{ width: "100px" , height: "30px" }}>3</button>
    <button onClick={() => setValue(currentValue.slice(0,-1))}>backspace</button>
    </View>

    <View style={{ flexDirection: "row", gap: 5 }}>
    <button onClick={() => setValue(currentValue + "4")}style={{ width: "100px" , height: "30px" }}>4</button>
    <button onClick={() => setValue(currentValue + "5")}style={{ width: "100px" , height: "30px" }}>5</button>
    <button onClick={() => setValue(currentValue + "6")}style={{ width: "100px" , height: "30px" }}>6</button>
    </View>
    
    <View style={{ flexDirection: "row", gap: 5 }}>
        <button onClick={() => setValue(currentValue + "7")} style={{ width: "100px" , height: "30px" }}>7</button>
        <button onClick={() => setValue(currentValue + "8")} style={{ width: "100px" , height: "30px" }}>8</button>
        <button onClick={() => setValue(currentValue + "9")} style={{ width: "100px" , height: "30px" }}>9</button>
    </View>
    <View style={{ flexDirection: "row", gap: 5 }}>
    <button onClick={() => setValue(currentValue + "0")} style={{ width: "100px" , height: "30px", marginLeft: "105px" }}>0</button>
    <button onClick={() => setValue("")}style={{ width: "100px" , height: "30px"}}>clear</button>
    </View>
    </View>
    </View>
    </>
);
}