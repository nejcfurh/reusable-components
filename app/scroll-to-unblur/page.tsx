import Tooltip from '@/components/Tooltip';
import ScrollToUnblur from './components/ScrollToUnblur';
import BackButton from '@/components/buttons/BackButton';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center relative">
      <BackButton className="top-5 left-5" />
      <ScrollToUnblur />
      <Tooltip
        text="Scroll down to unblur"
        bgColor="bg-amber-50"
        textColor="text-black"
        className="bottom-5 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
