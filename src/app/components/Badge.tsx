export default function Badge({ text }: { text: string }) {
  return (
    <div className="mx-2 my-2 inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-lg font-semibold ring-1 ring-white/10">
      {text}
    </div>
  );
}
