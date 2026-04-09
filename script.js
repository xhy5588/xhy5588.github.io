const portfolioData = {
  profile: {
    name: "Hongyuan Xu",
    photo: "https://avatars.githubusercontent.com/u/98236352?v=4",
    titles: [
      "M.S. Candidate in Computer Science, Northwestern University",
      "Research Assistant in modular robotics and embodied AI",
      "Focused on robot vision, reinforcement learning, and autonomous systems"
    ],
    biography: [
      "I am currently pursuing an M.S. in Computer Science at Northwestern University, where I build systems that connect simulation, learning, and deployment. My current research focuses on reinforcement learning for modular robots that can be recombined into new morphologies, with an emphasis on control policies that remain effective as the body changes.",
      "My background also includes multi-robot monitoring infrastructure, autonomous driving evaluation pipelines, robot vision, and practical AI tooling for technical systems. I am especially interested in work where perception, control, systems engineering, and applied machine learning need to come together on real robotic platforms."
    ],
    interests: [
      "Reinforcement learning for modular and legged robots",
      "Robot vision and perception for real-world autonomy",
      "Simulation-to-real transfer and evaluation infrastructure",
      "Applied AI interfaces and tooling for robotics workflows"
    ]
  },
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
    }
  ],
  links: [
    {
      label: "GitHub",
      value: "github.com/xhy5588",
      href: "https://github.com/xhy5588"
    },
    {
      label: "Resume",
      value: "Open PDF resume",
      href: "Hongyuan_s_resume.pdf"
    },
    {
      label: "Project Site",
      value: "modularlegs.github.io",
      href: "https://modularlegs.github.io/"
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
      meta: "Sep 2020 - May 2024 | GPA 3.74"
    }
  ],
  featuredProject: {
    title: "Agile Legged Locomotion in Reconfigurable Modular Robots",
    meta: "Isaac Lab, reinforcement learning, modular robotics | Current work",
    text:
      "I am working on a universal controller for modular robots, training a shared policy that can transfer across reconfigurable robot morphologies instead of being limited to a single body design.",
    highlights: [
      "Training shared control policies for legged robot modules that can be reassembled into different robot bodies.",
      "Focusing on morphology-aware reinforcement learning and generalization across changing robot structures.",
      "Building toward more reliable sim-to-real deployment for modular robotic systems."
    ],
    links: [
      {
        label: "Project site",
        href: "https://modularlegs.github.io/"
      },
      {
        label: "Code",
        href: "https://github.com/Chenaah/modularlegs"
      }
    ],
    note:
      "Video embedded from Northwestern University coverage published on March 6, 2026. The related project site also provides media under CC BY 4.0.",
    videoEmbed: "https://www.youtube.com/embed/kelysQlBnao?rel=0&modestbranding=1"
  },
  projects: [
    {
      title: "Autonomous Robotic System for Target Object Search",
      meta: "Python, ROS, RViz | Jan 2024 - Jun 2024",
      text:
        "Built a Triton robot pipeline for target-object search in known environments using Monte Carlo localization, LiDAR and odometry, RealSense color-depth sensing, and LED-ring feedback for target direction.",
      links: [
        {
          label: "Open report",
          href: "603_FinalProj_D4.pdf"
        }
      ]
    },
    {
      title: "Reinforcement Learning Control for Wheeled Robot",
      meta: "Python, PyTorch, ROS | Sep 2023 - Dec 2023",
      text:
        "Trained a DDPG agent in Gazebo for continuous robot control, then deployed it to a real robot with low sim-to-real degradation and accurate tracking in a constrained maze.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/xhy5588"
        }
      ]
    },
    {
      title: "AV Corner Cases",
      meta: "Autonomous systems safety, perception, and multimodal analysis",
      text:
        "Built a reproducible workflow for autonomous vehicle corner scenarios, combining object detection, scene reasoning, and analyst-driven risk scoring across camera-only and multimodal stacks.",
      links: [
        {
          label: "Open report",
          href: "main (2).pdf"
        },
        {
          label: "Repository",
          href: "https://github.com/xhy5588/AV-Corner-Cases"
        }
      ]
    }
  ],
  experience: [
    {
      role: "Research Assistant (RL and Modular Robotics)",
      org: "Xenobot / Living Machines Lab",
      date: "Nov 2025 - Present",
      summary:
        "Implementing reinforcement learning controllers for modular robots in Isaac Lab across multiple morphologies, with a focus on sim-to-real transfer, sensor-noise modeling, and more reliable deployment on physical hardware."
    },
    {
      role: "Graduate Research Assistant",
      org: "Northwestern University Robotics Lab",
      date: "Jan 2025 - Nov 2025",
      summary:
        "Built multi-robot monitoring infrastructure for real-time telemetry and command streaming, including a Raspberry Pi base station that supported coordination workflows for more than 10 drones."
    },
    {
      role: "End-to-End Self-Driving Algorithm Developer",
      org: "LightWheel AI",
      date: "Aug 2024 - Nov 2024",
      summary:
        "Developed simulation and benchmarking pipelines integrating nuScenes and nuPlan to evaluate state-of-the-art autonomous driving models across more than 2,000 scenarios."
    },
    {
      role: "Undergraduate Research Assistant",
      org: "University of Massachusetts Amherst",
      date: "May 2023 - Jun 2024",
      summary:
        "Designed a high-fidelity Carla simulation of the UMass campus, integrated multiple perception and control models, and built a computer vision system for object matching under low-overlap conditions."
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

function renderTitles() {
  const container = document.getElementById("profile-titles");
  portfolioData.profile.titles.forEach((title) => {
    container.appendChild(createElement("p", "title-line", title));
  });
}

function renderBiography() {
  const container = document.getElementById("about-text");
  portfolioData.profile.biography.forEach((paragraph) => {
    container.appendChild(createElement("p", "", paragraph));
  });
}

function renderInterests() {
  const container = document.getElementById("focus-list");
  portfolioData.profile.interests.forEach((item) => {
    container.appendChild(createElement("p", "interest-item", item));
  });
}

function renderSidebarList(targetId, items) {
  const container = document.getElementById(targetId);
  items.forEach((item) => {
    const article = createElement(
      "article",
      "sidebar-item",
      `<p class="sidebar-label">${item.label}</p>
      <a class="sidebar-link" href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>`
    );
    container.appendChild(article);
  });
}

function renderEducation() {
  const container = document.getElementById("education-list");
  portfolioData.education.forEach((item) => {
    const article = createElement(
      "article",
      "education-item",
      `<h3>${item.school}</h3>
      <p>${item.degree}</p>
      <p class="education-meta">${item.meta}</p>`
    );
    container.appendChild(article);
  });
}

function renderFeaturedProject() {
  const project = portfolioData.featuredProject;
  document.getElementById("featured-project-meta").textContent = project.meta;
  document.getElementById("featured-project-title").textContent = project.title;
  document.getElementById("featured-project-text").textContent = project.text;
  document.getElementById("featured-project-note").textContent = project.note;
  document.getElementById("featured-project-video").src = project.videoEmbed;

  const highlights = document.getElementById("featured-project-highlights");
  project.highlights.forEach((item) => {
    highlights.appendChild(createElement("li", "", item));
  });

  const actions = document.getElementById("featured-project-actions");
  project.links.forEach((link) => {
    const anchor = createElement("a", "project-link", link.label);
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    actions.appendChild(anchor);
  });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  portfolioData.projects.forEach((project) => {
    const article = createElement("article", "project-item");
    const links = createElement("div", "project-actions");

    project.links.forEach((link) => {
      const anchor = createElement("a", "project-link", link.label);
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      links.appendChild(anchor);
    });

    article.innerHTML = `
      <p class="project-meta">${project.meta}</p>
      <h3>${project.title}</h3>
      <p>${project.text}</p>
    `;
    article.appendChild(links);
    container.appendChild(article);
  });
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  portfolioData.experience.forEach((item) => {
    const article = createElement(
      "article",
      "experience-item",
      `<p class="experience-date">${item.date}</p>
      <div class="experience-body">
        <h3>${item.role}</h3>
        <p>${item.org}</p>
        <p>${item.summary}</p>
      </div>`
    );
    container.appendChild(article);
  });
}

function renderPortfolio() {
  document.getElementById("profile-name").textContent = portfolioData.profile.name;
  document.getElementById("avatar").src = portfolioData.profile.photo;

  renderTitles();
  renderBiography();
  renderInterests();
  renderSidebarList("contact-list", portfolioData.contact);
  renderSidebarList("links-list", portfolioData.links);
  renderEducation();
  renderFeaturedProject();
  renderProjects();
  renderExperience();
}

renderPortfolio();
