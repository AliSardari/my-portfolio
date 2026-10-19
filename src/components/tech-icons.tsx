import {
  siReact,
  siNextdotjs,
  siLaravel,
  siPhp,
  siPython,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siBootstrap,
  siMysql,
  siPostgresql,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const ICONS: Record<string, SimpleIcon> = {
  react: siReact,
  nextdotjs: siNextdotjs,
  laravel: siLaravel,
  php: siPhp,
  python: siPython,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwindcss: siTailwindcss,
  bootstrap: siBootstrap,
  mysql: siMysql,
  postgresql: siPostgresql,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={icon.title}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
