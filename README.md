
# Redux Toolkit
 
Небольшое приложение на React + TypeScript, демонстрирующее работу с REST‑API через RTK Query и хранением локального состояния с помощью Redux. Тестовый сервер на базе `json-server` обслуживает endpoints для работы с постами в блоге.

---

## Стек технологий
- **React**  
- **TypeScript**  
- **Redux Toolkit**  
- **RTK Query**  
- **json-server** (тестовый API)

---

## Установка и запуск
1. Установить зависимости:
    ```bash
   npm install
    ```


2. Запуск json-сервера\
    json-сервер будет запущен на порту 3000 (значение по умолчанию)
   ```bash
   json-server --watch db.json
    ```
    
3. Запуск React-приложения\
    Приложение будет запущено на порту 8080, это указано в файле `.env`
    ```bash
   npm start
    ```