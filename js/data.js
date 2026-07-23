/* =====================================================================
   ФАЙЛ ДАННЫХ САЙТА
   =====================================================================
   Это ЕДИНСТВЕННЫЙ файл, который нужно редактировать, чтобы изменить
   содержимое сайта: тексты, контакты, ссылки и кейсы.

   Ничего не нужно трогать в index.html, style.css или script.js —
   всё содержимое подставляется автоматически из этого файла.

   Структура объекта SITE_DATA:
   1. profile        — имя, роли, описание, фото, резюме
   2. contacts       — телеграм / whatsapp / email
   3. featuredWorks  — карточки в блоке «Избранные работы»
   4. caseCategories — категории кейсов и работы внутри них
   5. about          — блок «Обо мне»
   6. tools          — стек инструментов
   ===================================================================== */

const SITE_DATA = {

  /* ------------------------------------------------------------------
     1. ПРОФИЛЬ
     Меняйте имя, роли, описание и фото здесь.
  ------------------------------------------------------------------ */
  profile: {
    name: "Анна Шукшина",

    // Роли через точку показываются в подзаголовке первого экрана
    roles: ["Редактор", "Журналист", "Контент-менеджер"],

    description:
      "Создаю понятный и качественный контент: от новостей и редактуры до коммерческих текстов, соцсетей, презентаций и работы с AI-инструментами.",

    // ФОТО: чтобы поставить свою фотографию, положите файл в папку assets
    // (например assets/photo.jpg) и замените путь ниже.
    photo: "assets/фотка2.jpg",

    // РЕЗЮМЕ: вставьте сюда прямую ссылку на PDF (например, с Google Drive
    // или Яндекс.Диска — важно, чтобы ссылка вела сразу на скачивание/просмотр файла)
    resumeLink: "https://drive.google.com/file/d/1WvkAP__VcJYnncAP9h9KL-y0YXt-pz1p/view?usp=drive_link",
  },

  /* ------------------------------------------------------------------
     2. КОНТАКТЫ
     Меняйте ссылки и подписи здесь. label — то, что видно на сайте,
     link — то, куда ведёт кнопка/ссылка.
  ------------------------------------------------------------------ */
  contacts: {
    telegram: {
      label: "@vashcheblin",
      link: "https://t.me/vashcheblin",
    },
    whatsapp: {
      label: "+7 958 569 3537",
      link: "https://wa.me/79585693537",
    },
    email: {
      label: "7unfear@gmail.com",
      link: "mailto:7unfear@gmail.com",
    },
  },

  /* ------------------------------------------------------------------
     3. ИЗБРАННЫЕ РАБОТЫ
     Блок с главным кейсом. Показывает самый сильный результат для первого впечатления.
     Чтобы добавить/удалить карточку — добавьте/удалите объект в массиве.

     Поля каждой карточки:
       title       — название проекта
       description — краткое описание
       link        — ссылка, куда ведёт кнопка «Открыть»
                      (PDF, DOCX, Google Drive, Figma — любая ссылка)
  ------------------------------------------------------------------ */
  featuredWorks: [
  {
    title: "Редизайн контент-стратегии для IT-компании",
    description:
      "Полная перестройка рубрикатора соцсетей и тона коммуникации бренда.",
    link: "#",
  },
],

  /* ------------------------------------------------------------------
     4. КЕЙСЫ ПО КАТЕГОРИЯМ
     Это главный раздел сайта. Категории показываются карточками,
     при клике открывается модальное окно со списком работ внутри.

     Чтобы ДОБАВИТЬ новую категорию — скопируйте один блок { ... }
     целиком и измените его содержимое.

     Чтобы ДОБАВИТЬ новую работу внутри категории — добавьте объект
     в массив works этой категории.

     Поля работы (work):
       title       — название работы
       description — краткое описание
       type        — тип файла для подписи на кнопке (PDF, DOCX, Figma, Ссылка и т.д.)
       link        — ссылка на файл/документ (PDF, DOCX, Google Drive, Figma)
  ------------------------------------------------------------------ */
  caseCategories: [
    {
      id: "commercial",
      icon: "📝",
      title: "Коммерческие тексты",
      description: "Редактура контента под задачи бизнеса",
      tags: [
        "Email-рассылки",
        "Рекламные статьи",
        "Тексты для сайтов",
      ],
      works: [
        {
          title: "Билайн — нативная рекламная статья",
          description: "Адаптация рекламного материала под формат медиа",
          type: "PDF",
          link: "https://drive.google.com/file/d/18_IVSJayZiJVkiMK4QtQ4PgDQT5mIay8/view?usp=drive_link",
        },
        {
          title: "Email-рассылка для «Молодёжной среды»",
          description: "Подготовка email-материалов для аудитории издания",
          type: "Google Docs",
          link: "https://docs.google.com/document/d/1x12EhzPhjvFRi4-bONRLECMQUEX1YSlxqgSDcunfa-k/edit?tab=t.0",
        },
        {
          title: "Страна.Life — промо-материал о запуске VK-каналов",
          description: "Адаптация промо-информации под формат редакционного материала",
          type: "PDF",
          link: "https://drive.google.com/file/d/12bBc4uGx5l1TXJcDvAWBx311Paa-TcJg/view?usp=drive_link",
        },
      ],
    },

    {
      id: "social",
      icon: "📱",
      title: "Социальные сети",
      description: "Посты в Telegram и VK",
      tags: [
        "Контент-план",
        "Telegram",
        "VK",
        "Серии постов",
        "Рубрикаторы",
      ],
      works: [
        {
          title: "Сторис для Telegram-канала",
          description: "Адаптация редакционных материалов под формат сторис",
          type: "ссылка",
          link: "https://drive.google.com/drive/folders/1QWM71isQQXLrDdhSpoO61cr0yYRJ6hS7?usp=drive_link",
        },
        {
          title: "Пример контент-плана",
          description: "Контент-планирование для медиа: выстраивание рубрик, работа с форматами",
          type: "Google таблица",
          link: "https://docs.google.com/spreadsheets/d/1V6TRZeaWFEz-pZ4z80JmKVCYOCg7rKFABElyftblcOc/edit?gid=0#gid=0",
        },
        {
          title: "Посты для VK и Telegram сообществ",
          description: "Разноформатные публикации: новости, рекламные материалы, кликбейтные посты",
          type: "PDF",
          link: "https://drive.google.com/file/d/1wF9LjSy2Q2D-rTnvM_iTKCyDANxnJs6P/view?usp=drive_link",
        },
      ],
    },

    {
      id: "editorial",
      icon: "📰",
      title: "Редактура и журналистика",
      description: "Журналистские материалы и работа с информацией",
      tags: ["Новости", "Интервью", "Рерайт", "Редактура"],
      works: [
        {
          title: "Новости РЗН.Инфо",
          description: "Аналитический материал с комментариями экспертов.",
          type: "Google Docs",
          link: "https://docs.google.com/document/d/1zeLz0lEAKg98-F0ROgtEUF5RgmDZX9JWcodSgmRVRIA/edit?tab=t.0",
        },
        {
          title: "Экспертное интервью для издания «Страна Life»",
          description: "Интервью с руководителем регионального преподавания MAXIMUM Education Викторией Подсухиной",
          type: "PDF",
          link: "https://drive.google.com/file/d/1jSYRttizL8tjhuEvIWxqRM0Rs_XZXdjo/view?usp=drive_link",
        },
        {
          title: "Публикации в печатном издании",
          description: "Примеры статей и интервью в «Молодёжной среде»",
          type: "ссылка",
          link: "https://drive.google.com/drive/folders/1ZiXZ2rwLlu71fDg_zaIfG7BdF_eulCrb?usp=drive_link",
        },
      ],
    },

    {
      id: "visual",
      icon: "🎨",
      title: "Визуал",
      description: "Оформление материалов для медиа и не только",
      tags: ["Карточки", "AI генерации", "Обложки", "Инфографика"],
      works: [
        {
          title: "Инфографика",
          description: "Инфографика на основе моего новостного материала об инфляции в Рязанской области",
          type: "Google Docs",
          link: "https://docs.google.com/document/d/1TIS3iLqhhMZ4QkLVu6eoyqU5lNP3EMBF48w5Bh9x3KQ/edit?tab=t.0",
        },
        {
          title: "Контент для соцсетей",
          description: "Примеры разных форматов визуального контента",
          type: "Telegram-канал",
          link: "https://t.me/picturesportfoplio",
        },
      
          
        
      ],
    },

    
  ],

  /* ------------------------------------------------------------------
     5. ОБО МНЕ
     Короткий текст без длинной автобиографии.
  ------------------------------------------------------------------ */
  about: {
    text:
      "Работаю с текстом на стыке редактуры, маркетинга и технологий. Мне важно, чтобы контент был понятным, точным и решал задачу бизнеса — будь то новость, лендинг или пост в соцсетях. Использую AI-инструменты, чтобы делать это быстрее и качественнее.",
  },

  /* ------------------------------------------------------------------
     6. СТЕК ИНСТРУМЕНТОВ
     Каждый инструмент показывается плашкой с инициалами.

     Чтобы заменить плашку на настоящий логотип — положите файл
     иконки в assets/icons (например assets/icons/figma.svg) и
     укажите путь в поле image. Если image не указан, используется
     плашка с инициалами (поле initials).
  ------------------------------------------------------------------ */
  tools: [
    { name: "Word", initials: "Wd", image: "assets/icons/icons8-microsoft-word.svg" },
    { name: "Google Docs", initials: "Gd", image: "assets/icons/icons8-документы-google.svg" },
    { name: "Google Slides", initials: "GS", image: "assets/icons/icons8-google-slides.svg" },
    { name: "Telegram", initials: "Tg", image: "assets/icons/icons8-телеграм.svg" },
    { name: "VK", initials: "VK", image: "assets/icons/icons8-vk.svg" },
    { name: "ChatGPT", initials: "Ch", image: "assets/icons/icons8-чатgpt.svg" },
    { name: "Claude", initials: "Cl", image: "assets/icons/icons8-клод-ай.svg" },
    { name: "Gemini", initials: "Ge", image: "assets/icons/gemini-color.svg" },
    { name: "Canva", initials: "Cv", image: "assets/icons/icons8-canva (1).svg" },
    { name: "Tilda", initials: "Ti", image: "assets/icons/logo_tilda_black.svg" },
    { name: "Figma", initials: "Fg", image: "assets/icons/icons8-figma.svg" },
    { name: "CSS", initials: "Cs", image: null },
    { name: "Bitrix", initials: "Bx", image: "assets/icons/svgviewer-output.svg" },
  ],
};
