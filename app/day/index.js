export async function generateStaticParams() {
  return Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1}`,
  }));
}

export default function DayPage({ params }) {
  const { day } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Day {day}</h1>
      <p className="mt-4">This is the content for day {day}.</p>
    </div>
  );
}
