import dayjs from "dayjs"

export async function GET() {
  const date1 = new Date();
  const date2 = dayjs();

  return Response.json({
    date1, date2
  })
}
