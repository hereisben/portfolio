export default function Heading2({ text }: { text: string }) {
  return (
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{text}</h2>
  );
}
