type ProjectItem = {
  name: string;
  desc: string;
  alt: string;
  src: string;
  href: string;
};

type ProjectGroup = {
  title: string;
  items: ProjectItem[];
};

export const PROJECTS_CONFIG: Record<string, ProjectGroup> = {
  course: {
    title: "Course",
    items: [
      {
        name: "Mancala Board Game",
        desc: "Turn-based Mancala game built in Java. Implements game rules, valid move checks, undo support, and end-game detection. Focused on clean logic and correct game flow.",
        alt: "Mancala",
        src: "/mancala.jpg",
        href: "https://github.com/namng2/cs151group",
      },
      {
        name: "Procedural Jersey Generator",
        desc: "A small DSL for describing soccer jerseys. Includes a lexer, parser, semantic checker, and SVG renderer. Comes with a web playground to preview generated designs.",
        alt: "Procedural Jersey Generator",
        src: "/dsl.png",
        href: "https://github.com/hereisben/procedural-jersey-generator",
      },
      {
        name: "2D Platformer Game",
        desc: "2D platformer built with Unity and deployed to WebGL. Programming, UI, sound, and deployment handled end to end. Level design and assets handled by a teammate.",
        alt: "Bouncy Quest",
        src: "/bouncy.jpg",
        href: "https://github.com/hereisben/bouncy-quest",
      },
      {
        name: "ServicesFinder",
        desc: "Android app that connects service providers with customers. Built with Java and Firebase. Supports search, filtering, reviews, favorites, and multi-language UI.",
        alt: "ServicesFinder Android App",
        src: "/servicesfinder.png",
        href: "https://github.com/vananhtran02/ServicesFinder",
      },
      {
        name: "Messi Career Journey",
        desc: "Interactive net art project that reveals Lionel Messi’s career through a puzzle-style grid. Users turn on a light to uncover milestones, with videos playing for each key moment.",
        alt: "Messi Career Journey Net Art",
        src: "/messi.png",
        href: "https://hereisben.github.io/net-art-project/",
      },
      {
        name: "The Networked Plant Project",
        desc: "Real-time net art experience where users grow a shared digital plant world through presence, whispers, and mood. Built with Socket.IO and HTML5 Canvas.",
        alt: "The Networked Plant Project",
        src: "/networkself.jpg",
        href: "https://github.com/hereisben/the-network-self",
      },
    ],
  },
  personal: {
    title: "Personal",
    items: [
      {
        name: "Procedural Jersey Generator",
        desc: "A small DSL for describing soccer jerseys. Includes a lexer, parser, semantic checker, and SVG renderer. Comes with a web playground to preview generated designs.",
        alt: "Procedural Jersey Generator",
        src: "/dsl.png",
        href: "https://github.com/hereisben/procedural-jersey-generator",
      },
      {
        name: "BenNotes App",
        desc: "Full-stack note-taking app using MongoDB, Express, React, and Node. Supports CRUD operations, authentication, and rate limiting. Deployed with a production-ready API setup.",
        alt: "BenNotes App",
        src: "/mern.png",
        href: "https://github.com/hereisben/ben-mern-stack-notes-app?tab=readme-ov-file",
      },
      {
        name: "Messi Career Journey",
        desc: "Interactive net art project that reveals Lionel Messi’s career through a puzzle-style grid. Users turn on a light to uncover milestones, with videos playing for each key moment.",
        alt: "Messi Career Journey Net Art",
        src: "/messi.png",
        href: "https://hereisben.github.io/net-art-project/",
      },
      {
        name: "The Networked Plant Project",
        desc: "Real-time net art experience where users grow a shared digital plant world through presence, whispers, and mood. Built with Socket.IO and HTML5 Canvas.",
        alt: "The Networked Plant Project",
        src: "/networkself.jpg",
        href: "https://github.com/hereisben/the-network-self",
      },
    ],
  },
  team: {
    title: "Team",
    items: [
      {
        name: "2D Platformer Game",
        desc: "2D platformer built with Unity and deployed to WebGL. Programming, UI, sound, and deployment handled end to end. Level design and assets handled by a teammate.",
        alt: "Bouncy Quest",
        src: "/bouncy.jpg",
        href: "https://github.com/hereisben/bouncy-quest",
      },
      {
        name: "Mancala Board Game",
        desc: "Turn-based Mancala game built in Java. Implements game rules, valid move checks, undo support, and end-game detection. Focused on clean logic and correct game flow.",
        alt: "Mancala",
        src: "/mancala.jpg",
        href: "https://github.com/namng2/cs151group",
      },
      {
        name: "ServicesFinder",
        desc: "Android app that connects service providers with customers. Built with Java and Firebase. Supports search, filtering, reviews, favorites, and multi-language UI.",
        alt: "ServicesFinder Android App",
        src: "/servicesfinder.png",
        href: "https://github.com/vananhtran02/ServicesFinder",
      },
    ],
  },
};
