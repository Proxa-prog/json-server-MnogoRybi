// const fs = require('fs');
// const jsonServer = require('json-server');
// const path = require('path');
//
// const server = jsonServer.create();
//
// const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
//
// server.use(jsonServer.defaults({}));
// server.use(jsonServer.bodyParser);
//
// // Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
// server.use(async (req, res, next) => {
//     await new Promise((res) => {
//         setTimeout(res, 800);
//     });
//     next();
// });
//
// // Эндпоинт для логина
// server.post('/login', (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
//         const { users = [] } = db;
//
//         const userFromBd = users.find(
//             (user) => user.username === username && user.password === password,
//         );
//
//         if (userFromBd) {
//             return res.json(userFromBd);
//         }
//
//         return res.status(403).json({ message: 'User not found' });
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json({ message: e.message });
//     }
// });
//
// // проверяем, авторизован ли пользователь
// // eslint-disable-next-line
// server.use((req, res, next) => {
//     if (!req.headers.authorization) {
//         return res.status(403).json({ message: 'AUTH ERROR' });
//     }
//
//     next();
// });
//
// server.use(router);
//
// // запуск сервера
// server.listen(2525, () => {
//     console.log('server is running on 2525 port');
// });

const express = require('express');
const app = express();
app.get('/productions', (req, res) => res.send([
    {
        "id": "1",
        "imageUrl": "poke/poke_with_turkey.jpg",
        "header": "Фирменный поке с индейкой",
        "description": "Состав на усмотрение шеф-повара",
        "cost": "360",
        "previousCost": "360",
        "buttonColor": "yellow",
        "statuses": [
            {
                "children": "Хит",
                "color": "blue"
            },
            {
                "children": "-10%",
                "color": "purple"
            }
        ]
    }]
));
app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));