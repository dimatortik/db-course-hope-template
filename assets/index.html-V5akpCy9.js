import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,e as i}from"./app-J0_1WqJN.js";const n={},t=i('<h1 id="аналіз-вимог-та-створення-документаціі" tabindex="-1"><a class="header-anchor" href="#аналіз-вимог-та-створення-документаціі"><span>Аналіз вимог та створення документації</span></a></h1><h2 id="мета" tabindex="-1"><a class="header-anchor" href="#мета"><span>Мета</span></a></h2><p>Створити сайт для студентського кампусу з оновленим дизайном та функціоналом. Основна мета системи полягає в забезпеченні зручної взаємодії студентів і викладачів через веб-інтерфейс для перегляду, виставлення оцінок і атестацій з можливістю фільтрування за певними критеріями.</p><p>Посилання на чинну версію сайту: https://campus.kpi.ua/</p><h2 id="опис-проблеми" tabindex="-1"><a class="header-anchor" href="#опис-проблеми"><span>Опис проблеми</span></a></h2><p>Нинішній сайт кампусу є застарілим і не відповідає сучасним вимогам користувачів, має перевантажений інтерфейс та застарілий функціонал.</p><h2 id="опис-системи" tabindex="-1"><a class="header-anchor" href="#опис-системи"><span>Опис системи</span></a></h2><p>Система являє собою платформу для комунікації між студентами та викладачами. Вона дає можливість студентам переглядати свої оцінки та атестації, а викладачам — керувати оцінками студентів та планувати дати сесій. Адміністратори мають змогу управляти курсами, додавати предмети і призначати викладачів.</p><h2 id="основні-функціі-системи" tabindex="-1"><a class="header-anchor" href="#основні-функціі-системи"><span>Основні функції системи</span></a></h2><h3 id="авторизація-користувачів" tabindex="-1"><a class="header-anchor" href="#авторизація-користувачів"><span>Авторизація користувачів</span></a></h3><ul><li>Реєстрація користувачів через електронну пошту або акаунт з інтегрованих систем (GitHub, Telegram)</li><li>Система ролей (студент, викладач, адміністратор), що визначає права доступу.</li></ul><h3 id="виставлення-оцінок-і-атестаціи" tabindex="-1"><a class="header-anchor" href="#виставлення-оцінок-і-атестаціи"><span>Виставлення оцінок і атестацій</span></a></h3><ul><li>Викладачі можуть виставляти оцінки та атестації студентам через особистий кабінет.</li><li>Студенти можуть переглядати свої оцінки, з можливістю сортування та пошуку за різними критеріями.</li></ul><h3 id="призначення-дати-здачі-сесіи" tabindex="-1"><a class="header-anchor" href="#призначення-дати-здачі-сесіи"><span>Призначення дати здачі сесій</span></a></h3><ul><li>Викладачі можуть призначати дати здачі екзаменів і контрольних робіт.</li><li>Студенти можуть переглядати календар екзаменів.</li></ul><h3 id="отримання-методичного-забезпечення" tabindex="-1"><a class="header-anchor" href="#отримання-методичного-забезпечення"><span>Отримання методичного забезпечення</span></a></h3><ul><li>Студенти можуть отримати методички по вибраному предмету.</li></ul><h2 id="аналіз-вимог" tabindex="-1"><a class="header-anchor" href="#аналіз-вимог"><span>Аналіз вимог</span></a></h2><h3 id="вимоги-до-функціональності" tabindex="-1"><a class="header-anchor" href="#вимоги-до-функціональності"><span>Вимоги до функціональності</span></a></h3><ul><li>Авторизація — користувачі повинні мати можливість заходити в систему.</li><li>Перегляд оцінок — студенти повинні мати можливість переглядати свої оцінки та атестації.</li><li>Фільтрація і пошук — система повинна дозволяти фільтрувати оцінки за предметами, викладачами, семестрами тощо.</li><li>Виставлення оцінок — викладачі повинні мати можливість виставляти оцінки студентам через систему.</li><li>Призначення сесій — викладачі повинні мати змогу встановлювати дати екзаменів, які студенти можуть переглядати та реєструватись на них.</li><li>Завантаження методичного забезпечення - студенти можуть завантажити методичне забезпечення з предметів.</li></ul><h3 id="нефункціональні-вимоги" tabindex="-1"><a class="header-anchor" href="#нефункціональні-вимоги"><span>Нефункціональні вимоги</span></a></h3><ul><li>Безпека — система повинна забезпечувати безпечну авторизацію та передачу даних між користувачами та сервером.</li><li>Швидкість — сайт повинен швидко відповідати на запити, щоб уникнути затримок при роботі з великими списками оцінок.</li><li>Масштабованість — система повинна підтримувати одночасний доступ великої кількості користувачів.</li><li>Надійність — сайт повинен працювати безперервно, з мінімальними перервами на технічне обслуговування.</li></ul><h2 id="користувачі-системи" tabindex="-1"><a class="header-anchor" href="#користувачі-системи"><span>Користувачі системи</span></a></h2><ul><li>Студенти - Основні користувачі системи, які мають доступ до перегляду своїх оцінок та календаря сесій.</li><li>Викладачі - Користувачі, які мають змогу виставляти оцінки та призначати дати здачі іспитів.</li><li>Адміністратори - Користувачі, які відповідальні за підтримку системи, управління курсами та викладачами.</li></ul><h2 id="стек-технологіи" tabindex="-1"><a class="header-anchor" href="#стек-технологіи"><span>Стек технологій</span></a></h2><p>Мова програмування: TypeScript. Фреймворк: Next.js для фронтенду і сервіс-сайд рендерингу. База даних: PostgreSQL для збереження інформації про користувачів, оцінки та курси. Хостинг: Vercel або інший хмарний сервіс для хостингу фронтенду і бекенду.</p><h2 id="ролі-членів-команди" tabindex="-1"><a class="header-anchor" href="#ролі-членів-команди"><span>Ролі членів команди</span></a></h2><p>Frontend-розробник: відповідає за розробку користувацького інтерфейсу та інтеграцію з бекендом. Backend-розробник: забезпечує роботу серверної частини і API для взаємодії з базою даних. Дизайнер: розробляє інтуїтивний та сучасний дизайн системи. Тестувальник: перевіряє систему на відповідність вимогам та виявляє помилки.</p><h2 id="пріоритетність-вимог" tabindex="-1"><a class="header-anchor" href="#пріоритетність-вимог"><span>Пріоритетність вимог</span></a></h2><p>Високий пріоритет: авторизація, виставлення та перегляд оцінок, призначення дат сесій. Середній пріоритет: фільтрація даних, методичні матеріали. Низький пріоритет: додаткові налаштування користувачів та інтерфейсу.</p><h2 id="висновки" tabindex="-1"><a class="header-anchor" href="#висновки"><span>Висновки</span></a></h2><p>Проект спрямований на створення сучасного сайту для студентського кампусу з покращеною функціональністю для студентів та викладачів. Наступні кроки включають початкову розробку архітектури, дизайн інтерфейсу та початок імплементації основних функцій.</p>',32),r=[t];function s(h,d){return a(),l("div",null,r)}const o=e(n,[["render",s],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/requirements/","title":"Аналіз вимог та створення документації","lang":"en-US","frontmatter":{"description":"Аналіз вимог та створення документації Мета Створити сайт для студентського кампусу з оновленим дизайном та функціоналом. Основна мета системи полягає в забезпеченні зручної вза...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/new-campus/requirements/"}],["meta",{"property":"og:site_name","content":"NewCampus"}],["meta",{"property":"og:title","content":"Аналіз вимог та створення документації"}],["meta",{"property":"og:description","content":"Аналіз вимог та створення документації Мета Створити сайт для студентського кампусу з оновленим дизайном та функціоналом. Основна мета системи полягає в забезпеченні зручної вза..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T15:27:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T15:27:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Аналіз вимог та створення документації\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T15:27:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Мета","slug":"мета","link":"#мета","children":[]},{"level":2,"title":"Опис проблеми","slug":"опис-проблеми","link":"#опис-проблеми","children":[]},{"level":2,"title":"Опис системи","slug":"опис-системи","link":"#опис-системи","children":[]},{"level":2,"title":"Основні функції системи","slug":"основні-функціі-системи","link":"#основні-функціі-системи","children":[{"level":3,"title":"Авторизація користувачів","slug":"авторизація-користувачів","link":"#авторизація-користувачів","children":[]},{"level":3,"title":"Виставлення оцінок і атестацій","slug":"виставлення-оцінок-і-атестаціи","link":"#виставлення-оцінок-і-атестаціи","children":[]},{"level":3,"title":"Призначення дати здачі сесій","slug":"призначення-дати-здачі-сесіи","link":"#призначення-дати-здачі-сесіи","children":[]},{"level":3,"title":"Отримання методичного забезпечення","slug":"отримання-методичного-забезпечення","link":"#отримання-методичного-забезпечення","children":[]}]},{"level":2,"title":"Аналіз вимог","slug":"аналіз-вимог","link":"#аналіз-вимог","children":[{"level":3,"title":"Вимоги до функціональності","slug":"вимоги-до-функціональності","link":"#вимоги-до-функціональності","children":[]},{"level":3,"title":"Нефункціональні вимоги","slug":"нефункціональні-вимоги","link":"#нефункціональні-вимоги","children":[]}]},{"level":2,"title":"Користувачі системи","slug":"користувачі-системи","link":"#користувачі-системи","children":[]},{"level":2,"title":"Стек технологій","slug":"стек-технологіи","link":"#стек-технологіи","children":[]},{"level":2,"title":"Ролі членів команди","slug":"ролі-членів-команди","link":"#ролі-членів-команди","children":[]},{"level":2,"title":"Пріоритетність вимог","slug":"пріоритетність-вимог","link":"#пріоритетність-вимог","children":[]},{"level":2,"title":"Висновки","slug":"висновки","link":"#висновки","children":[]}],"git":{"createdTime":1708081508000,"updatedTime":1727278020000,"contributors":[{"name":"Maxson","email":"77611206+Maxson71@users.noreply.github.com","commits":5},{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":3},{"name":"Hidar","email":"98514519+Engdan0@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"requirements/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{o as comp,u as data};
