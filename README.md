# 🛒 Products API

A simple RESTful API built to practice and understand the core concepts of HTTP methods — **GET**, **POST**, **PUT**, and **DELETE** — using Node.js, Express, and PostgreSQL with Prisma ORM.

---

## 🚀 Technologies used

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
---

## 📁 Project Structure

```
api-produtos/
├── src/
│   └── routes/
│       └── productRoutes.js   # Product route definitions
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Migration history
├── .env                       # Environment variables (not committed)
├── server.js                  # App entry point
├── package.json
└── .gitignore
```

---

## ✅ Features

- Create a product
- List all products
- Get a single product by ID
- Update a product by ID
- Delete a product by ID

---

## 🗃️ Product Model

| Field         | Type   | Description             |
|---------------|--------|-------------------------|
| id            | Int    | Auto-generated ID       |
| name          | String | Product name            |
| price         | Float  | Product price           |
| description   | String | Product description     |
| category      | String | Product category        |
| stock         | Int    | Units in stock          |

---

## 📡 API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| POST   | /products         | Create a new product     |
| GET    | /products         | List all products        |
| GET    | /products/:id     | Get a product by ID      |
| PUT    | /products/:id     | Update a product by ID   |
| DELETE | /products/:id     | Delete a product by ID   |

---

## 🔧 How to Run Locally

### Prerequisites

- Node.js installed
- PostgreSQL installed and running
- A PostgreSQL database created (e.g. `api_produtos`)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/devmoisesz/crud-products
cd crud-products
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root with your database connection:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/api_produtos?schema=public"
```

4. Run Prisma migrations:

```bash
npx prisma migrate dev
```

5. Start the server:

```bash
node --watch server.js
```

The server will be running at `http://localhost:3020`.
