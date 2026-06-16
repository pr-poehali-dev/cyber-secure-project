import { useState } from "react";
import Icon from "@/components/ui/icon";

type PageKey = "main" | "articles" | "resources" | "about" | "contacts";

const ARTICLES = [
  { id: "passwords", title: "Безопасность паролей", category: "Защита данных" },
  { id: "social", title: "Социальная инженерия", category: "Угрозы" },
  { id: "zerotrust", title: "Zero Trust", category: "Архитектура" },
  { id: "pentest", title: "Тестирование на проникновение", category: "Практика" },
  { id: "phishing", title: "Фишинг", category: "Угрозы" },
  { id: "encryption", title: "Шифрование данных", category: "Криптография" },
];

const RESOURCES = [
  { title: "CVE Database", desc: "база данных известных уязвимостей" },
  { title: "OWASP Top 10", desc: "список главных угроз веб-приложениям" },
  { title: "Kali Linux", desc: "дистрибутив для тестирования безопасности" },
  { title: "Have I Been Pwned", desc: "сервис проверки утечек данных" },
  { title: "NIST Framework", desc: "фреймворк кибербезопасности для организаций" },
  { title: "Shodan", desc: "поисковая система устройств в интернете" },
];

const TOC = [
  { id: "1", label: "Определение" },
  { id: "2", label: "История" },
  { id: "3", label: "Основные угрозы" },
  { id: "4", label: "Методы защиты" },
  { id: "5", label: "См. также" },
];

export default function Index() {
  const [page, setPage] = useState<PageKey>("main");
  const [search, setSearch] = useState("");

  const NAV = [
    { key: "main" as PageKey, label: "Заглавная страница", icon: "Home" },
    { key: "articles" as PageKey, label: "Статьи", icon: "FileText" },
    { key: "resources" as PageKey, label: "Ресурсы", icon: "Library" },
    { key: "about" as PageKey, label: "О проекте", icon: "Info" },
    { key: "contacts" as PageKey, label: "Контакты", icon: "Mail" },
  ];

  const titles: Record<PageKey, string> = {
    main: "Кибербезопасность",
    articles: "Категория: Статьи",
    resources: "Полезные ресурсы",
    about: "КиберВики: О проекте",
    contacts: "КиберВики: Контакты",
  };

  return (
    <div className="min-h-screen bg-white text-[#202122]">
      {/* TOP BAR */}
      <header className="border-b border-[#a2a9b1] bg-white">
        <div className="flex items-center px-3 h-[55px] gap-4">
          <button onClick={() => setPage("main")} className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full border border-[#a2a9b1] flex items-center justify-center bg-[#f8f9fa]">
              <Icon name="ShieldCheck" size={22} className="text-[#202122]" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-serif-wiki text-lg">КиберВики</div>
              <div className="text-[11px] text-[#54595d]">свободная энциклопедия</div>
            </div>
          </button>

          <div className="flex-1 max-w-2xl flex">
            <div className="flex-1 flex items-center border border-[#a2a9b1] rounded-l-sm px-2 bg-white">
              <Icon name="Search" size={15} className="text-[#72777d]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск в КиберВики"
                className="w-full px-2 py-1.5 text-sm outline-none bg-transparent text-[#202122]"
              />
            </div>
            <button className="px-4 bg-[#f8f9fa] border border-l-0 border-[#a2a9b1] rounded-r-sm text-sm text-[#202122] hover:bg-[#eaecf0]">
              Найти
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm shrink-0">
            <span className="wiki-link">Создать учётную запись</span>
            <span className="wiki-link">Войти</span>
          </div>
        </div>
      </header>

      <div className="flex max-w-[1400px] mx-auto">
        {/* SIDEBAR */}
        <aside className="hidden lg:block w-[176px] shrink-0 px-3 py-4 text-[13px]">
          <div className="mb-5">
            <div className="text-[#54595d] text-[11px] border-b border-[#c8ccd1] pb-1 mb-2 font-bold uppercase tracking-wide">
              Навигация
            </div>
            <ul className="space-y-1.5">
              {NAV.map((n) => (
                <li key={n.key}>
                  <button
                    onClick={() => setPage(n.key)}
                    className={`text-left wiki-link ${page === n.key ? "font-bold" : ""}`}
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <div className="text-[#54595d] text-[11px] border-b border-[#c8ccd1] pb-1 mb-2 font-bold uppercase tracking-wide">
              Участие
            </div>
            <ul className="space-y-1.5">
              <li><span className="wiki-link">Свежие правки</span></li>
              <li><span className="wiki-link">Случайная статья</span></li>
              <li><span className="wiki-link">Сообщить об угрозе</span></li>
              <li><span className="wiki-link">Справка</span></li>
            </ul>
          </div>

          <div>
            <div className="text-[#54595d] text-[11px] border-b border-[#c8ccd1] pb-1 mb-2 font-bold uppercase tracking-wide">
              Инструменты
            </div>
            <ul className="space-y-1.5">
              <li><span className="wiki-link">Ссылки сюда</span></li>
              <li><span className="wiki-link">Версия для печати</span></li>
              <li><span className="wiki-link">Постоянная ссылка</span></li>
            </ul>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0 border-l border-[#a7d7f9]/0 lg:border-l lg:border-[#c8ccd1] px-4 lg:px-6 py-3">
          {/* Article tabs */}
          <div className="flex items-end justify-between border-b border-[#a2a9b1] mb-3">
            <div className="flex text-[13px]">
              <span className="px-3 py-1.5 border border-b-0 border-[#a2a9b1] bg-white -mb-px text-[#202122]">Статья</span>
              <span className="px-3 py-1.5 wiki-link">Обсуждение</span>
            </div>
            <div className="hidden sm:flex text-[13px] gap-3 pb-1.5">
              <span className="wiki-link border-b border-[#202122] text-[#202122]">Читать</span>
              <span className="wiki-link">Править</span>
              <span className="wiki-link">История</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif-wiki text-[28px] font-normal leading-tight border-b border-[#a2a9b1] pb-1 mb-1 animate-fade-in">
            {titles[page]}
          </h1>
          <div className="text-[12px] text-[#54595d] mb-4">
            Материал из КиберВики — свободной энциклопедии
          </div>

          {page === "main" && <MainArticle setPage={setPage} />}
          {page === "articles" && <ArticlesPage />}
          {page === "resources" && <ResourcesPage />}
          {page === "about" && <AboutPage />}
          {page === "contacts" && <ContactsPage />}

          {/* Footer cats */}
          <div className="mt-10 pt-2 border-t border-[#a2a9b1] text-[12px] text-[#202122]">
            <span className="text-[#54595d]">Категории: </span>
            <span className="wiki-link">Кибербезопасность</span>
            <span> | </span>
            <span className="wiki-link">Информационная безопасность</span>
            <span> | </span>
            <span className="wiki-link">Информатика</span>
          </div>
        </main>
      </div>

      {/* PAGE FOOTER */}
      <footer className="border-t border-[#c8ccd1] mt-6 py-6 px-4 text-[12px] text-[#54595d]">
        <div className="max-w-[1400px] mx-auto">
          <p className="mb-2">
            Последнее изменение этой страницы: 16 июня 2026, в 14:32.
          </p>
          <p>
            Текст доступен по лицензии Creative Commons «Атрибуция — На тех же условиях».
            КиберВики® — свободная энциклопедия о кибербезопасности.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MainArticle({ setPage }: { setPage: (p: PageKey) => void }) {
  return (
    <div className="lg:flex lg:gap-6">
      <div className="flex-1 min-w-0 wiki-body text-[14px]">
        {/* TOC */}
        <div className="inline-block border border-[#a2a9b1] bg-[#f8f9fa] p-3 mb-4 text-[13px]">
          <div className="font-bold text-center mb-2">Содержание</div>
          <ol className="space-y-1">
            {TOC.map((t, i) => (
              <li key={t.id}>
                <span className="text-[#54595d] mr-1">{i + 1}</span>
                <span className="wiki-link">{t.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <p>
          <b>Кибербезопасность</b> (англ. <i>cyber security</i>) — практика защиты компьютерных систем,
          сетей, программ и данных от <span className="wiki-link">цифровых атак</span>. Целью таких атак
          обычно является получение доступа к конфиденциальной информации, её изменение или уничтожение,
          вымогательство денег у пользователей либо нарушение нормальной работы организаций.
        </p>
        <p>
          Эффективная защита требует координации усилий во всей информационной системе, включая
          безопасность <span className="wiki-link">сетей</span>, <span className="wiki-link">приложений</span>,
          конечных устройств, а также обучение персонала.
        </p>

        <h2 id="1">Определение</h2>
        <p>
          Под кибербезопасностью понимают совокупность методов, технологий и процессов, направленных на
          обеспечение <span className="wiki-link">конфиденциальности</span>, целостности и доступности
          информации. Эти три принципа составляют так называемую «триаду CIA».
        </p>

        <h2 id="2">История</h2>
        <p>
          Первая известная компьютерная программа-червь <span className="wiki-link">Creeper</span>
          появилась в начале 1970-х годов. В ответ была создана программа <span className="wiki-link">Reaper</span> —
          первый антивирус. С развитием интернета угрозы стали массовыми, что привело к формированию
          отдельной индустрии информационной безопасности.
        </p>

        <h2 id="3">Основные угрозы</h2>
        <ul>
          <li><span className="wiki-link">Вредоносное ПО</span> — вирусы, трояны, программы-вымогатели</li>
          <li><span className="wiki-link">Фишинг</span> — кража данных через поддельные сообщения</li>
          <li><span className="wiki-link">DDoS-атаки</span> — перегрузка серверов запросами</li>
          <li><span className="wiki-link">Социальная инженерия</span> — манипуляция людьми</li>
        </ul>

        <h2 id="4">Методы защиты</h2>
        <p>
          К основным средствам защиты относят <span className="wiki-link">межсетевые экраны</span>,
          системы обнаружения вторжений, <span className="wiki-link">шифрование</span>,
          многофакторную аутентификацию и регулярное обновление программного обеспечения.
        </p>

        <h2 id="5">См. также</h2>
        <ul>
          <li><button onClick={() => setPage("articles")} className="wiki-link">Список статей по теме</button></li>
          <li><button onClick={() => setPage("resources")} className="wiki-link">Полезные ресурсы</button></li>
        </ul>
      </div>

      {/* INFOBOX */}
      <aside className="lg:w-[290px] shrink-0 lg:mt-0 mt-4">
        <div className="border border-[#a2a9b1] bg-[#f8f9fa] text-[13px]">
          <div className="bg-[#cedff2] text-center font-bold py-1.5 font-serif-wiki text-[15px]">
            Кибербезопасность
          </div>
          <div className="p-2 text-center border-b border-[#a2a9b1]">
            <div className="w-full h-32 bg-[#202122] flex items-center justify-center">
              <Icon name="ShieldCheck" size={56} className="text-white" />
            </div>
            <div className="text-[11px] text-[#54595d] mt-1">
              Защита информации — основа цифровой эпохи
            </div>
          </div>
          <table className="w-full text-[12px]">
            <tbody>
              {[
                ["Область", "Информатика"],
                ["Возникновение", "1970-е годы"],
                ["Триада", "CIA"],
                ["Стандарты", "ISO 27001, NIST"],
                ["Специалисты", "150+ в сети"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-[#c8ccd1] last:border-0 align-top">
                  <th className="bg-[#eaecf0] text-left font-bold px-2 py-1.5 w-[40%]">{k}</th>
                  <td className="px-2 py-1.5">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </aside>
    </div>
  );
}

function ArticlesPage() {
  return (
    <div className="wiki-body text-[14px]">
      <p>
        Эта страница содержит список статей категории <b>«Кибербезопасность»</b>.
        Всего в категории {ARTICLES.length} статей.
      </p>
      <h2>Страницы в категории</h2>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 mt-3">
        {ARTICLES.map((a) => (
          <div key={a.id} className="flex items-baseline gap-2 py-0.5 border-b border-dotted border-[#c8ccd1]">
            <span className="wiki-link">{a.title}</span>
            <span className="text-[11px] text-[#72777d] ml-auto">{a.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesPage() {
  return (
    <div className="wiki-body text-[14px]">
      <p>
        Ниже приведён список внешних <b>ресурсов и инструментов</b>, рекомендуемых для изучения
        и практики в области информационной безопасности.
      </p>
      <h2>Базы данных и инструменты</h2>
      <ul>
        {RESOURCES.map((r) => (
          <li key={r.title}>
            <span className="wiki-link">{r.title}</span> — {r.desc}.
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="wiki-body text-[14px]">
      <p>
        <b>КиберВики</b> — это свободная энциклопедия, посвящённая информационной безопасности.
        Проект создан, чтобы сделать знания о киберугрозах и методах защиты доступными для каждого.
      </p>
      <h2>Миссия</h2>
      <p>
        Мы собираем и систематизируем проверенную информацию о кибербезопасности: от базовых понятий
        до сложных технических концепций. Все материалы проходят редакторскую проверку.
      </p>
      <h2>Принципы</h2>
      <ul>
        <li>Свободное распространение знаний</li>
        <li>Нейтральная точка зрения</li>
        <li>Проверяемость информации</li>
        <li>Открытое сообщество экспертов</li>
      </ul>
    </div>
  );
}

function ContactsPage() {
  return (
    <div className="wiki-body text-[14px]">
      <p>
        Свяжитесь с редакцией КиберВики по любым вопросам, предложениям или для сообщения об уязвимости.
      </p>
      <h2>Адреса</h2>
      <ul>
        <li>Редакция — <span className="wiki-link">editor@cyberwiki.ru</span></li>
        <li>Сообщить об угрозе — <span className="wiki-link">security@cyberwiki.ru</span></li>
        <li>Партнёрства — <span className="wiki-link">partners@cyberwiki.ru</span></li>
      </ul>
      <h2>Форма обратной связи</h2>
      <form className="max-w-md mt-3 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Ваше имя"
          className="w-full border border-[#a2a9b1] px-2 py-1.5 text-sm outline-none focus:border-[#3366cc] rounded-sm"
        />
        <input
          placeholder="Email"
          className="w-full border border-[#a2a9b1] px-2 py-1.5 text-sm outline-none focus:border-[#3366cc] rounded-sm"
        />
        <textarea
          rows={4}
          placeholder="Сообщение"
          className="w-full border border-[#a2a9b1] px-2 py-1.5 text-sm outline-none focus:border-[#3366cc] rounded-sm resize-none"
        />
        <button className="bg-[#3366cc] text-white px-4 py-1.5 text-sm rounded-sm hover:bg-[#2a4b8d]">
          Отправить
        </button>
      </form>
    </div>
  );
}
