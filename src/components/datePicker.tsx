import type { FC } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-calendars";

type Props = {
	// yyyy-mm-dd
	dateSetter: (date: string) => void;
};

type DayObj = {
	dateString: string;
	day: number;
	month: number;
	timestamp: number;
	year: number;
};

const DatePicker: FC<Props> = ({ dateSetter }) => {
	return (
		<Calendar
			onDayPress={(day: DayObj) => {
				const date = day.dateString.replace(/-/g, "");
				dateSetter(date);
			}}
		/>
	);
};

export { DatePicker };
