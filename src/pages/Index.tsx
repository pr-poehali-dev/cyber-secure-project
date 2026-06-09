import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = ["Главная", "Статьи", "Ресурсы", "О нас", "Контакты"];

const NEWS = [
  {
    tag: "Уязвимость",
    date: "09 июня 2026",
    title: "Критическая уязвимость в OpenSSL затрагивает миллионы серверов",
    excerpt: "Исследователи обнаружили уязвимость нулевого дня, позволяющую злоумышленникам выполнять произвольный код на удалённых системах.",
    readTime: "4 мин",
  },
  {
    tag: "Утечка данных",
    date: "08 июня 2026",
    title: "Крупная утечка данных: скомпрометированы 47 миллионов аккаунтов",
    excerpt: "Популярный сервис облачного хранения подтвердил взлом своей инфраструктуры. Рекомендуется немедленно сменить пароли.",
    readTime: "3 мин",
  },
  {
    tag: "Шифрование",
    date: "07 июня 2026",
    title: "Квантовое шифрование: новый стандарт NIST вступает в силу",
    excerpt: "Национальный институт стандартов опубликовал финальную версию постквантовых криптографических алгоритмов.",
    readTime: "6 мин",
  },
];

const ARTICLES = [
  {
    tag: "Руководство",
    title: "Безопасность паролей в 2026 году",
    excerpt: "Как создавать и хранить надёжные пароли, использовать менеджеры паролей и двухфакторную аутентификацию.",
    author: "Алексей Петров",
    date: "05 июня 2026",
  },
  {
    tag: "Анализ",
    title: "Социальная инженерия: главная угроза корпораций",
    excerpt: "Разбор техник фишинга, вишинга и претекстинга. Как обучить сотрудников противостоять манипуляциям.",
    author: "Мария Соколова",
    date: "03 июня 2026",
  },
  {
    tag: "Технологии",
    title: "Zero Trust: архитектура безопасности без периметра",
    excerpt: "Принципы построения сетевой инфраструктуры, основанной на принципе «никому не доверяй, всегда проверяй».",
    author: "Дмитрий Лебедев",
    date: "01 июня 2026",
  },
  {
    tag: "Практика",
    title: "Пентест: как проверить свою защиту изнутри",
    excerpt: "Методология и инструменты для проведения тестирования на проникновение. Легальные способы поиска уязвимостей.",
    author: "Сергей Козлов",
    date: "29 мая 2026",
  },
];

const RESOURCES = [
  { icon: "BookOpen", title: "CVE Database", desc: "Официальная база данных известных уязвимостей", tag: "База данных" },
  { icon: "Shield", title: "OWASP Top 10", desc: "Топ угроз веб-приложениям от открытого сообщества", tag: "Стандарт" },
  { icon: "Terminal", title: "Kali Linux", desc: "Дистрибутив для тестирования безопасности", tag: "Инструмент" },
  { icon: "Lock", title: "Have I Been Pwned", desc: "Проверьте, была ли утечка ваших данных", tag: "Сервис" },
  { icon: "FileText", title: "NIST Framework", desc: "Фреймворк кибербезопасности для организаций", tag: "Стандарт" },
  { icon: "Globe", title: "Shodan", desc: "Поисковик устройств, подключённых к интернету", tag: "Инструмент" },
];

const TEAM = [
  { name: "Андрей Волков", role: "Главный редактор", bio: "15 лет в информационной безопасности. Специалист по защите критической инфраструктуры." },
  { name: "Елена Морозова", role: "Аналитик угроз", bio: "Исследователь вредоносного ПО, автор более 200 технических отчётов." },
  { name: "Игорь Зайцев", role: "Технический эксперт", bio: "Сертифицированный этичный хакер (CEH, OSCP). Проводит корпоративные тренинги." },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const id: Record<string, string> = {
      "Главная": "hero",
      "Статьи": "articles",
      "Ресурсы": "resources",
      "О нас": "about",
      "Контакты": "contacts",
    };
    if (id[section]) {
      document.getElementById(id[section])?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6f4] text-[#111]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f6f6f4]/95 backdrop-blur-sm border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#111] flex items-center justify-center">
              <Icon name="Shield" size={14} className="text-[#f6f6f4]" />
            </div>
            <span className="font-semibold tracking-tight text-sm">CyberWatch</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`nav-link text-sm transition-colors ${activeSection === item ? "text-[#111] font-medium" : "text-[#888] hover:text-[#111]"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f6f6f4] border-t border-[#e0e0e0] px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-left text-sm py-1 text-[#555] hover:text-[#111]">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-14 min-h-screen flex flex-col justify-center border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-fade-up animate-delay-100">
              <span className="tag-pill text-[#888] border-[#ccc] mb-6 block w-fit">
                Информационный портал
              </span>
            </div>
            <h1 className="animate-fade-up animate-delay-200 text-5xl md:text-6xl font-light leading-[1.1] tracking-tight mb-6">
              Кибербез-<br />
              <span className="font-semibold">опасность</span><br />
              сегодня
            </h1>
            <p className="animate-fade-up animate-delay-300 text-[#666] text-lg leading-relaxed mb-10 max-w-sm">
              Актуальные новости, экспертные статьи и проверенные ресурсы для специалистов и тех, кто хочет защитить себя в цифровом мире.
            </p>
            <div className="animate-fade-up animate-delay-400 flex gap-4">
              <button
                onClick={() => scrollTo("Статьи")}
                className="bg-[#111] text-[#f6f6f4] px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors"
              >
                Читать статьи
              </button>
              <button
                onClick={() => scrollTo("Ресурсы")}
                className="border border-[#ccc] text-[#111] px-6 py-3 text-sm font-medium hover:border-[#111] transition-colors"
              >
                Ресурсы
              </button>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-500 grid grid-cols-2 gap-px bg-[#e0e0e0]">
            {[
              { num: "2 400+", label: "Статей опубликовано" },
              { num: "98K", label: "Читателей ежемесячно" },
              { num: "150+", label: "Экспертов в сети" },
              { num: "24/7", label: "Мониторинг угроз" },
            ].map((s) => (
              <div key={s.label} className="bg-[#f6f6f4] p-8">
                <div className="text-3xl font-semibold mb-1 text-[#111]">{s.num}</div>
                <div className="text-sm text-[#888]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e0e0e0] bg-[#111] text-[#f6f6f4] px-6 py-3 flex items-center gap-4 overflow-hidden">
          <span className="tag-pill border-[#f6f6f4]/30 text-[#f6f6f4]/60 text-xs shrink-0">Сейчас</span>
          <div className="flex gap-12 text-sm text-[#aaa] overflow-x-auto">
            {NEWS.map((n) => (
              <span key={n.title} className="shrink-0 cursor-pointer hover:text-white transition-colors">{n.title}</span>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono-custom text-xs text-[#888] tracking-widest uppercase block mb-2">01 / Новости</span>
              <h2 className="text-3xl font-light text-[#111]">Последние события</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm text-[#888] hover:text-[#111] transition-colors">
              Все новости <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#e0e0e0]">
            {NEWS.map((item, i) => (
              <article key={i} className="article-card bg-[#f6f6f4] p-8 cursor-pointer group">
                <div className="flex items-center justify-between mb-6">
                  <span className="tag-pill border-[#ccc] text-[#888]">{item.tag}</span>
                  <span className="font-mono-custom text-xs text-[#bbb]">{item.date}</span>
                </div>
                <h3 className="text-base font-medium leading-snug mb-3 text-[#111] group-hover:text-[#333] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed mb-6">{item.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-[#aaa]">
                  <Icon name="Clock" size={12} />
                  <span>{item.readTime} чтения</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-20 border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono-custom text-xs text-[#888] tracking-widest uppercase block mb-2">02 / Статьи</span>
              <h2 className="text-3xl font-light text-[#111]">Экспертные материалы</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm text-[#888] hover:text-[#111] transition-colors">
              Все статьи <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#e0e0e0]">
            {ARTICLES.map((item, i) => (
              <article key={i} className="article-card bg-[#f6f6f4] p-8 cursor-pointer group">
                <div className="mb-4">
                  <span className="tag-pill border-[#1a9a5a] text-[#1a9a5a]">{item.tag}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug mb-3 text-[#111] group-hover:text-[#333] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed mb-6">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[#bbb]">
                  <span className="font-medium text-[#666]">{item.author}</span>
                  <span className="font-mono-custom">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-20 bg-[#111] border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono-custom text-xs text-[#555] tracking-widest uppercase block mb-2">03 / Ресурсы</span>
            <h2 className="text-3xl font-light text-[#f6f6f4]">Полезные инструменты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#333]">
            {RESOURCES.map((r, i) => (
              <div key={i} className="bg-[#111] p-8 cursor-pointer group hover:bg-[#1a1a1a] transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-[#333] flex items-center justify-center group-hover:border-[#555] transition-colors">
                    <Icon name={r.icon} size={18} className="text-[#888]" />
                  </div>
                  <span className="tag-pill border-[#333] text-[#555] group-hover:border-[#555] transition-colors">{r.tag}</span>
                </div>
                <h3 className="font-medium mb-2 text-[#f6f6f4] group-hover:text-white transition-colors">{r.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{r.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-xs text-[#444] group-hover:text-[#888] transition-colors">
                  <span>Открыть</span>
                  <Icon name="ArrowUpRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono-custom text-xs text-[#888] tracking-widest uppercase block mb-2">04 / О нас</span>
            <h2 className="text-3xl font-light text-[#111]">Команда экспертов</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#e0e0e0] mb-16">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-[#f6f6f4] p-8">
                <div className="w-12 h-12 bg-[#111] mb-6 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-[#f6f6f4]" />
                </div>
                <div className="font-semibold mb-1 text-[#111]">{member.name}</div>
                <div className="text-xs text-[#1a9a5a] font-mono-custom tracking-wider uppercase mb-4">{member.role}</div>
                <p className="text-sm text-[#888] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4 text-[#111]">Миссия портала</h3>
              <p className="text-[#666] leading-relaxed mb-4">
                CyberWatch — независимое издание, посвящённое информационной безопасности. Мы публикуем проверенные материалы о киберугрозах, защите данных и цифровой гигиене.
              </p>
              <p className="text-[#666] leading-relaxed">
                Наша цель — сделать знания о кибербезопасности доступными для всех: от рядовых пользователей до профессионалов отрасли.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "CheckCircle", text: "Независимая редакция" },
                { icon: "Eye", text: "Проверка фактов" },
                { icon: "Zap", text: "Оперативные обновления" },
                { icon: "Users", text: "Экспертное сообщество" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={f.icon} size={16} className="text-[#1a9a5a] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#555]">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono-custom text-xs text-[#888] tracking-widest uppercase block mb-2">05 / Контакты</span>
            <h2 className="text-3xl font-light text-[#111]">Связаться с нами</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#666] leading-relaxed mb-8">
                Хотите предложить тему для статьи, сообщить об уязвимости или стать партнёром? Напишите нам.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Mail", label: "Редакция", value: "editor@cyberwatch.ru" },
                  { icon: "AlertTriangle", label: "Сообщить об угрозе", value: "security@cyberwatch.ru" },
                  { icon: "Briefcase", label: "Партнёрства", value: "partners@cyberwatch.ru" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-[#e8e8e8]">
                    <div className="w-8 h-8 border border-[#e0e0e0] flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={14} className="text-[#888]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#aaa] font-mono-custom uppercase tracking-wider">{c.label}</div>
                      <div className="text-sm font-medium mt-0.5 text-[#111]">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-custom text-xs text-[#888] uppercase tracking-wider block mb-2">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full border border-[#e0e0e0] bg-transparent px-4 py-3 text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono-custom text-xs text-[#888] uppercase tracking-wider block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full border border-[#e0e0e0] bg-transparent px-4 py-3 text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono-custom text-xs text-[#888] uppercase tracking-wider block mb-2">Тема</label>
                  <input
                    type="text"
                    placeholder="Тема обращения"
                    className="w-full border border-[#e0e0e0] bg-transparent px-4 py-3 text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono-custom text-xs text-[#888] uppercase tracking-wider block mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    placeholder="Ваше сообщение..."
                    className="w-full border border-[#e0e0e0] bg-transparent px-4 py-3 text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#111] text-[#f6f6f4] px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors w-full md:w-auto md:self-start"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#f6f6f4] flex items-center justify-center">
              <Icon name="Shield" size={11} className="text-[#111]" />
            </div>
            <span className="text-[#888] text-sm font-medium">CyberWatch</span>
          </div>
          <div className="flex gap-6 text-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-[#555] hover:text-[#f6f6f4] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="text-xs font-mono-custom text-[#555]">© 2026 CyberWatch</div>
        </div>
      </footer>
    </div>
  );
}