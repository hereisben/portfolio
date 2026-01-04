export default function Dot({ classNames = "" }: { classNames?: string }) {
  return (
    <div
      className={`absolute top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_15px_#D9F154] z-10 mt-1.5 ${classNames}`}
    ></div>
  );
}
