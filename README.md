Технології (інструменти)  які потрібно використовувати: Node.js, PostgreSQL, TypeScript _(не обов'язково)_.

Потрібно реалізувати проект який буде виконувати наступний функціонал:

1. Парсити список працівників JetUp з сайту [https://jetup.digital/team](https://jetup.digital/team) та зберігати данні працівників в локальну базу даних. Парсинг має запускатися при запуску проекту.
2. Має бути роут для отримання списку працівників з можливістю фільтрації по строці пошука.

Результат опублікувати у відкритому git репозиторії та надати посилання.

http://localhost:7000/employees - route for receive all employees
**For start app you must:** 
1. run Docker
2. npm i
3. npm run compose
4. npm run migrate
5. npm run start 
/n**For use filter write it in query param like this: "http://localhost:7000/employees?filter=Maxim"**
