export default function SelectBtn({
  classNames = "",
  label,
  onClick,
  isSelected,
}: {
  classNames?: string;
  label: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={() => onClick()}
      className={`${classNames} px-4 py-2 rounded-lg border text-sm transition-all duration-300 ease border-white/10 font-semibold ${
        isSelected
          ? `bg-primary text-black`
          : `text-white hover:text-black hover:bg-white`
      } `}
    >
      {label}
    </button>
  );
}
