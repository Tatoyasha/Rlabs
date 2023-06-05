import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Як створити сайт, який приверне клієнтів: поради від професіоналів веб-розробки',
    description: ' Дізнайтеся, як створити привабливий і ефективний сайт, здатний залучити й утримати клієнтів. У цьому пості ви отримаєте цінні поради та найкращі практики від досвідчених веб-розробників.',
    content: ' Цей пост буде присвячений тому, як розробити сайт, який не тільки має професійний вигляд, а й здатний привабити клієнтів і перетворити їх на постійних користувачів. Ви дізнаєтеся про важливі елементи дизайну та навігації, які допоможуть утримувати відвідувачів на сайті та підвищити конверсію. Досвідчені веб-розробники поділяться своїми найкращими порадами та розкажуть про ефективні стратегії, які можна застосувати при створенні сайту. У результаті ви зможете розробити сайт, який приверне увагу і залишить позитивне враження у вашої цільової аудиторії.',
    category: 'Веб-Розробка',
    comments: [
      {
        id: 1,
        nickname: 'User1',
        text: 'Цей пост дійсно корисний! Дякую за поради.',
        timestamp: '2023-06-05 14:30',
      },
      {
        id: 2,
        nickname: 'User2',
        text: 'Дуже цікава інформація. Сподобалось читати.',
        timestamp: '2023-06-05 15:10',
      },
    ],
  },
  {
    id: 2,
    title: "Важливість мобільної адаптивності: чому ваш сайт має бути доступний на всіх пристроях",
    description: "Дізнайтеся, чому мобільна адаптивність є невід'ємною частиною успішного веб-сайту, і як забезпечити доступність вашого сайту на всіх пристроях.",
    content: "Сьогодні багато людей використовують мобільні пристрої для пошуку інформації та здійснення покупок в Інтернеті. Тому важливо, щоб ваш веб-сайт був доступний і читабельний на всіх пристроях, включно зі смартфонами та планшетами. У цьому пості ми розглянемо важливість мобільної адаптивності та пояснимо, як вона впливає на користувацький досвід. Ви дізнаєтеся про технології та підходи, які дають змогу створити мобільно-адаптивний сайт, і отримаєте поради щодо оптимізації контенту та дизайну для різних екранів. Після читання цього поста ви будете готові забезпечити доступність вашого сайту на всіх пристроях і задовольнити потреби сучасних користувачів.",
    category: 'Веб-розробка',
    comments: [
      {
        id: 1,
        nickname: "User1",
        text: "Дуже цікавий пост! Ваші поради є дійсно корисними для створення привабливого сайту. Я вже застосував кілька з них у своєму проекті та помітив покращення в залученні клієнтів. Дякую за таку цінну інформацію!",
        timestamp: "2023-06-05 14:30"
      },
      {
        id: 2,
        nickname: "User2",
        text: "Цей пост дав мені нові ідеї для мого веб-сайту. Особливо сподобалась порада про створення привабливого дизайну та зручну навігацію. Це дійсно впливає на користувачів і забезпечує більше конверсій. Дякую за чудову статтю!",
        timestamp: "2023-06-05 15:10",
      },
    ],
  },
  {
    id: 3,
    title: 'Ключові етапи розробки сайту: від ідеї до запуску',
    description: ' У цьому пості ми розглянемо основні етапи розробки сайту і допоможемо вам розібратися в процесі, починаючи від ідеї і закінчуючи успішним запуском',
    content: 'Створення сайту - це складний і багатогранний процес, який включає кілька ключових етапів. У цьому пості ми познайомимо вас із кожним етапом розробки сайту і розповімо про завдання та особливості кожного з них. Ви дізнаєтеся, як визначити цілі та вимоги вашого сайту, як створити структуру і макет, як розробити функціональність і зовнішній вигляд, а також як провести тестування і випустити сайт у продакшн. Ми також обговоримо найкращі практики і поділимося порадами з управління проектом розробки сайту. Після прочитання цього поста ви матимете чітке уявлення про процес створення сайту і зможете ефективно керувати всіма його етапами.',
    category: 'Веб-Розробка',
    comments: [
      {
        id: 1,
        nickname: "User3",
        text: "Ця тема дуже актуальна, особливо в сучасному світі мобільних пристроїв. Багато разів звертався на сайти, які не були адаптовані для мобільних пристроїв, і це створює незручності. Дякую за підкреслення важливості мобільної адаптивності!",
        timestamp: "2023-06-05 16:45",
      },
      {
        id: 2,
        nickname: "User4",
        text: "Дуже чітко описані етапи розробки від ідеї до запуску. Я сам розробляю свій перший сайт, і ця інформація допомогла мені зорієнтуватись у процесі. Спасибі за структуровану статтю!",
        timestamp: "2023-06-05 17:20"
      },
    ],
  },
  {
    id: 4,
    title: "Ключові етапи розробки додатків: від ідеї до випуску",
    description: " У цьому пості ми розглянемо ключові етапи розробки застосунків і допоможемо вам розібратися в процесі створення застосунків від ідеї до випуску на ринок",
    content: "Розробка додатків - це складний і багатоетапний процес. У цьому пості ми детально розглянемо ключові етапи розробки застосунків, які допоможуть вам успішно перетворити ідею на реальність. Ми почнемо з визначення цілей і вимог застосунку, потім перейдемо до створення прототипу і дизайну користувацького інтерфейсу. Ви дізнаєтеся про важливість розробки якісного коду, тестування та налагодження застосунку перед його випуском. Ми також розглянемо процес публікації та маркетингу програми для досягнення максимального успіху на ринку. Після прочитання цього посту ви будете готові до реалізації своєї ідеї та створення якісного застосунку.",
    category: 'розробка додатків',
    comments: [
      {
        id: 1,
        nickname: "User5",
        text: "Цей пост дуже корисний для тих, хто має намір розробляти додатки. Важливо мати на увазі всі етапи, щоб забезпечити успішний випуск. Дякую за чудову інформацію!",
        timestamp: "2023-06-05 18:00",
      },
      {
        id: 2,
        nickname: "User6",
        text: "Дуже цікавий перелік топових мов програмування для розробки мобільних додатків. Я вже працюю з Java, але планую спробувати Kotlin. Дякую за рекомендації!",
        timestamp: "2023-06-05 19:15",
      },
    ],
  },
  {
    id: 5,
    title: "Вибір платформи розробки додатків: iOS vs Android",
    description: "У цьому пості ми порівняємо платформи iOS і Android для розробки застосунків і допоможемо вам вибрати платформу, яка найбільше підходить для вашого проєкту.",
    content: "Під час розробки застосунків важливо вибрати відповідну платформу, яка забезпечить максимальне охоплення аудиторії та відповідає вашим цілям. У цьому пості ми порівняємо платформи iOS і Android і допоможемо вам прийняти рішення про вибір. Ми розглянемо особливості кожної платформи, такі як розмір ринку, платоспроможність користувачів, можливості розробки та інструменти. Ви дізнаєтеся про відмінності в дизайн-принципах і гайдлайнах, а також про різні моделі розповсюдження та монетизації додатків. Після прочитання цього посту ви зможете прийняти обґрунтоване рішення щодо вибору платформи для вашого застосунку.",
    category: 'розробка додатків',
    comments: [
      {
        id: 1,
        nickname: "User7",
        text: "Я недавно почав вивчати React JS і ця стаття була для мене чудовим вступом. Зрозуміло пояснено основи і переваги цього фреймворку. Дякую за відмінний матеріал!",
        timestamp: "2023-06-05 20:30",
      },
      {
        id: 2,
        nickname: 'User2',
        text: 'Дуже цікава інформація. Сподобалось читати.',
        timestamp: '2023-06-05 15:10',
      },
    ],
  },
  {
    id: 6,
    title: "Топові мови програмування для розробки мобільних додатків",
    description: " У цьому пості ми представимо вам список топових мов програмування, які широко використовуються для розробки мобільних додатків, і розповімо про їхні особливості та переваги.",
    content: "Вибір мови програмування - важливий аспект розробки мобільних додатків. У цьому пості ми представимо вам список топових мов програмування, які широко використовуються для розробки мобільних додатків. Ми розповімо про кожну мову, її особливості та переваги. Ви дізнаєтеся про мови, такі як Swift (для iOS), Kotlin і Java (для Android), JavaScript (для гібридних додатків) та інші популярні мови. Ми також обговоримо фреймворки та інструменти, пов'язані з кожною мовою. Після прочитання цього посту ви зможете вибрати найбільш підходящу мову програмування для вашого мобільного додатка.",
    category: 'розробка додатків',
    comments: [
      {
        id: 1,
        nickname: "User8",
        text: "Цей підхід до розробки інтерфейсу у React JS дійсно спрощує процес. Я вже використовую компоненти у своєму проекті і здивований, наскільки зручно і ефективно це працює. Дякую за пояснення!",
        timestamp: "2023-06-05 21:40",
      },
      {
        id: 2,
        nickname: "User9",
        text: "Redux є потужним інструментом для керування станом у React JS. Я вже використовую його у своєму проекті і ця стаття допомогла зрозуміти основні принципи його роботи. Дякую за чудовий огляд!",
        timestamp: "2023-06-05 22:55",
      },
    ],
  },
  {
    id: 7,
    title: "Вступ до React JS: основи та переваги",
    description: "У цьому пості ми познайомимо вас із React JS - популярною бібліотекою JavaScript для розробки користувацьких інтерфейсів, і розповімо про її основи та переваги.",
    content: "eact JS - це потужна бібліотека JavaScript, яка дає змогу розробникам створювати ефективні та масштабовані користувацькі інтерфейси. У цьому пості ми представимо вам основи React JS, включно з компонентами, віртуальним DOM, JSX-синтаксисом і життєвим циклом компонентів. Ви дізнаєтеся про переваги React JS, такі як підвищена продуктивність, можливість перевикористання компонентів і легкість тестування. Ми також розповімо про екосистему React JS, включно з популярними інструментами та бібліотеками, які допоможуть вам розробляти додатки з використанням React JS. Після прочитання цього допису ви матимете базове розуміння React JS і готові розпочати розробку з використанням цієї бібліотеки.",
    category: 'React JS',
    comments: [
      {
        id: 1,
        nickname: 'User1',
        text: 'Цей пост дійсно корисний! Дякую за поради.',
        timestamp: '2023-06-05 14:30',
      },
      {
        id: 2,
        nickname: 'User2',
        text: 'Дуже цікава інформація. Сподобалось читати.',
        timestamp: '2023-06-05 15:10',
      },
    ],
  },
  {
    id: 8,
    title: "Компонентний підхід у React JS: створення перевикористовуваних і модульних інтерфейсів",
    description: "У цьому пості ми розглянемо компонентний підхід у React JS і покажемо, як створювати повторно використовувані та модульні компоненти для розробки користувацьких інтерфейсів.",
    content: "Компонентний підхід є основним принципом розробки в React JS. У цьому пості ми розглянемо, що таке компоненти в React JS і як вони допомагають створювати повторно використовувані та модульні інтерфейси. Ви дізнаєтеся про різні типи компонентів, такі як функціональні та класові компоненти, і про те, як вони взаємодіють один з одним. Ми також покажемо вам, як передавати властивості (props) між компонентами і як використовувати стан (state) для управління динамічними даними. Ви дізнаєтеся про методи життєвого циклу компонентів і про те, як використовувати їх для виконання певних дій на різних етапах розробки. Після прочитання цього посту ви знатимете, як створювати гнучкі та перевикористовувані компоненти в React JS.",
    category: 'React JS',
    comments: [
      {
        id: 1,
        nickname: 'User1',
        text: 'Цей пост дійсно корисний! Дякую за поради.',
        timestamp: '2023-06-05 14:30',
      },
      {
        id: 2,
        nickname: 'User2',
        text: 'Дуже цікава інформація. Сподобалось читати.',
        timestamp: '2023-06-05 15:10',
      },
    ],
  },
  {
    id: 9,
    title: "Керування станом у React JS: введення в Redux",
    description: "У цьому пості ми поговоримо про управління станом у React JS і познайомимо вас із бібліотекою Redux, яка допомагає ефективно керувати станом додатків.",
    content: "Керування станом - важливе завдання при розробці додатків на React JS. У цьому пості ми розглянемо різні підходи до управління станом у React JS і представимо вам бібліотеку Redux, яка є одним із найпопулярніших інструментів для управління станом. Ми пояснимо основні концепції Redux, як-от односпрямований потік даних і використання єдиного сховища для стану програми. Ви дізнаєтеся про дії (actions), редьюсерів (reducers) і сховище (store) у Redux, і про те, як вони взаємодіють із компонентами React JS. Ми також покажемо вам, як використовувати Redux DevTools для налагодження та моніторингу стану вашого застосунку. Після прочитання цього посту ви будете готові застосувати Redux для ефективного управління станом вашого додатка на React JS.",
    category: 'React JS',
    comments: [
      {
        id: 1,
        nickname: 'User1',
        text: 'Цей пост дійсно корисний! Дякую за поради.',
        timestamp: '2023-06-05 14:30',
      },
      {
        id: 2,
        nickname: 'User2',
        text: 'Дуже цікава інформація. Сподобалось читати.',
        timestamp: '2023-06-05 15:10',
      },
    ],
  }
];


const BlogPost = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleEditComment = (commentId, newText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, text: newText };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText) {
      const newComment = {
        id: comments.length + 1,
        nickname: 'Your Nickname',
        text: commentText,
        timestamp: new Date().toLocaleString(),
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setCommentText('');
    }
  };

  if (!post) {
    return <div>Пост не знайдено</div>;
  }

  return (
    <div style={{ maxWidth: '60em' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div>
        <h3>Коментарі:</h3>
        {comments.map((comment) => (
          <div key={comment.id} style={{ border: '1px solid #ccc', padding: '1em', margin: '1em 0' }}>
            <p><strong>{comment.nickname}</strong></p>
            <p>{comment.text}</p>
            <p>{comment.timestamp}</p>
            <div>
              <button style={{ color: 'blue', marginRight: '1em' }}>Редагувати</button>
              <button style={{ color: 'blue' }}>Видалити</button>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitComment}>
        <div>
          <label>
            Нік-нейм:
            <input
              type="text"
              value="Your Nickname"
              onChange={(e) => setCommentText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Коментар:
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </label>
        </div>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default BlogPost;


// const posts = [
//   {
//     id: 1,
//     title: 'Як створити сайт, який приверне клієнтів: поради від професіоналів веб-розробки',
//     description: ' Дізнайтеся, як створити привабливий і ефективний сайт, здатний залучити й утримати клієнтів. У цьому пості ви отримаєте цінні поради та найкращі практики від досвідчених веб-розробників.',
//     content: ' Цей пост буде присвячений тому, як розробити сайт, який не тільки має професійний вигляд, а й здатний привабити клієнтів і перетворити їх на постійних користувачів. Ви дізнаєтеся про важливі елементи дизайну та навігації, які допоможуть утримувати відвідувачів на сайті та підвищити конверсію. Досвідчені веб-розробники поділяться своїми найкращими порадами та розкажуть про ефективні стратегії, які можна застосувати при створенні сайту. У результаті ви зможете розробити сайт, який приверне увагу і залишить позитивне враження у вашої цільової аудиторії.',
//     category: 'Веб-Розробка',
//   },
//   {
//     id: 2,
//     title: "Важливість мобільної адаптивності: чому ваш сайт має бути доступний на всіх пристроях",
//     description: "Дізнайтеся, чому мобільна адаптивність є невід'ємною частиною успішного веб-сайту, і як забезпечити доступність вашого сайту на всіх пристроях.",
//     content: "Сьогодні багато людей використовують мобільні пристрої для пошуку інформації та здійснення покупок в Інтернеті. Тому важливо, щоб ваш веб-сайт був доступний і читабельний на всіх пристроях, включно зі смартфонами та планшетами. У цьому пості ми розглянемо важливість мобільної адаптивності та пояснимо, як вона впливає на користувацький досвід. Ви дізнаєтеся про технології та підходи, які дають змогу створити мобільно-адаптивний сайт, і отримаєте поради щодо оптимізації контенту та дизайну для різних екранів. Після читання цього поста ви будете готові забезпечити доступність вашого сайту на всіх пристроях і задовольнити потреби сучасних користувачів.",
//     category: 'Веб-розробка',
//   },
//   {
//     id: 3,
//     title: 'Ключові етапи розробки сайту: від ідеї до запуску',
//     description: ' У цьому пості ми розглянемо основні етапи розробки сайту і допоможемо вам розібратися в процесі, починаючи від ідеї і закінчуючи успішним запуском',
//     content: 'Створення сайту - це складний і багатогранний процес, який включає кілька ключових етапів. У цьому пості ми познайомимо вас із кожним етапом розробки сайту і розповімо про завдання та особливості кожного з них. Ви дізнаєтеся, як визначити цілі та вимоги вашого сайту, як створити структуру і макет, як розробити функціональність і зовнішній вигляд, а також як провести тестування і випустити сайт у продакшн. Ми також обговоримо найкращі практики і поділимося порадами з управління проектом розробки сайту. Після прочитання цього поста ви матимете чітке уявлення про процес створення сайту і зможете ефективно керувати всіма його етапами.',
//     category: 'Веб-Розробка',
//   },
//   {
//     id: 4,
//     title: "Ключові етапи розробки додатків: від ідеї до випуску",
//     description: " У цьому пості ми розглянемо ключові етапи розробки застосунків і допоможемо вам розібратися в процесі створення застосунків від ідеї до випуску на ринок",
//     content: "Розробка додатків - це складний і багатоетапний процес. У цьому пості ми детально розглянемо ключові етапи розробки застосунків, які допоможуть вам успішно перетворити ідею на реальність. Ми почнемо з визначення цілей і вимог застосунку, потім перейдемо до створення прототипу і дизайну користувацького інтерфейсу. Ви дізнаєтеся про важливість розробки якісного коду, тестування та налагодження застосунку перед його випуском. Ми також розглянемо процес публікації та маркетингу програми для досягнення максимального успіху на ринку. Після прочитання цього посту ви будете готові до реалізації своєї ідеї та створення якісного застосунку.",
//     category: 'розробка додатків',
//   },
//   {
//     id: 5,
//     title: "Вибір платформи розробки додатків: iOS vs Android",
//     description: "У цьому пості ми порівняємо платформи iOS і Android для розробки застосунків і допоможемо вам вибрати платформу, яка найбільше підходить для вашого проєкту.",
//     content: "Під час розробки застосунків важливо вибрати відповідну платформу, яка забезпечить максимальне охоплення аудиторії та відповідає вашим цілям. У цьому пості ми порівняємо платформи iOS і Android і допоможемо вам прийняти рішення про вибір. Ми розглянемо особливості кожної платформи, такі як розмір ринку, платоспроможність користувачів, можливості розробки та інструменти. Ви дізнаєтеся про відмінності в дизайн-принципах і гайдлайнах, а також про різні моделі розповсюдження та монетизації додатків. Після прочитання цього посту ви зможете прийняти обґрунтоване рішення щодо вибору платформи для вашого застосунку.",
//     category: 'розробка додатків',
//   },
//   {
//     id: 6,
//     title: "Топові мови програмування для розробки мобільних додатків",
//     description: " У цьому пості ми представимо вам список топових мов програмування, які широко використовуються для розробки мобільних додатків, і розповімо про їхні особливості та переваги.",
//     content: "Вибір мови програмування - важливий аспект розробки мобільних додатків. У цьому пості ми представимо вам список топових мов програмування, які широко використовуються для розробки мобільних додатків. Ми розповімо про кожну мову, її особливості та переваги. Ви дізнаєтеся про мови, такі як Swift (для iOS), Kotlin і Java (для Android), JavaScript (для гібридних додатків) та інші популярні мови. Ми також обговоримо фреймворки та інструменти, пов'язані з кожною мовою. Після прочитання цього посту ви зможете вибрати найбільш підходящу мову програмування для вашого мобільного додатка.",
//     category: 'розробка додатків',
//   },
//   {
//     id: 7,
//     title: "Вступ до React JS: основи та переваги",
//     description: "У цьому пості ми познайомимо вас із React JS - популярною бібліотекою JavaScript для розробки користувацьких інтерфейсів, і розповімо про її основи та переваги.",
//     content: "eact JS - це потужна бібліотека JavaScript, яка дає змогу розробникам створювати ефективні та масштабовані користувацькі інтерфейси. У цьому пості ми представимо вам основи React JS, включно з компонентами, віртуальним DOM, JSX-синтаксисом і життєвим циклом компонентів. Ви дізнаєтеся про переваги React JS, такі як підвищена продуктивність, можливість перевикористання компонентів і легкість тестування. Ми також розповімо про екосистему React JS, включно з популярними інструментами та бібліотеками, які допоможуть вам розробляти додатки з використанням React JS. Після прочитання цього допису ви матимете базове розуміння React JS і готові розпочати розробку з використанням цієї бібліотеки.",
//     category: 'React JS',
//   },
//   {
//     id: 8,
//     title: "Компонентний підхід у React JS: створення перевикористовуваних і модульних інтерфейсів",
//     description: "У цьому пості ми розглянемо компонентний підхід у React JS і покажемо, як створювати повторно використовувані та модульні компоненти для розробки користувацьких інтерфейсів.",
//     content: "Компонентний підхід є основним принципом розробки в React JS. У цьому пості ми розглянемо, що таке компоненти в React JS і як вони допомагають створювати повторно використовувані та модульні інтерфейси. Ви дізнаєтеся про різні типи компонентів, такі як функціональні та класові компоненти, і про те, як вони взаємодіють один з одним. Ми також покажемо вам, як передавати властивості (props) між компонентами і як використовувати стан (state) для управління динамічними даними. Ви дізнаєтеся про методи життєвого циклу компонентів і про те, як використовувати їх для виконання певних дій на різних етапах розробки. Після прочитання цього посту ви знатимете, як створювати гнучкі та перевикористовувані компоненти в React JS.",
//     category: 'React JS',
//   },
//   {
//     id: 9,
//     title: "Керування станом у React JS: введення в Redux",
//     description: "У цьому пості ми поговоримо про управління станом у React JS і познайомимо вас із бібліотекою Redux, яка допомагає ефективно керувати станом додатків.",
//     content: "Керування станом - важливе завдання при розробці додатків на React JS. У цьому пості ми розглянемо різні підходи до управління станом у React JS і представимо вам бібліотеку Redux, яка є одним із найпопулярніших інструментів для управління станом. Ми пояснимо основні концепції Redux, як-от односпрямований потік даних і використання єдиного сховища для стану програми. Ви дізнаєтеся про дії (actions), редьюсерів (reducers) і сховище (store) у Redux, і про те, як вони взаємодіють із компонентами React JS. Ми також покажемо вам, як використовувати Redux DevTools для налагодження та моніторингу стану вашого застосунку. Після прочитання цього посту ви будете готові застосувати Redux для ефективного управління станом вашого додатка на React JS.",
//     category: 'React JS',
//   }
// ];