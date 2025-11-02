import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import AnimatedDiv from '@/components/animation-core/AnimatedDiv';
import FloatingOrb from '@/components/animation-core/FloatingOrb';
import CustomLinkButton from '@/components/buttons/CustomLinkButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MAIN_PAGE_DATA } from '@/constants/constants';
import { MainPageItem } from '@/utils/types';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br flex justify-evenly items-center from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <AnimatedBackgroundGradient />
      <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
      <div className="z-50 mx-auto h-screen flex flex-col justify-between items-center w-full px-4 sm:px-6 ">
        {/* HEADER */}
        <Header title="Reusable Components" />

        {/* COMPONENTS GRID */}
        <AnimatedDiv className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MAIN_PAGE_DATA.map((component: MainPageItem) => (
            <CustomLinkButton
              key={component.path}
              name={component.name}
              path={component.path}
              icon={component.icon}
              color={component.color}
            />
          ))}
        </AnimatedDiv>

        {/* FOOTER */}
        <Footer year={2025} />
      </div>
    </div>
  );
}
