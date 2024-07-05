import type { FC } from "react";
import { Calendar } from "react-native-calendars";

type Props = {
  // yyyy/mm/dd
  date: string;
  dateSetter: (date: string) => void;
};

type DayObj = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

const DatePicker: FC<Props> = ({ date, dateSetter }) => {
  return (
    <Calendar
      onDayPress={(day: DayObj) => {
        const date = day.dateString.replace(/-/g, "/");
        dateSetter(date);
      }}
      markedDates={{
        [date.replace(/\//g, "-")]: { selected: true, disableTouchEvent: true },
      }}
    />
  );
};

export { DatePicker };
