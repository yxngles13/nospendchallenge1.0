import { useRouter } from 'next/router';

export default function DayPage() {
  const router = useRouter();
  const { day } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Day {day}</h1>
      <p className="mt-4">This is the content for day {day}.</p>
    </div>
  );
}
