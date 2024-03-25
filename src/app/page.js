import dayjs from "dayjs";

export default function Home() {
  const date1 = new Date();
  const date2 = dayjs();
  return (
    <div>
      <div>Date1: {date1.toISOString()}</div>
      <div>Date2: {date2.format()}</div>
    </div>
  );
}
