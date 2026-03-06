/* ============================================================
   script.js — Loteria De Portfolio
   ============================================================ */

/* ── Burger Menu ── */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

/* ============================================================
   PROJECTS PAGE — Modal Data & Logic
   (only runs if the modal backdrop exists on the page)
   ============================================================ */

const projects = [
  {
    title: "CodieLing",
    img: "./assets/projects/project-1.png",
    type: "School",
    year: "2026",
    role: "Team Lead",
    stack: ["React", "TypeScript", "C#", "PostgreSQL", "Vercel", "Railway"],
    desc: "CodieLing is a school project built with React and TypeScript on the frontend and C# on the backend, with a PostgreSQL database hosted on Railway and the frontend deployed on Vercel. Led the team in designing the system architecture and coordinating full-stack development with CI/CD from GitHub.",
    live: "https://codieling.vercel.app",
    github: null,
  },
  {
    title: "Catan Random Map Generator",
    img: "./assets/projects/project-2.png",
    type: "Side Project",
    year: "2026",
    role: "Solo",
    stack: ["React", "C#", "Railway", "Vercel"],
    desc: "A fun and interactive tool that generates randomized Catan board layouts. Built as a personal side project with a React frontend and a C# backend API hosted on Railway, deployed on Vercel. A great exercise in full-stack development outside of school.",
    live: "https://catan-maki-generator.vercel.app",
    github: null,
  },
  {
    title: "Room Reservation System",
    img: "./assets/projects/project-3.png",
    type: "School",
    year: "2025",
    role: "Team Lead",
    stack: ["C#", "SQLite"],
    desc: "A room reservation desktop application built as a school requirement using C# with a SQLite backend. Led the team in developing the reservation workflow and admin management modules, focusing on clean UI and reliable data handling.",
    live: null,
    github: "https://github.com/Omisaki-Maki/RoomReservationSystem-ILS",
  },
  {
    title: "Attendance System",
    img: "./assets/projects/project-4.png",
    type: "School",
    year: "2025",
    role: "Solo",
    stack: ["C#", "SQLite", "Entity Framework Core"],
    desc: "A desktop attendance management system built solo for a school requirement. Features include student registration, daily attendance tracking, and report generation. Used Entity Framework Core as the ORM with a SQLite database for lightweight local storage.",
    live: null,
    github: "https://github.com/Omisaki-Maki/COMPRG3-ATTENDANCE_SYSTEM-ILS",
  },
  {
    title: "Turn Based Game",
    img: "./assets/projects/project-5.png",
    type: "School",
    year: "2024",
    role: "Solo",
    stack: ["C#", "EF Core", "SQLite", "OOP"],
    desc: "A console-based turn-based RPG built as a school project to demonstrate object-oriented programming principles — classes, inheritance, polymorphism, and game loop logic. Used EF Core with SQLite to persist player save data between sessions.",
    live: null,
    github: "https://github.com/Omisaki-Maki/TurnBasedGame",
  },
];

const backdrop = document.getElementById("modalBackdrop");
if (backdrop) {
  const modalClose = document.getElementById("modalClose");

  window.openModal = function (idx) {
    const p = projects[idx];

    document.getElementById("modalImg").src = p.img;
    document.getElementById("modalImg").alt = p.title;
    document.getElementById("modalTitle").textContent = p.title;

    const badgeClass =
      p.type === "School"
        ? "flip-card__badge--school"
        : "flip-card__badge--side";
    document.getElementById("modalBadges").innerHTML =
      `<span class="flip-card__badge ${badgeClass}">${p.type}</span>`;

    document.getElementById("modalMeta").innerHTML = `
      <span class="modal__meta-item"><i class="fa-solid fa-calendar-days"></i> ${p.year}</span>
      <span class="modal__meta-item"><i class="fa-solid fa-user"></i> ${p.role}</span>
      <span class="modal__meta-item"><i class="fa-solid fa-layer-group"></i> ${p.stack.length} technologies</span>
    `;

    document.getElementById("modalDesc").textContent = p.desc;

    document.getElementById("modalStack").innerHTML = p.stack
      .map((t) => `<span class="modal__tag">${t}</span>`)
      .join("");

    let actions = "";
    if (p.live)
      actions += `<a href="${p.live}" target="_blank" rel="noopener" class="modal__btn modal__btn--live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Project</a>`;
    if (p.github)
      actions += `<a href="${p.github}" target="_blank" rel="noopener" class="modal__btn modal__btn--github"><i class="fa-brands fa-github"></i> View on GitHub</a>`;
    document.getElementById("modalActions").innerHTML = actions;

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ── Flip card click (mobile tap support) ── */
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest("button") || e.target.closest("a")) return;
      this.classList.toggle("flipped");
    });
  });
}
