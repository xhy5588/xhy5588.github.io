const portfolioData = {
  "profile": {
    "name": "Hongyuan Xu",
    "photos": [
      {
        "src": "assets/portrait-outdoors.jpg",
        "alt": "Hongyuan Xu outdoors in a white shirt"
      },
      {
        "src": "assets/portrait-canyon.jpg",
        "alt": "Hongyuan Xu in a sandstone canyon"
      },
      {
        "src": "assets/portrait-red-rocks.jpg",
        "alt": "Hongyuan Xu sitting among red rocks"
      },
      {
        "src": "assets/portrait-graduation.jpg",
        "alt": "Hongyuan Xu at his University of Massachusetts graduation"
      }
    ],
    "titles": [
      "M.S. Candidate in Computer Science, Northwestern University",
      "Research Assistant in reinforcement learning and modular robotics",
      "Focused on robot manipulation, locomotion, and sim-to-real transfer"
    ],
    "biography": [
      "I am pursuing an M.S. in Computer Science at Northwestern University, with expected graduation in December 2026. As a research assistant in the Xenobot / Living Machines Lab, I develop reinforcement-learning controllers for reconfigurable modular legs in Isaac Lab and build sim-to-real workflows through actuation calibration, sensor-noise modeling, and domain randomization.",
      "My work spans robot design, simulation, and learning-based control. I am building a modular 6-DOF robot arm and have developed a teacher-student locomotion controller for unseen robot topologies in MuJoCo. My background also includes multi-robot telemetry and drone coordination, autonomous driving evaluation, and ROS-based mapping and exploration."
    ],
    "interests": [
      "Reinforcement learning for robot manipulation and locomotion",
      "Modular robot design and control across changing morphologies",
      "Sim-to-real transfer, calibration, and domain randomization",
      "Robot perception, SLAM, and sensor fusion"
    ]
  },
  "contact": [
    {
      "label": "Email",
      "value": "xhy2001923@outlook.com",
      "href": "mailto:xhy2001923@outlook.com"
    },
    {
      "label": "LinkedIn",
      "value": "linkedin.com/in/hongyuan-xu-1b9a00294",
      "href": "https://linkedin.com/in/hongyuan-xu-1b9a00294"
    }
  ],
  "links": [
    {
      "label": "GitHub",
      "value": "github.com/xhy5588",
      "href": "https://github.com/xhy5588"
    },
    {
      "label": "Resume",
      "value": "Open PDF resume",
      "href": "Hongyuan_s_resume.pdf"
    }
  ],
  "education": [
    {
      "school": "Northwestern University",
      "degree": "Master of Science in Computer Science",
      "meta": "Expected Dec 2026 | GPA 3.75"
    },
    {
      "school": "University of Massachusetts Amherst",
      "degree": "Bachelor of Science in Computer Science",
      "meta": "Sep 2020 - May 2024 | GPA 3.74 | Dean's List"
    }
  ],
  "projects": [
    {
      "id": "arthrobot",
      "title": "ArthroBot: A Modular Robot Platform",
      "status": "Ongoing research",
      "meta": "Onshape, Isaac Lab, PPO, cuRobo | Jan 2026 - Present",
      "text": "Developing a modular robot system in which a shared motor module forms a 6-DOF arm and a 20-module wheel-legged humanoid. The project connects Onshape CAD to physics models in Isaac Lab, reinforcement-learning policies, and motion planning for arm reaching, obstacle avoidance, and humanoid get-up and standing.",
      "highlights": [
        "Arm reaching: 2.2 mm median error, with 97.7% of 1,536 targets reached within 1 cm in simulation.",
        "Humanoid get-up: 99.4% success on held-out lying poses, followed by a handover to a standing policy.",
        "Arm motion planning with cuRobo, including comparisons against joint interpolation around a table and wall."
      ],
      "note": "Current results and demos are from simulation (v0). Policy deployment on the physical robots is a next step.",
      "image": {
        "src": "assets/arthrobot/humanoid.jpg",
        "alt": "ArthroBot wheel-legged humanoid with modular joints, carbon-fiber links, and two grippers",
        "caption": "The physical 20-module wheel-legged humanoid.",
        "width": 1148,
        "height": 1370
      },
      "videos": [
        {
          "src": "assets/arthrobot/arm-reaching.mp4",
          "poster": "assets/arthrobot/arm-reaching.jpg",
          "title": "Arm reaching",
          "caption": "The arm follows a new green target every two seconds.",
          "width": 640,
          "height": 360
        },
        {
          "src": "assets/arthrobot/humanoid-getup.mp4",
          "poster": "assets/arthrobot/humanoid-getup.jpg",
          "title": "Get-up to standing",
          "caption": "Five initial pose families: back, front, left, right, and random. Green labels mark the handover to standing.",
          "width": 840,
          "height": 420
        },
        {
          "src": "assets/arthrobot/obstacle-planning.mp4",
          "poster": "assets/arthrobot/obstacle-planning.jpg",
          "title": "Planning around obstacles",
          "caption": "Joint interpolation (left) compared with cuRobo (right) around a table and wall.",
          "width": 960,
          "height": 360
        }
      ],
      "links": [
        {
          "label": "GitHub repository",
          "href": "https://github.com/xhy5588/ArthroBot"
        },
        {
          "label": "Results & documentation",
          "href": "https://github.com/xhy5588/ArthroBot#results-simulation-only"
        }
      ],
      "credit": {
        "text": "Part of Chen's modular robot work, developed from AnotherIsaacSim.",
        "href": "https://github.com/Chenaah/AnotherIsaacSim"
      }
    },
    {
      "id": "universal-locomotion",
      "title": "Universal Robot Locomotion Controller",
      "status": "Completed research",
      "meta": "MuJoCo, model-based control, teacher-student learning | 2026",
      "text": "Developed a model-based CPG replanner for modular robots with unseen body topologies. A teacher-student model uses recent proprioceptive and action history to predict which of 4,096 Central Pattern Generator motion primitives will produce useful displacement. After a short warmup on a new body, it selects a primitive and rescores the primitive library every 200 control steps.",
      "highlights": [
        "Trained on 100 seen morphologies per module-count family; evaluated on 1,000 unseen topologies each for three-, four-, and five-module robots (3,000 held-out robots overall).",
        "Mean net displacement in matched 25-second MuJoCo evaluations: 1.15 m, 1.24 m, and 1.35 m for the three-, four-, and five-module families, respectively; the largest means among the tested controllers.",
        "Selects actions from sensorimotor history without explicit morphology identification or online simulation of candidate motions."
      ],
      "note": "Research report: Learning cross-topology control, Hongyuan Xu, Northwestern University, October 9, 2026. Results are from simulation.",
      "image": {
        "src": "assets/locomotion/morphologies.png",
        "alt": "Examples of three-, four-, and five-module robot bodies with varied attachment topologies",
        "caption": "Representative modular robot morphologies from the report.",
        "width": 2400,
        "height": 1332,
        "href": "assets/locomotion/morphologies.png"
      },
      "figures": [
        {
          "src": "assets/locomotion/method.png",
          "alt": "Model-based CPG replanner diagram showing offline teacher-student training and online history-based primitive selection",
          "caption": "Method: privileged teacher training, history-based student distillation, and online CPG replanning.",
          "width": 1672,
          "height": 941
        },
        {
          "src": "assets/locomotion/results.png",
          "alt": "Mean 25-second net displacement with 95 percent confidence intervals across three robot families, comparing the replanner with CapyFormer, RTG-DT, and LocoFormer",
          "caption": "Evaluation: 1,000 unseen topologies per module-count family, 25-second trials, and 95% confidence intervals.",
          "width": 2682,
          "height": 1280
        }
      ],
      "links": [
        {
          "label": "Read research report (PDF)",
          "href": "2026_Xu_CoRL.pdf"
        }
      ]
    },
    {
      "title": "Autonomous Robotic System for Target Object Search",
      "meta": "Python, ROS, RViz | Jan 2024 - Jun 2024",
      "text": "Built a ROS software stack integrating camera, LiDAR, and IMU sensors on a Triton robot for autonomous mapping and exploration. Designed SLAM-based exploration policies, generated real-time local maps during navigation, and transformed global coordinates into robot-local LED indicators for target localization feedback.",
      "links": [
        {
          "label": "Open report",
          "href": "603_FinalProj_D4.pdf"
        }
      ]
    },
    {
      "title": "AV Corner Cases",
      "meta": "Autonomous systems safety, perception, and multimodal analysis",
      "text": "Built a reproducible workflow for autonomous vehicle corner scenarios, combining object detection, scene reasoning, and analyst-driven risk scoring across camera-only and multimodal stacks.",
      "links": [
        {
          "label": "Open report",
          "href": "main (2).pdf"
        },
        {
          "label": "Repository",
          "href": "https://github.com/xhy5588/AV-Corner-Cases"
        }
      ]
    }
  ],
  "experience": [
    {
      "role": "Research Assistant (RL and Modular Robotics)",
      "org": "Xenobot / Living Machines Lab",
      "date": "Nov 2025 - Present",
      "summary": "Developing reinforcement-learning controllers in Isaac Lab for reconfigurable modular legs, training locomotion primitives across multiple morphologies. Building sim-to-real workflows for physical modular legs through actuation calibration, sensor-noise modeling, and domain randomization."
    },
    {
      "role": "Graduate Research Assistant",
      "org": "Northwestern University Robotics Lab",
      "date": "Jan 2025 - Nov 2025",
      "summary": "Built a multi-robot monitoring backend streaming voltage, command queues, and telemetry logs for real-time fleet diagnostics. Developed a Raspberry Pi base station that fused OptiTrack streams and broadcast take-off, hover, land, and emergency-stop commands to more than 10 drones."
    },
    {
      "role": "End-to-End Self-Driving Algorithm Developer",
      "org": "LightWheel AI",
      "date": "Aug 2024 - Nov 2024",
      "summary": "Built simulation pipelines integrating nuScenes and nuPlan to evaluate autonomous driving models in open-loop and closed-loop settings. Automated benchmarking for more than 2,000 scenarios by comparing model outputs with ground-truth labels, and contributed to scaling UniAD and VAD training from nuScenes to nuPlan."
    },
    {
      "role": "Undergraduate Research Assistant",
      "org": "University of Massachusetts Amherst",
      "date": "May 2023 - Jun 2024",
      "summary": "Designed a high-fidelity Carla simulation of the UMass campus, integrated multiple perception and control models, and built a computer vision system for object matching under low-overlap conditions."
    }
  ],
  "skills": [
    {
      "label": "Robotics",
      "text": "Robot manipulation, robot locomotion, reinforcement learning (DDPG, PPO, SAC), PID, SLAM, sensor fusion"
    },
    {
      "label": "Simulation",
      "text": "Isaac Lab, MuJoCo, Gazebo, Carla, domain randomization, sim-to-sim and sim-to-real transfer"
    },
    {
      "label": "Compute",
      "text": "Parallel reinforcement-learning training and multi-GPU workflows with 8 NVIDIA B300 GPUs"
    },
    {
      "label": "Software",
      "text": "Python, C++, ROS/ROS2, PyTorch, Linux, Docker, Git, CI/CD"
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

function renderProfileLinks() {
  const container = document.getElementById("profile-links");
  const items = [...portfolioData.contact, ...portfolioData.links];
  ["Email", "GitHub", "LinkedIn", "Resume"].forEach((label) => {
    const item = items.find((link) => link.label === label);
    const anchor = createElement("a", "", item.label);
    anchor.href = item.href;
    if (!item.href.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    container.appendChild(anchor);
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

function renderProjects() {
  const container = document.getElementById("project-list");
  portfolioData.projects.forEach((project) => {
    if (project.image) {
      container.appendChild(renderResearchProject(project));
      return;
    }
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

function renderResearchProject(project) {
  const article = createElement("article", "research-project");
  article.id = project.id;
  article.setAttribute("aria-labelledby", `${project.id}-title`);
  const overview = createElement("div", "research-overview");
  const figure = createElement("figure", "research-photo");
  const photo = createElement("img");
  photo.src = project.image.src;
  photo.alt = project.image.alt;
  photo.width = project.image.width;
  photo.height = project.image.height;
  photo.loading = "lazy";
  if (project.image.href) {
    const imageLink = createElement("a");
    imageLink.href = project.image.href;
    imageLink.target = "_blank";
    imageLink.rel = "noreferrer";
    imageLink.setAttribute("aria-label", "View robot morphologies at full size");
    imageLink.appendChild(photo);
    figure.appendChild(imageLink);
  } else {
    figure.appendChild(photo);
  }
  figure.appendChild(createElement("figcaption", "", project.image.caption));
  overview.appendChild(figure);

  const copy = createElement("div", "research-copy");
  copy.appendChild(createElement("p", "entry-label", project.status));
  const title = createElement("h3", "", project.title);
  title.id = `${project.id}-title`;
  copy.appendChild(title);
  copy.appendChild(createElement("p", "project-meta", project.meta));
  copy.appendChild(createElement("p", "", project.text));
  const highlights = createElement("ul", "bullet-list");
  project.highlights.forEach((highlight) => highlights.appendChild(createElement("li", "", highlight)));
  copy.appendChild(highlights);
  copy.appendChild(createElement("p", "research-note", project.note));
  const links = createElement("div", "project-actions");
  project.links.forEach((link) => {
    const anchor = createElement("a", "project-link", link.label);
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    links.appendChild(anchor);
  });
  copy.appendChild(links);
  overview.appendChild(copy);
  article.appendChild(overview);

  const demos = createElement("div", "research-demos");
  (project.videos || []).forEach((demo, index) => {
    const figure = createElement("figure", "research-demo");
    const video = createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "none";
    video.poster = demo.poster;
    video.width = demo.width;
    video.height = demo.height;
    video.setAttribute("aria-label", `${demo.title} simulation demo`);
    video.setAttribute("aria-describedby", `${project.id}-demo-${index}`);
    const source = createElement("source");
    source.src = demo.src;
    source.type = "video/mp4";
    video.appendChild(source);
    const fallback = createElement("a", "", `Watch ${demo.title}`);
    fallback.href = demo.src;
    video.appendChild(fallback);
    figure.appendChild(video);
    const caption = createElement("figcaption");
    caption.id = `${project.id}-demo-${index}`;
    caption.appendChild(createElement("strong", "", demo.title));
    caption.appendChild(createElement("span", "", demo.caption));
    figure.appendChild(caption);
    demos.appendChild(figure);
  });
  if (project.videos?.length) article.appendChild(demos);
  if (project.figures?.length) {
    const details = createElement("details", "research-figures");
    details.appendChild(createElement("summary", "", "Method & evaluation figures"));
    const figures = createElement("div", "report-figures");
    project.figures.forEach((item) => {
      const figure = createElement("figure");
      const link = createElement("a");
      link.href = item.src;
      link.target = "_blank";
      link.rel = "noreferrer";
      const image = createElement("img");
      image.src = item.src;
      image.alt = item.alt;
      image.width = item.width;
      image.height = item.height;
      image.loading = "lazy";
      link.appendChild(image);
      figure.appendChild(link);
      figure.appendChild(createElement("figcaption", "", item.caption));
      figures.appendChild(figure);
    });
    details.appendChild(figures);
    article.appendChild(details);
  }
  if (project.credit) {
    const credit = createElement("p", "research-credit");
    const creditLink = createElement("a", "", project.credit.text);
    creditLink.href = project.credit.href;
    creditLink.target = "_blank";
    creditLink.rel = "noreferrer";
    credit.appendChild(creditLink);
    article.appendChild(credit);
  }
  return article;
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  portfolioData.skills.forEach((skill) => {
    const article = createElement("article", "skill-item");
    const heading = createElement("h3");
    heading.textContent = skill.label;
    const text = createElement("p");
    text.textContent = skill.text;
    article.appendChild(heading);
    article.appendChild(text);
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

function renderPortraits() {
  const portrait = document.getElementById("avatar");
  const choices = document.getElementById("portrait-choices");
  portfolioData.profile.photos.forEach((photo, index) => {
    const button = createElement("button", "portrait-choice");
    button.type = "button";
    button.setAttribute("aria-label", `Show photo: ${photo.alt}`);
    button.setAttribute("aria-pressed", String(index === 0));
    const thumbnail = createElement("img");
    thumbnail.src = photo.src;
    thumbnail.alt = "";
    thumbnail.width = 56;
    thumbnail.height = 64;
    thumbnail.loading = "lazy";
    button.appendChild(thumbnail);
    button.addEventListener("click", () => {
      portrait.src = photo.src;
      portrait.alt = photo.alt;
      choices.querySelectorAll("button").forEach((choice) => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
    });
    choices.appendChild(button);
  });
}

function renderPortfolio() {
  document.getElementById("profile-name").textContent = portfolioData.profile.name;
  renderPortraits();

  renderTitles();
  renderBiography();
  renderProfileLinks();
  renderInterests();
  renderSidebarList("contact-list", portfolioData.contact);
  renderSidebarList("links-list", portfolioData.links);
  renderEducation();
  renderSkills();
  renderProjects();
  renderExperience();
}

renderPortfolio();
