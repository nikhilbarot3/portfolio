export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="tag-eyebrow mb-3 font-mono text-xs uppercase">
      [{children}]
    </p>
  );
}
