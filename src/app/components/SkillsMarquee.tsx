"use client";
import Image from "next/image";

type Item = { src: string; label: string };

const ITEMS: Item[] = [
  // Core web
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", label: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },

  // Back end / DB
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", label: "Flask" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", label: "Oracle" },

  // DevOps / Tools
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", label: "GitLab" },

  // Game / Scripting
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg", label: "Lua / Luau" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", label: "Unity" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/roblox/roblox-original.svg", label: "Roblox Studio" },

  // Mobile / Apple
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", label: "Swift" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", label: "SwiftUI" },

  // AI / Data
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", label: "TensorFlow" },

  // Testing
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", label: "Jest" },

  // Systems / Misc
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", label: "C#" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg", label: "PowerShell" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", label: "jQuery" },
];

export default function SkillsMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="card p-6">
      <h3 className="text-center text-2xl font-bold mb-4">Skills</h3>
      <div className="marquee">
        <div className="marquee-track min-w-[200%]">
          {row.map((it, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
              <Image src={it.src} alt={it.label} width={28} height={28} unoptimized />
              <span className="text-sm text-white/80">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
