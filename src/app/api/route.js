import dayjs from "dayjs"
import { NextResponse } from "next/server";

export async function GET() {
  const date1 = new Date();
  const date2 = dayjs();
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Ulaanbaatar')
  const json = await res.json()

  return NextResponse.json({
    date1, date2, json
  })
}
