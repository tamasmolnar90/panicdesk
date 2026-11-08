-- ==============================
-- PANICDESK - POSTRGRESQL SCHEMA
-- ==============================

-- ---------- ENUMOK ----------
CREATE TYPE user_role AS ENUM ('ADMIN', 'CUSTOMER');
CREATE TYPE ticket_status AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- ---------- BŐVÍTMÉNYEK ----------
-- UNACCENT (ÉKEZETMENTES KERESÉS)
CREATE EXTENSION IF NOT EXISTS unaccent;

-- gen_random_uuid() generálásához kell, de PG 13+ ban alapból van
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ---------- TÁBLÁK ----------
CREATE TABLE users (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    name          TEXT        NOT NULL,    
    email         TEXT        NOT NULL UNIQUE,
    password_hash TEXT        NOT NULL,
    role          user_role   NOT NULL DEFAULT 'CUSTOMER',
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE priorities (
    id    UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
    name  TEXT    NOT NULL UNIQUE,
    level INTEGER NOT NULL UNIQUE
);

CREATE TABLE categories (
    id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name  TEXT NOT NULL UNIQUE
);

CREATE TABLE tickets (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title       TEXT NOT NULL,
    description TEXT NOT NULL,
    status      ticket_status NOT NULL DEFAULT 'OPEN'
);

-- pass: admin123
INSERT INTO users (name, email, password_hash, role)
VALUES ('Admin', 'admin@admin.com', '$2b$12$5hv0PySk1SQlK6ect9CYQO0iLiXoA1CHSetUBdBF0X4RNXKS70Ydy', 'ADMIN');