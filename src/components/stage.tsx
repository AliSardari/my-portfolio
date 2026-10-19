import type { SectionId } from "@/lib/deck-nav";

// تم از طریق کلاس .dark روی html توسط اسکریپت next-themes قبل از اولین paint
// اعمال می‌شود؛ بنابراین انتخاب تصویر hero باید با CSS انجام شود نه با JS،
// وگرنه در حالت روشن، پس‌زمینه اول تیره رندر و بعد از hydration عوض می‌شود (فلش).
export function Stage({ active }: { active: SectionId }) {
  return (
    <div className="stage" aria-hidden="true">
      <div
        className={"layer layer-home-dark" + (active === "home" ? " on" : "")}
      />
      <div
        className={
          "layer layer-home-light" + (active === "home" ? " on" : "")
        }
      />
      <div
        className={"layer layer-about" + (active === "about" ? " on" : "")}
      />
      <div
        className={"layer layer-projects" + (active === "projects" ? " on" : "")}
      />
      <div className={"layer layer-contact" + (active === "contact" ? " on" : "")} />
      <div className="scrim" />
    </div>
  );
}
