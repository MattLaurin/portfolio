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

    What I did :
       - Datamanager/datainit/profile service
       - Offline cooking
       - Cooking system
       - Object placement system
       - Brainrot Placement system (for cooking)
       - Brainrot spawning system (similar to Steal a brainrot)
       - Brainrot pick up system (client-sided so everyone can pick up a copy)
       - Inventory system with categories
       - Sell NPC  (inventory, held item, see value)
       - Tools / ovens system. (Different attributes for different type of ovens)
       - Rebirth System
       - Rotation/Editing of previously placed Ovens
       - Automatic Plot assigning system
       - Plot placed items saving system
       - Automatic Mythic spawning (every 15mins)
       - Leftover shop --> Missed brainrots go in that shop so people can buy it for money
       - Premium store (gamepass and money for monetization)
       - Mutations / Events
       - Weight system that's random on every spawn
       - Placement system with a preview for the brainrots and the oven's

    **Video On Request**
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

    Task for this game :
       - Datamanager/Datainit / Datasaving with ProfileService
       - Troll options for robux
       - Troll option buttons
       - Group unlocked door
       - Donation chest
       - Nuke button
       - Troll menu options
       - Pay to get back up  feature
       - Disapearing platforms / walls
       - Mines / explosions
       - Ice platforms
       - Daily Reward with playtime
       - Leaderboard system
       - Admin Panel
       - Exagerated Physics for the slapping related stuff

    **Visits:** 160,000+ players  
    https://www.roblox.com/share?code=dffcbb6ea9bc8b4cbf66275f7dd5256c&type=ExperienceDetails&stamp=1760577246919
    **Core Systems:** Economy, leaderboard tracking, shop purchases, troll events.
    `,
    },
    {
    slug: "robgame-prototype",
    category: "personal",
    title: "Hang Off My Loot!",
    summary:
        "Base-building game where you protect your loot by building structures, placing traps and shooting bandits",
    image: "/projects/hangofftheloot.png",
    tech: ["Lua", "Luau", "Roblox Studio"],
    body: `
    A soon-to-be released multiplayer base-defense game where players gather gold to buy structures, weapons, turrets and defend their
    loot from waves of bandits. Features include dynamic building placement, turret system, plot system, weapon system, etc.

    **Expected release date** : Oct 2025
    `,
    },
    {
    slug: "DefendTheBrainrot",
    category: "personal",
    title: "Defend The Brainrot",
    summary:
        "Wave-based survival game where you protect a brainrot in your base from waves of incoming zombies and bosses. Earn money and complete quests for better weapons and defenses.",
    image: "/projects/defendthebrainrot.jpg",
    tech: ["Lua", "Luau", "Roblox Studio"],
    body: `
    A soon-to-be released multiplayer base-defense game where players gather cash to
    buy weapons, traps and defend their brainrot from waves of zombies. 
    Features include dynamic trap placement, weapon system, zombie AI, boss fights, etc.

    Tasks : 
 
       - Gun system
       - Ammo shop
       - Gun shop
       - Traps shop
       - Traps system
       - Traps placement system
       - ZombieAI
       - Zombie Spawning
       - Task system
       - Task UI
       - Brainrot health system / game restarting system
       - Matchmaking
       - Lobby system
       - Weapon mods system (RNG)
       - Boss system
       - Optimization, etc.
       - Down system (with revive)

    **Expected release date** : Q4 2025
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
