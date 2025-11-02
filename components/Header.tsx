import AnimatedDiv from './animation-core/AnimatedDiv';
import AnimatedTitle from './animation-core/AnimatedTitle';

const Header = ({ title }: { title: string }) => {
  return (
    <AnimatedDiv className="my-8 text-center">
      <AnimatedTitle className="bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
        {title}
      </AnimatedTitle>
    </AnimatedDiv>
  );
};

export default Header;
