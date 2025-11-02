const ClearAllButton = ({ handleClearAll }: { handleClearAll: () => void }) => {
  return (
    <button
      onClick={handleClearAll}
      className="rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-red-600"
    >
      Clear All
    </button>
  );
};

export default ClearAllButton;
