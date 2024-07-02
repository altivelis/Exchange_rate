import axios, {AxiosResponse} from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Text } from "react-native";

type Props = {
    currency : number;
    from : string;
    to : string;
    date? : string;
}

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
]

export const Exchange = ({currency, from, to, date} : Props) => {
    const [dom, setDom] = useState<ReactElement>(<></>);
    let test = false;
    let right = true;
    let index = 0;
    for(let i = 0; i < symbols.length; i++) {
        if(symbols[i][0] == from && symbols[i][1] == to) {
            test = true;
            right = true;
            index = i;
            break;
        }
        if(symbols[i][0] == to && symbols[i][1] == from) {
            test = true;
            right = false;
            index = i;
            break;
        }
    }
    //Metro waiting on exp://t-s8xdq-anonymous-8081.exp.direct
    //Web is waiting on http://localhost:8081
    const endPoint = "https://api.z.y4e.net/public";
    const path = `/v1/klines?symbol=${symbols[index][0]}_${symbols[index][1]}&priceType=ASK&interval=1min&date=${date}`;


    useEffect(() => {
        (
            async () => {
                setDom(await axios.get(endPoint + path)
                    .then((res: AxiosResponse) => {
                        console.log(res.data.data)
                        const rate = res.data.data[res.data.data.length - 1].close;
                        const result = (right) ? currency * rate : currency / rate;
                        return (
                                <Text id="result">
                                    {result}
                                </Text>
                        )
                    })
                    .catch((err: Error) => {
                        console.log(err)
                        return (
                            <>
                                <Text id="result">
                                    error
                                </Text>
                            </>
                        )
                    })
                )
            }
        )()
    }, [])

    if(!test){
        return (
            <Text id="result">
                notFound
            </Text>
        )
    }

    return dom;
    // return axios.get(endPoint + path)
    //     .then((res: AxiosResponse) => {
    //         const rate = res.data[res.data.length - 1].close;
    //         const result = (right) ? currency * rate : currency / rate;
    //         return (
    //             <>
    //                 <Text id="result">
    //                     {result}
    //                 </Text>
    //             </>
    //         )
    //     })
    //     .catch((err: Error) => {
    //         return (
    //             <>
    //                 <Text id="result">
    //                     error
    //                 </Text>
    //             </>
    //         )
    //     })
}