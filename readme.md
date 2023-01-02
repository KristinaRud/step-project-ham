## [DEMO](https://kristinarud.github.io/step-project-ham/)

## Завдання

Зверстати [макет](https://www.figma.com/file/Do0TLndoEjGwuF9Ri7UHol/The_Ham_Steo-Project?node-id=1%3A2). Підключити динамічні елементи (див. нижче)

#### Технічні вимоги до верстки
- Потрібно зробити верстку тільки під широкоформатні монітори з шириною екрану 1200 пікселів або більше (тобто ширина контенту фіксована в пікселях). Максимальна ширина контейнера з контентом – 1160 пікселів (крім другого блоку з квадратами).
- Фонове зображення в шапці повинне займати всю доступну ширину екрана і не рухатися під час скролу вниз (ефект паралаксу).
- Адаптивна верстка під різні роздільні здатності екрана НЕ потрібна.
- Картки в секції `Breaking news` мають бути клікабельними посиланнями.
- Секція `Gallery of best images` не є обов'язковою для виконання.
- Верстка має бути виконана без використання CSS бібліотек типу Bootstrap або Materialize.

#### Динамічні елементи на сторінці:
- Вкладки у секції `Our services` повинні перемикатися при натисканні мишею. Текст та картинки для інших вкладок додати будь-які.
- Кнопка `Load more` у секції `Our amazing work` імітує завантаження з сервера нових картинок. При її натисканні в секції знизу мають з'явитись ще 12 картинок (зображення можна взяти будь-які). Після цього кнопка зникає.
- Кнопки на вкладці `Our amazing work` є "фільтрами продукції". Попередньо кожній із картинок потрібно присвоїти одну з чотирьох категорій, на ваш розсуд (на макеті це `Graphic design`, `Web design`, `Landing pages`, `Wordpress`).При натисканні на кнопку категорії необхідно показати лише ті картинки, які належать до цієї категорії. `All` показує картинки з усіх категорій. Категорії можна перейменувати, картинки для категорій взяти будь-які. 
- Карусель на вкладці `What people say about theHam` має бути робочою, по кліку як на іконку фотографії внизу, так і на стрілки вправо-вліво. У каруселі має змінюватися як картинка, і текст. Карусель обов'язково має бути з анімацією.
- Для підключення динамічних елементів можна використовувати будь-які бібліотеки – як jQuery/його плагіни, так і чистий Javascript код.
   
#### Необов'язкові завдання підвищеної складності:
- Кнопку `Load more` у секції `Our amazing work` можна натиснути двічі, кожне натискання додає 12 картинок знизу. Тобто максимум у цій секції може бути 36 картинок. Після другого натискання кнопка зникає.
- Зверстати також секцію `Gallery of best images`, розташувати картинки всередині блоку за допомогою плагіну [Masonry](https://masonry.desandro.com/).
- Кнопка `Load more` у секції `Gallery of best images` також має бути робочою та додавати порцію нових картинок на сторінку.
- При натисканні на кожну з кнопок `Load more` імітувати завантаження картинок із сервера. Показувати замість кнопки або над нею дві секунди CSS анімацію завантаження (можна написати самому або взяти будь-який приклад з інтернету, наприклад [тут](https://freefrontend.com/css-loaders/) або [тут](http://nisnom.com/preloadery-loader/)), і лише після цього додавати картинки на сторінку.
- Розмістити проект в інтернеті за допомогою [Github pages](https://pages.github.com/) або [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) (Не забудьте потім додати посилання на резюме).

Для зручності всі картинки з макету розміщені в [архіві](./Step%20Project%20Ham%20Pictures.zip).

#### Удачі!
