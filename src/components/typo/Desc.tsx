export default function Desc({
  classNames = "",
  text,
}: {
  classNames?: string;
  text: string;
}) {
  return (
    <p
      className={`${classNames} text-lg text-neutral-400 mb-10 leading-relaxed`}
    >
      {text}
    </p>
  );
}
