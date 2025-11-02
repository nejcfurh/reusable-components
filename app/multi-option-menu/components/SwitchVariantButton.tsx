const SwitchVariantButton = ({
  variant,
  handleSwitchVariant,
}: {
  variant: 'circular' | 'horizontal';
  handleSwitchVariant: () => void;
}) => {
  return (
    <button
      className="absolute top-5 bg-amber-50 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-80 hover:scale-[1.10] transition-all duration-300 cursor-pointer"
      onClick={handleSwitchVariant}
    >
      <span className="text-black text-base font-light">
        {variant === 'circular' ? 'Change to Horizontal' : 'Change to Circular'}
      </span>
    </button>
  );
};

export default SwitchVariantButton;
