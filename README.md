# Hafifa-Alpha-First-Fastify-API

A basic Fastify starter project for the Hafifa

דברים חשובים:

- lifeCycle
- hooks
- Encapsulation
- Decorators
- Logging
- Plugins
- Schema
- TypeBox
- Request
- Reply
- Query Parmas
- Dynamic Path
- Fastify Auto load, cors, cookie, swagger

## חפיפת Fastify

ברוכים הבאים לחפיפת הFastify של צוות אלפא. בתרגיל זה תבנו צד שרת בסיסי ותכירו קצת יותר את Fastify.

### שלב 1 - הרצת הפרוייקט לוקאלית

#### סידור סביבת העובדה:

ודאו שיש לכם [postman](https://www.postman.com/) גם לפתוח חשבון ולהשתמש ב workSpace מהאתר שלהם זה בסדר.

#### התקנת הפורייקט:

```bash
cd C:\users\[your user]\[code projects folder]
git clone https://github.com/yoav0gal/Hafifa-Alpha-First-Fastify-API.git
cd ./Hafifa-Alpha-First-Fastify-API
```

#### הרצת הפוייקט:

`npm i`

`npm run dev`

פתחו http://localhost:3000/ ובדקו אם קיבלתם Hello Alpha!

---

### שלב 2 - פיתוח בסיסי

בשלב זה תפתחו API CURD (create, read, update, and delete) בסיסי.

בקובץ alphaData קיים מערך בשם members, השתמש בו לבצע את המשימות הבאות:

- GET alpha/members - החזר את כל הצוות
- GET alpha/member/:id - החזר חבר צוות אם המזהה המתאים
-
