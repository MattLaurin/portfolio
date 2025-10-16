export type ProjectCategory = "jobs" | "school" | "personal";

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  repo?: string;
  live?: string;
  body?: string;
};

export const projects: Project[] = [
    {
    slug: "eva-secure-data-ai",
    category: "jobs",
    title: "Eva — Secure Data & AI Prototype",
    summary:
        "Built a secure analytics dashboard with chunk-loading, caching, and ML-based sentiment analysis.",
    image: "/projects/eva-secure-data-ai.png",
    tech: ["SQL", "Python", "TypeScript", "Next.js", "Caching", "PostgreSQL"],
    body: `
    Developed a high-performance data prototype for Eva Technologies handling 2M+ database rows with
    intelligent chunk-loading and client-side caching, reducing load times to under 3s even on low-end machines.  
    Implemented SQL injection–safe queries, secure data transport, and dashboards following Microsoft's SDL standards.  

    Also prototyped a machine learning sentiment-analysis module (Python) trained on multilingual movie dialogues
    to assess client–company satisfaction in real-time.  

    **Highlights:**
    - Reliable, secure data visualizations with near-zero API latency  
    - Efficient pagination & caching using TypeScript and SQL  
    - Integrated ML classifier for sentiment evaluation (Python)
    `,
    },
    {
    slug: "analytics-tools-refactor",
    category: "jobs",
    title: "Analytics Tools Refactor",
    summary:
        "Refactored internal analytics dashboards to improve speed, reliability, and CI/CD workflow.",
    image: "/projects/analytics-tools-refactor.png",
    tech: ["React", "TypeScript", "CI/CD", "Docker", "Node.js"],
    body: `
    Refactored Eva's legacy analytics dashboards to deliver smoother performance and improved reliability.  
    Introduced staged loading, granular caching, and fault isolation layers that reduced critical load failures by 35% and 
    brought average page load times down to 2.7s.  

    Enhanced developer workflows with GitHub Actions pipelines, ensuring automatic testing and deployment.  
    Collaborated closely with data and design teams to align visualization components with UX guidelines.

    **Highlights:**
    - Reduced runtime errors via isolated loading architecture  
    - Implemented progressive data-fetching and on-demand caching  
    - Automated testing + deployment pipeline (CI/CD with GitHub Actions)
    `,
    },
    {
    slug: "isolated-test-env",
    category: "jobs",
    title: "Isolated Test Environment (Internal Sandbox)",
    summary:
        "Built a secure sandboxed testing environment with CI/CD and network-isolated deployments.",
    image: "/projects/isolated-test-env.png",
    tech: ["Kali Linux", "Python", "CI/CD", "MySQL", "GitHub Actions", "Docker"],
    body: `
    Created an isolated test environment designed to replicate production conditions safely,
    enabling developers to experiment with network configurations, data migrations, and penetration testing
    without affecting live services.  

    Set up CI/CD pipelines with automated builds, version tagging, and rollback handling.
    Integrated vulnerability scanning tools (Kali Linux) and network monitoring scripts (Python) to
    ensure stability and compliance with internal security policies.

    **Highlights:**
    - Full CI/CD stack with rollback automation  
    - Vulnerability testing using Kali Linux utilities  
    - Multi-service orchestration with Docker + GitHub Actions
    `,
    },


    {
    slug: "cook-a-brainrot",
    category: "personal",
    title: "Cook a Brainrot",
    summary:
        "Grow a garden–style tycoon where players collect and cook brainrots using ovens, furnaces, and microwaves.",
    image: "/projects/brainrot.png",
    tech: ["Lua", "Luau", "Roblox Studio"],
    body: `
    A simulation tycoon combining humor and depth, *Cook a Brainrot* lets players gather brainrots, cook them across appliances, and earn cash over time. 
    Players can trade, collect rare mutations like "Giant" or "VoidTouched", and even sabotage others’ setups. 
    Features a modular cooking system, persistent data saving, and custom economic balancing for long-term play.

    **Status:** Private (pre-release build, multiplayer-ready)
    `,
    },
    {
    slug: "minefields-troll-tower",
    category: "personal",
    title: "Minefields Troll Tower",
    summary:
        "Climb a chaotic tower filled with traps, slaps, and exploding surprises — 160K+ visits.",
    image: "/projects/trolltower.png",
    tech: ["Lua", "Luau", "Roblox Studio"],
    body: `
    A fast-paced multiplayer tower climb where players dodge hidden mines, troll others with slap tools, and race to the top for wins. 
    Includes data-backed leaderboards, reward systems, and monetized skip mechanics. 
    Built using modular handlers for leaderboards, shop systems, and troll detection.

    **Visits:** 160,000+ players  
    **Core Systems:** Economy, leaderboard tracking, shop purchases, troll events.
    `,
    },
    {
    slug: "robgame-prototype",
    category: "personal",
    title: "RobGame (Prototype)",
    summary:
        "Base-building sandbox prototype focused on creative freedom and player-driven expansion.",
    image: "/projects/robgame.png",
    tech: ["Lua", "Luau", "Roblox Studio"],
    body: `
    An early-stage *build-your-base* experience emphasizing creativity, cooperative construction, and persistent world saving.
    Features include a modular placement system, snapping grid, and local session saves. 
    Designed as a foundation for future multiplayer expansion.
    `,
    },
];

export function byCategory(cat: ProjectCategory) {
  return projects.filter((p) => p.category === cat);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function allSlugs() {
  return projects.map((p) => p.slug);
}
