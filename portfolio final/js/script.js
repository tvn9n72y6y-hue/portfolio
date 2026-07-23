/* =====================================================================
   СКРИПТ САЙТА
   =====================================================================
   Этот файл отвечает за то, как данные из data.js превращаются
   в HTML-разметку на странице, а также за интерактивность:
   модальные окна кейсов, мобильное меню, анимации при прокрутке.

   Редактировать содержимое сайта здесь НЕ нужно — все тексты
   и ссылки находятся в файле js/data.js.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderContacts();
  renderFeaturedWorks();
  renderCategories();
  renderTools();
  renderFooter();

  initNavbar();
  initMobileMenu();
  initModal();
  initScrollReveal();
  initBackToTop();
});

/* ---------------------------------------------------------------------
   1. ПРОФИЛЬ (первый экран)
--------------------------------------------------------------------- */
function renderProfile() {
  const { name, roles, description, photo, resumeLink } = SITE_DATA.profile;

  document.getElementById("hero-name").textContent = name;
  document.getElementById("nav-logo").textContent = name;
  document.getElementById("footer-name").textContent = name;

  // Роли выводятся через разделитель-точку
  const rolesEl = document.getElementById("hero-roles");
  rolesEl.innerHTML = roles
    .map((role) => `<span>${escapeHTML(role)}</span>`)
    .join('<span class="dot">•</span>');

  document.getElementById("hero-description").textContent = description;

  const photoImg = document.getElementById("hero-photo-img");
  photoImg.src = photo;
  photoImg.alt = `Фото — ${name}`;

  const resumeBtn = document.getElementById("resume-btn");
  resumeBtn.href = resumeLink;
}

/* ---------------------------------------------------------------------
   2. КОНТАКТЫ (в hero и в футере)
--------------------------------------------------------------------- */
function renderContacts() {
  const { telegram, whatsapp, email } = SITE_DATA.contacts;

  const heroContacts = document.getElementById("hero-contacts");
  heroContacts.innerHTML = `
    <div class="contact-item">
      <span class="contact-label">Telegram</span>
      <a href="${telegram.link}" target="_blank" rel="noopener">${escapeHTML(telegram.label)}</a>
    </div>
    <div class="contact-item">
      <span class="contact-label">WhatsApp / телефон</span>
      <a href="${whatsapp.link}" target="_blank" rel="noopener">${escapeHTML(whatsapp.label)}</a>
    </div>
    <div class="contact-item">
      <span class="contact-label">Email</span>
      <a href="${email.link}">${escapeHTML(email.label)}</a>
    </div>
  `;

  const footerContacts = document.getElementById("footer-contacts");
  footerContacts.innerHTML = `
    <a href="${telegram.link}" target="_blank" rel="noopener">Telegram</a>
    <a href="${whatsapp.link}" target="_blank" rel="noopener">WhatsApp</a>
    <a href="${email.link}">Email</a>
  `;
}

/* ---------------------------------------------------------------------
   3. ИЗБРАННЫЕ РАБОТЫ
--------------------------------------------------------------------- */
function renderFeaturedWorks() {
  const grid = document.getElementById("featured-grid");

  grid.innerHTML = SITE_DATA.featuredWorks
    .map(
      (work) => `
      <article class="card featured-card reveal">
        <h3 class="featured-card-title">${escapeHTML(work.title)}</h3>
        <p class="featured-card-description">${escapeHTML(work.description)}</p>
        <a class="featured-card-link" href="${work.link}" target="_blank" rel="noopener">
          Открыть <span class="arrow">→</span>
        </a>
      </article>
    `
    )
    .join("");
}

/* ---------------------------------------------------------------------
   4. КАТЕГОРИИ КЕЙСОВ
--------------------------------------------------------------------- */
function renderCategories() {
  const grid = document.getElementById("categories-grid");

  grid.innerHTML = SITE_DATA.caseCategories
    .map(
      (category) => `
      <button class="card category-card reveal" data-category-id="${category.id}">
        <span class="category-icon">${category.icon}</span>
        <span class="category-title">${escapeHTML(category.title)}</span>
        <span class="category-description">${escapeHTML(category.description)}</span>
        <span class="category-count">Смотреть работы (${category.works.length}) <span class="arrow">→</span></span>
      </button>
    `
    )
    .join("");

  // Клик по карточке категории открывает модальное окно с её работами
  grid.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const categoryId = card.getAttribute("data-category-id");
      const category = SITE_DATA.caseCategories.find((c) => c.id === categoryId);
      if (category) openModal(category);
    });
  });
}


/* ---------------------------------------------------------------------
   6. СТЕК ИНСТРУМЕНТОВ
--------------------------------------------------------------------- */
function renderTools() {
  const grid = document.getElementById("tools-grid");

  grid.innerHTML = SITE_DATA.tools
    .map((tool) => {
      const badgeContent = tool.image
        ? `<img src="${tool.image}" alt="${escapeHTML(tool.name)}" />`
        : escapeHTML(tool.initials || tool.name.slice(0, 2));

      return `
        <div class="tool-item reveal">
          <div class="tool-badge">${badgeContent}</div>
          <span class="tool-name">${escapeHTML(tool.name)}</span>
        </div>
      `;
    })
    .join("");
}

/* ---------------------------------------------------------------------
   7. ФУТЕР
--------------------------------------------------------------------- */
function renderFooter() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------------
   МОДАЛЬНОЕ ОКНО КЕЙСОВ
--------------------------------------------------------------------- */
function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(category) {
  const overlay = document.getElementById("modal-overlay");

  document.getElementById("modal-icon").textContent = category.icon;
  document.getElementById("modal-title").textContent = category.title;
  document.getElementById("modal-description").textContent = category.description;

  document.getElementById("modal-tags").innerHTML = category.tags
    .map((tag) => `<span class="modal-tag">${escapeHTML(tag)}</span>`)
    .join("");

  document.getElementById("modal-works").innerHTML = category.works
    .map(
      (work) => `
      <a class="work-item" href="${work.link}" target="_blank" rel="noopener">
        <div>
          <div class="work-item-title">${escapeHTML(work.title)}</div>
          <div class="work-item-description">${escapeHTML(work.description)}</div>
        </div>
        <span class="work-item-type">${escapeHTML(work.type)}</span>
      </a>
    `
    )
    .join("");

  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------------------
   НАВИГАЦИЯ: полупрозрачный фон при прокрутке
--------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  const updateNavbar = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
}

/* ---------------------------------------------------------------------
   МОБИЛЬНОЕ МЕНЮ
--------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-active");
    links.classList.toggle("is-open");
  });

  // Закрыть меню при клике на ссылку
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("is-active");
      links.classList.remove("is-open");
    });
  });
}

/* ---------------------------------------------------------------------
   ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ
--------------------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------------------
   КНОПКА «НАВЕРХ»
--------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------------------------------------------------------------
   ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ: экранирование текста
   Защищает от случайных HTML-тегов в тексте из data.js
--------------------------------------------------------------------- */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
