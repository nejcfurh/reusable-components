import BackButton from '@/components/buttons/BackButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 py-12 px-4 relative">
      <BackButton className="top-5 left-5" />
    </div>
  );
}
