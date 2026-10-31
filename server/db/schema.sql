-- ==============================
-- PANICDESK - POSTRGRESQL SCHEMA
-- ==============================

-- ---------- ENUMOK ----------
CREATE TYPE user_role AS ENUM ('ADMIN', 'CUSTOMER');
CREATE TYPE ticket_status AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- UNACCENT BŐVÍTMÉNY ENGEDÉLYEZÉSE (ÉKEZETMENTES KERESÉS)
CREATE EXTENSION IF NOT EXISTS unaccent;

-- ---------- TÁBLÁK ----------
CREATE TABLE users (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    name          TEXT        NOT NULL,    
    email         TEXT        NOT NULL UNIQUE,
    password_hash TEXT        NOT NULL,
    role          user_role   NOT NULL DEFAULT 'CUSTOMER',
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
