CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    codeforces_handle VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE problems (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL,
    tags TEXT[] NOT NULL,
    codeforces_id INTEGER UNIQUE
);

CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    problem_id INTEGER NOT NULL REFERENCES problems(id),
    verdict VARCHAR(50) NOT NULL,
    language VARCHAR(100),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    codeforces_submission_id BIGINT UNIQUE,
    time_consumed INTEGER,
    memory_consumed INTEGER
);

CREATE TABLE contests (
    id SERIAL PRIMARY KEY,
    contest_id INTEGER UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    contest_type VARCHAR(100),
    start_time TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contest_participations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    contest_id INTEGER NOT NULL REFERENCES contests(id),
    rank INTEGER,
    old_rating INTEGER,
    new_rating INTEGER,
    rating_change INTEGER,
    participated_at TIMESTAMP
);