# 🚀 My Vite-React-Redux

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

## 📝 Описание

Этот проект — современное **React**-приложение, созданное с **Vite** и **TypeScript**.  
Используется **Redux Toolkit + Thunk** для управления состоянием, **SCSS-модули** для стилизации и **React Router** для навигации.

> ⚡ Быстрая сборка, удобное состояние и мощная архитектура!

---

## 🚀 **Запуск проекта**

### 🔧 Установка зависимостей

```bash
npm install
```

### ▶️ Запуск в режиме разработки

```bash
npm run dev
```

> Открой **http://localhost:3000** в браузере 🚀

### 🏗 Сборка для продакшена

```bash
npm run build
```

---

## 📡 **Работа с API**

Файл: `src/api/api.ts`

```ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
```

---

## 🎨 **Используемые технологии**

| Технология           | Описание                   |
| -------------------- | -------------------------- |
| 🟦 **React**         | Библиотека для создания UI |
| 🔷 **TypeScript**    | Строгая типизация          |
| 🟣 **Redux Toolkit** | Управление состоянием      |
| 🎨 **SCSS**          | Кастомные стили            |
| ⚡ **Vite**          | Быстрая сборка             |
| 🚦 **React Router**  | Навигация                  |
| 🌐 **Axios**         | Работа с API               |

---

## 📌 **Контакты**

💡 Автор: **NotACat1**

✉️ Email: **notacat.mail@gmail.com**

📌 GitHub: [NotACat1](https://github.com/NotACat1)

🚀 **Развивай проект, улучшай код и наслаждайся процессом!**
