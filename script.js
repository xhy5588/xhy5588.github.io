const portfolioData = {
  profile: {
    name: "Hongyuan Xu",
    role: "Robot vision, embodied AI, and learning-based autonomy",
    avatar: "https://avatars.githubusercontent.com/u/98236352?v=4",
    title:
      "I build robots that can see, learn, and adapt.",
    summary:
      "My work sits at the intersection of robot vision, reinforcement learning, simulation, and real-world autonomy. I care about turning research ideas into reliable systems, from modular legged robots and drone infrastructure to AV safety analysis and practical AI tooling.",
    calloutTitle:
      "Training a universal control brain for modular robots",
    calloutText:
      "I am currently training a universal controller for modular robots so a shared policy can adapt across different robot morphologies. The work centers on reinforcement learning, morphology-aware control, and building a controller that can generalize as the robot body changes.",
    about:
      "I am currently pursuing an M.S. in Computer Science at Northwestern University, building systems that connect simulation, learning, and real-world robotics. My current work includes reinforcement learning for reconfigurable modular robots, where agile legged modules can be recombined into new robot morphologies. My background also includes multi-robot monitoring infrastructure, autonomous driving evaluation pipelines, computer vision research, and growing interest in agentic AI and LLM interfaces for technical systems.",
    signature:
      "Interested in robotics roles where control, learning, perception, systems engineering, and AI tools meet.",
    github: "https://github.com/xhy5588"
  },
  focus: [
    "Robot vision and perception",
    "Reconfigurable modular robots",
    "Reinforcement learning for robotics",
    "Simulation to real deployment",
    "Autonomous systems evaluation",
    "Agentic AI and LLM-powered tooling"
  ],
  heroTags: [
    "Modular legged robots",
    "Robot vision",
    "Embodied AI",
    "Sim-to-real RL",
    "AV safety analysis",
    "LLM tooling"
  ],
  facts: [
    { value: "M.S.", label: "Computer Science at Northwestern" },
    { value: "4+", label: "Research and engineering roles" },
    { value: "10+", label: "Drones coordinated in one system" },
    { value: "2000+", label: "Autonomous driving scenarios benchmarked" }
  ],
  capabilities: [
    {
      title: "Robotics Learning",
      text:
        "Training control policies with DDPG, PPO, and SAC for locomotion and navigation tasks across simulated and physical robots."
    },
    {
      title: "Perception and Vision",
      text:
        "Building vision systems and evaluation pipelines that turn sensor data, image streams, and telemetry into reliable decisions."
    },
    {
      title: "Simulation Infrastructure",
      text:
        "Working in Isaac Lab, Gazebo, MuJoCo, Carla, and related environments to make experiments reproducible and deployment-aware."
    },
    {
      title: "Agentic AI and LLM Tools",
      text:
        "Using multimodal language models and tool-using AI workflows to interpret scenes, support analysis pipelines, and make technical systems easier to inspect and operate."
    }
  ],
  skillGroups: [
    {
      title: "Robotics",
      text:
        "Reinforcement Learning, PID Control, SLAM, Sensor Fusion",
      tags: ["DDPG", "PPO", "SAC", "SLAM", "Sensor Fusion", "PID"]
    },
    {
      title: "Simulation",
      text:
        "Isaac Lab, MuJoCo, Gazebo, Carla, Domain Randomization, Sim-to-Real",
      tags: ["Isaac Lab", "MuJoCo", "Gazebo", "Carla", "Sim-to-Real"]
    },
    {
      title: "Software",
      text:
        "Python, C++, ROS, ROS2, PyTorch, Linux, Docker, Git, CI/CD",
      tags: ["Python", "C++", "ROS2", "PyTorch", "Linux", "Docker"]
    },
    {
      title: "Autonomy",
      text:
        "Self-driving evaluation, multi-robot systems, telemetry backends, benchmark automation",
      tags: ["Autonomous Driving", "Telemetry", "Benchmarking", "Distributed Systems"]
    },
    {
      title: "AI Systems",
      text:
        "Agent workflows, multimodal LLM and VLM-assisted tooling, research support interfaces, and applied machine learning systems",
      tags: ["LLMs", "VLMs", "Agentic AI", "Workflow Tools", "Applied ML"]
    }
  ],
  experience: [
    {
      role: "Research Assistant (RL and Modular Robotics)",
      org: "Xenobot / Living Machines Lab",
      date: "Nov 2025 - Present",
      bullets: [
        "Implementing reinforcement learning controllers for modular robots from Reconfigurable Legged Metamachines in Isaac Lab across multiple morphologies.",
        "Building a sim-to-real workflow for physical modular legs with actuation calibration, sensor-noise modeling, and domain randomization.",
        "Reducing deployment failures by connecting training assumptions more closely to real hardware behavior."
      ]
    },
    {
      role: "Graduate Research Assistant",
      org: "Northwestern University Robotics Lab",
      date: "Jan 2025 - Nov 2025",
      bullets: [
        "Architected a multi-robot monitoring backend streaming voltage, command queues, and telemetry logs for real-time fleet diagnostics.",
        "Built a Raspberry Pi base-station that fused OptiTrack streams and broadcast high-level commands such as take-off, hover, land, and emergency stop.",
        "Supported coordination workflows for 10+ drones in a shared robotics environment."
      ]
    },
    {
      role: "End-to-End Self-Driving Algorithm Developer",
      org: "LightWheel AI",
      date: "Aug 2024 - Nov 2024",
      bullets: [
        "Built simulation pipelines integrating nuScenes and nuPlan to evaluate state-of-the-art autonomous driving models in open-loop and closed-loop settings.",
        "Automated benchmarking for more than 2,000 scenarios by feeding camera frames into end-to-end models and comparing outputs to ground truth labels.",
        "Helped scale UniAD and VAD training from nuScenes to nuPlan to improve model generalization and reliability."
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      org: "University of Massachusetts Amherst",
      date: "May 2023 - Jun 2024",
      bullets: [
        "Designed a high-fidelity Carla simulation of the UMass campus to evaluate self-driving algorithms.",
        "Integrated multiple perception and control models to broaden robustness evaluation across diverse driving scenarios.",
        "Built a computer vision system for object matching under low-overlap and bandwidth-constrained conditions."
      ]
    }
  ],
  projects: [
    {
      title: "Agile Legged Locomotion in Reconfigurable Modular Robots",
      meta: "Isaac Lab, reinforcement learning, modular robotics | Current work",
      text:
        "Working on a universal controller for modular robots, training a shared control policy that can transfer across reconfigurable robot morphologies instead of being limited to a single body design.",
      highlights: [
        "Training a universal control brain for modular leg systems that can be recombined into different robot bodies.",
        "Focusing on reinforcement learning, morphology-aware policy design, and generalization across changing robot structures.",
        "Connected to the broader reconfigurable modular robotics effort at Northwestern."
      ],
      primaryLink: "https://modularlegs.github.io/",
      primaryText: "Open project site"
    },
    {
      title: "Autonomous Robotic System for Target Object Search",
      meta: "Python, ROS, RViz | Jan 2024 - Jun 2024",
      text:
        "Built a Triton robot pipeline for target-object search in known environments using Monte Carlo localization, LiDAR and odometry, RealSense color-depth sensing, and LED-ring feedback for human-readable target direction.",
      highlights: [
        "Adapted localization and wall-following ideas to the physical robot and explored Monte Carlo localization, gmapping, and navigation workflows.",
        "Used HSV color thresholding plus depth-based coordinate recovery to estimate object position from synchronized color and depth streams.",
        "Converted target coordinates into LED ring direction cues so the robot could keep indicating target direction even after the object left the camera view."
      ],
      primaryLink: "603_FinalProj_D4.pdf",
      primaryText: "Open report",
      secondaryLink: "https://github.com/xhy5588",
      secondaryText: "GitHub"
    },
    {
      title: "Reinforcement Learning Control for Wheeled Robot",
      meta: "Python, PyTorch, ROS | Sep 2023 - Dec 2023",
      text:
        "Trained a DDPG agent in Gazebo for continuous robot control, then deployed it to a real robot with less than 5 percent sim-to-real degradation and less than 10 cm tracking error through a constrained maze.",
      highlights: [
        "Focused on continuous control and sim-to-real transfer for physical navigation.",
        "Validated robust motion in a 10 meter maze with narrow corridors and U-turns.",
        "Used the project as a foundation for later robotics learning and deployment work."
      ],
      primaryLink: "https://github.com/xhy5588",
      primaryText: "GitHub"
    },
    {
      title: "Classroom Engagement Detection",
      meta: "Python, OpenCV, MediaPipe",
      text:
        "Built a lightweight real-time classroom engagement system that classifies online lecture behaviors from webcam video using MediaPipe landmarks, engineered geometric features, temporal smoothing, and sequence-aware models.",
      highlights: [
        "Collected roughly 32,000 labeled samples across 10 participants, 8 classroom behaviors, and multiple lighting conditions.",
        "Engineered features such as mouth aspect ratio, eye aspect ratio, eyebrow distance, and wrist-to-shoulder geometry, then compared a statistical temporal window against an LSTM.",
        "Deployed a CPU-friendly OpenCV pipeline using a Random Forest classifier to predict actions and compute an overall engagement score in real time."
      ],
      primaryLink: "CS_496___ML___Sensing___Final_Project_Report-1.pdf",
      primaryText: "Open report",
      secondaryLink: "https://github.com/xhy5588/Classroom-Engagement-Detection",
      secondaryText: "Repository"
    },
    {
      title: "AV Corner Cases",
      meta: "Autonomous systems safety, perception, and multimodal analysis",
      text:
        "Built a reproducible red-teaming workflow for autonomous vehicle corner scenarios, combining YOLOv8n object detection, Qwen2-VL-2B-Instruct scene reasoning, and analyst-driven risk scoring across camera-only and multi-modal stacks.",
      highlights: [
        "Analyzed four high-risk scenarios including school-bus violations, adversarial 2D objects, high-beam sensor blinding, and conflicting construction-zone lane geometry.",
        "Designed a structured scoring rubric around detection continuity, object-state consistency, planner consequence, and injury severity instead of relying only on narrative judgments.",
        "Used VLM outputs as advisory context while anchoring final risk assessment to measurable detection behavior and physical plausibility checks."
      ],
      primaryLink: "main (2).pdf",
      primaryText: "Open report",
      secondaryLink: "https://github.com/xhy5588/AV-Corner-Cases",
      secondaryText: "Repository"
    }
  ],
  education: [
    {
      school: "Northwestern University",
      degree: "Master of Science in Computer Science",
      meta: "Expected Jun 2026 | GPA 3.75"
    },
    {
      school: "University of Massachusetts Amherst",
      degree: "Bachelor of Science in Computer Science",
      meta: "Sep 2020 - May 2024 | GPA 3.74 | Dean's List"
    }
  ],
  contact: [
    {
      label: "Email",
      value: "xhy2001923@outlook.com",
      href: "mailto:xhy2001923@outlook.com"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hongyuan-xu-1b9a00294",
      href: "https://linkedin.com/in/hongyuan-xu-1b9a00294"
    },
    {
      label: "GitHub",
      value: "github.com/xhy5588",
      href: "https://github.com/xhy5588"
    },
    {
      label: "Resume",
      value: "Open PDF resume",
      href: "Hongyuan_s_resume.pdf"
    }
  ]
};

function createElement(tag, className, html) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (html) {
    element.innerHTML = html;
  }
  return element;
}

function createTagRow(tags) {
  const row = createElement("div", "tag-row");
  tags.forEach((tag) => {
    row.appendChild(createElement("span", "tag", tag));
  });
  return row;
}

function renderFacts() {
  const container = document.getElementById("hero-facts");
  portfolioData.facts.forEach((fact) => {
    const card = createElement(
      "article",
      "fact-card",
      `<strong>${fact.value}</strong><span>${fact.label}</span>`
    );
    container.appendChild(card);
  });
}

function renderFocus() {
  const container = document.getElementById("focus-list");
  portfolioData.focus.forEach((item) => {
    container.appendChild(createElement("div", "focus-chip", item));
  });
}

function renderHeroTags() {
  const container = document.getElementById("hero-tags");
  portfolioData.heroTags.forEach((item) => {
    container.appendChild(createElement("span", "hero-tag", item));
  });
}

function renderCapabilities() {
  const container = document.getElementById("capability-grid");
  portfolioData.capabilities.forEach((item) => {
    const card = createElement(
      "article",
      "capability-card",
      `<h3>${item.title}</h3><p>${item.text}</p>`
    );
    container.appendChild(card);
  });
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  portfolioData.skillGroups.forEach((group) => {
    const card = createElement(
      "article",
      "skill-card",
      `<h3>${group.title}</h3><p>${group.text}</p>`
    );
    card.appendChild(createTagRow(group.tags));
    container.appendChild(card);
  });
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  portfolioData.experience.forEach((item) => {
    const article = createElement("article", "experience-item");
    const listItems = item.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

    article.innerHTML = `
      <div class="experience-head">
        <div class="experience-body">
          <h3>${item.role}</h3>
          <p>${item.org}</p>
        </div>
        <span class="date-badge">${item.date}</span>
      </div>
      <ul class="bullet-list">${listItems}</ul>
    `;

    container.appendChild(article);
  });
}

function renderProjects() {
  const container = document.getElementById("project-grid");
  portfolioData.projects.forEach((project) => {
    const card = createElement("article", "project-card");
    const highlights = project.highlights
      ? `<ul class="bullet-list">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
    const secondaryLink = project.secondaryLink
      ? `<a class="project-link" href="${project.secondaryLink}" target="_blank" rel="noreferrer">${project.secondaryText}</a>`
      : "";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p class="project-meta">${project.meta}</p>
      <p>${project.text}</p>
      ${highlights}
      <div class="project-actions">
        <a class="project-link" href="${project.primaryLink}" target="_blank" rel="noreferrer">${project.primaryText}</a>
        ${secondaryLink}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderEducation() {
  const container = document.getElementById("education-list");
  portfolioData.education.forEach((item) => {
    const card = createElement(
      "article",
      "education-card",
      `<h3>${item.school}</h3><p>${item.degree}</p><p class="education-meta">${item.meta}</p>`
    );
    container.appendChild(card);
  });
}

function renderContact() {
  const container = document.getElementById("contact-grid");
  portfolioData.contact.forEach((item) => {
    const link = createElement(
      "a",
      "contact-link",
      `<span>${item.label}</span><span>${item.value}</span>`
    );

    link.href = item.href;

    if (item.href.startsWith("http") || item.href.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    container.appendChild(link);
  });
}

const gameState = {
  size: 5,
  robot: { x: 0, y: 0 },
  target: { x: 0, y: 0 },
  obstacles: [],
  moves: 0,
  wins: 0,
  best: null,
  sensorRange: 4
};

function keyForCell(x, y) {
  return `${x},${y}`;
}

function randomCell() {
  return {
    x: Math.floor(Math.random() * gameState.size),
    y: Math.floor(Math.random() * gameState.size)
  };
}

function sameCell(a, b) {
  return a.x === b.x && a.y === b.y;
}

function getDistance(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function isVisibleToSensor(x, y) {
  return getDistance(gameState.robot, { x, y }) <= gameState.sensorRange;
}

function createGameCell(x, y) {
  const cell = createElement("div", "game-cell");
  const obstacleSet = new Set(gameState.obstacles.map((item) => keyForCell(item.x, item.y)));
  const visible = isVisibleToSensor(x, y) || sameCell(gameState.robot, { x, y });

  if (!visible) {
    cell.classList.add("fog");
  }

  if (visible && obstacleSet.has(keyForCell(x, y))) {
    cell.classList.add("obstacle");
  }

  if (visible && sameCell(gameState.target, { x, y })) {
    cell.classList.add("target");
  }

  if (sameCell(gameState.robot, { x, y })) {
    cell.classList.add("robot");
  }

  return cell;
}

function getBearing() {
  const dx = gameState.target.x - gameState.robot.x;
  const dy = gameState.target.y - gameState.robot.y;
  const vertical = dy < 0 ? "north" : dy > 0 ? "south" : "";
  const horizontal = dx < 0 ? "west" : dx > 0 ? "east" : "";

  if (!vertical && !horizontal) {
    return "Target locked";
  }

  return [vertical, horizontal].filter(Boolean).join("-");
}

function updateGameStatus(message) {
  const distance = getDistance(gameState.target, gameState.robot);
  const hasTargetLock = distance <= gameState.sensorRange;
  const rangeName = gameState.sensorRange >= 4 ? "Wide" : gameState.sensorRange >= 2 ? "Mid" : "Tight";

  document.getElementById("game-sensor").textContent =
    distance === 0
      ? "Beacon acquired"
      : hasTargetLock
        ? `${getBearing()} | range ${distance}`
        : `No lock | scan radius ${gameState.sensorRange}`;
  document.getElementById("game-hint").textContent =
    message
    || (hasTargetLock
      ? "Beacon is inside sensor range. Use the bearing and visible obstacles to route efficiently."
      : "Beacon is outside sensor range. Move and rescan to reacquire the target.");
  document.getElementById("game-stats").textContent =
    `${gameState.moves} moves | ${gameState.wins} wins | ${rangeName}`;
  document.getElementById("game-score").textContent =
    gameState.best === null ? "Best run: not set yet" : `Best run: ${gameState.best} moves`;
}

function renderGameBoard() {
  const board = document.getElementById("game-board");
  board.innerHTML = "";

  for (let y = 0; y < gameState.size; y += 1) {
    for (let x = 0; x < gameState.size; x += 1) {
      board.appendChild(createGameCell(x, y));
    }
  }
}

function placeGameEntities() {
  const taken = new Set();

  gameState.robot = { x: 0, y: 0 };
  taken.add(keyForCell(gameState.robot.x, gameState.robot.y));

  do {
    gameState.target = randomCell();
  } while (taken.has(keyForCell(gameState.target.x, gameState.target.y)));
  taken.add(keyForCell(gameState.target.x, gameState.target.y));

  gameState.obstacles = [];
  while (gameState.obstacles.length < 4) {
    const obstacle = randomCell();
    const key = keyForCell(obstacle.x, obstacle.y);
    if (!taken.has(key)) {
      gameState.obstacles.push(obstacle);
      taken.add(key);
    }
  }
}

function resetGame(message) {
  gameState.moves = 0;
  placeGameEntities();
  renderGameBoard();
  updateGameStatus(message || "New map loaded. Find the beacon.");
}

function tryMoveRobot(direction) {
  const deltas = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  };

  const delta = deltas[direction];
  if (!delta) {
    return;
  }

  const next = {
    x: gameState.robot.x + delta.x,
    y: gameState.robot.y + delta.y
  };

  if (next.x < 0 || next.y < 0 || next.x >= gameState.size || next.y >= gameState.size) {
    updateGameStatus("Boundary reached. Try another direction.");
    return;
  }

  if (gameState.obstacles.some((item) => sameCell(item, next))) {
    updateGameStatus("Obstacle detected. Re-route the rover.");
    return;
  }

  gameState.robot = next;
  gameState.moves += 1;
  renderGameBoard();

  if (sameCell(gameState.robot, gameState.target)) {
    gameState.wins += 1;
    gameState.best = gameState.best === null ? gameState.moves : Math.min(gameState.best, gameState.moves);
    updateGameStatus("Mission complete. New map generated.");
    window.setTimeout(() => resetGame("Beacon relocated. Ready for the next run."), 900);
    return;
  }

  updateGameStatus();
}

function initializeGame() {
  document.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => {
      tryMoveRobot(button.dataset.move);
    });
  });

  document.querySelectorAll("[data-range]").forEach((button) => {
    button.addEventListener("click", () => {
      gameState.sensorRange = Number(button.dataset.range);
      document.querySelectorAll("[data-range]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderGameBoard();
      updateGameStatus(`Sensor range changed to ${button.textContent}.`);
    });
  });

  document.getElementById("game-reset").addEventListener("click", () => {
    resetGame("Fresh map generated.");
  });

  window.addEventListener("keydown", (event) => {
    const directionByKey = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right"
    };

    const direction = directionByKey[event.key];
    if (direction) {
      event.preventDefault();
      tryMoveRobot(direction);
    }
  });

  resetGame();
}

function renderPortfolio() {
  document.getElementById("hero-title").innerHTML = portfolioData.profile.title;
  document.getElementById("hero-summary").textContent = portfolioData.profile.summary;
  document.getElementById("hero-callout-title").textContent = portfolioData.profile.calloutTitle;
  document.getElementById("hero-callout-text").textContent = portfolioData.profile.calloutText;
  document.getElementById("about-text").textContent = portfolioData.profile.about;
  document.getElementById("signature-line").textContent = portfolioData.profile.signature;
  document.getElementById("profile-name").textContent = portfolioData.profile.name;
  document.getElementById("profile-role").textContent = portfolioData.profile.role;
  document.getElementById("avatar").src = portfolioData.profile.avatar;
  document.getElementById("github-link").href = portfolioData.profile.github;

  renderHeroTags();
  renderFocus();
  renderFacts();
  renderCapabilities();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();
  initializeGame();
}

renderPortfolio();
