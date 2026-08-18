# CP Coach Architecture

## 1. Overview

CP Coach is an AI-powered competitive programming coaching platform designed to help competitive programmers analyze their performance, identify weaknesses, receive personalized problem recommendations, and interact with an AI coach.

The application consists of five major components:

1. Frontend
2. Backend
3. AI Service
4. Database
5. External Services

---

# 2. High-Level Architecture

```text
                         USER
                           |
                           v
                  +------------------+
                  |  React Frontend  |
                  |  Vite + JS       |
                  +--------+---------+
                           |
                           | HTTP / REST
                           v
                  +------------------+
                  | Node.js Backend  |
                  |    Express.js    |
                  +--------+---------+
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
       PostgreSQL    Codeforces API   Python AI Service
                                         |
                                         v
                                        LLM

                                      
                                      
```                                      
## Current Project Structure

```text
cp-coach/
│
├── frontend/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── ai-service/
├── docs/
├── .gitignore
└── README.md