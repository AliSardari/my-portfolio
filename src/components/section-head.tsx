export function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="reveal max-w-2xl">
      <h2 className="text-[26px] font-extrabold leading-tight md:text-[32px]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-[14px] leading-7 text-mut md:text-[15px]">{sub}</p>
      ) : null}
    </div>
  );
}
