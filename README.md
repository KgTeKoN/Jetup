Технології (інструменти)  які потрібно використовувати: Node.js, PostgreSQL, TypeScript *(не обов'язково)*.

Потрібно реалізувати проект який буде виконувати наступний функціонал:

1. Парсити список працівників JetUp з сайту [https://jetup.digital/team](https://jetup.digital/team) та зберігати данні працівників в локальну базу даних. Парсинг має запускатися при запуску проекту.
2. Має бути роут для отримання списку працівників з можливістю фільтрації по строці пошука.

Результат опублікувати у відкритому git репозиторії та надати посилання.

npm run start
npm run makeMigrate - for make migrate
npm run migrate - for execute migration

http://localhost:7000/employees - route for receive all employees
**For start app you must run Docker, command "npm run compose", command "npm run start". For use filter write it in query param like this: "http://localhost:7000/employees?filter=Maxim"**
