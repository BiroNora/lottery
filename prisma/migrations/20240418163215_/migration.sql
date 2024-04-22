-- CreateTable
CREATE TABLE IF NOT EXISTS "five" (
    "five_id" SERIAL NOT NULL,
    "f_year" INTEGER NOT NULL,
    "f_week" INTEGER NOT NULL,
    "f_total" BIGINT NOT NULL,
    "f_first" INTEGER NOT NULL,
    "f_second" INTEGER NOT NULL,
    "f_third" INTEGER NOT NULL,
    "f_fourth" INTEGER NOT NULL,
    "f_fifth" INTEGER NOT NULL,

    CONSTRAINT "five_pkey" PRIMARY KEY ("five_id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "six" (
    "six_id" SERIAL NOT NULL,
    "s_year" INTEGER NOT NULL,
    "s_week" INTEGER NOT NULL,
    "s_total" BIGINT NOT NULL,
    "s_first" INTEGER NOT NULL,
    "s_second" INTEGER NOT NULL,
    "s_third" INTEGER NOT NULL,
    "s_fourth" INTEGER NOT NULL,
    "s_fifth" INTEGER NOT NULL,
    "s_sixth" INTEGER NOT NULL,

    CONSTRAINT "six_pkey" PRIMARY KEY ("six_id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "skandi" (
    "sk_id" SERIAL NOT NULL,
    "sk_year" INTEGER NOT NULL,
    "sk_week" INTEGER NOT NULL,
    "sk_total" BIGINT NOT NULL,
    "m_first" INTEGER NOT NULL,
    "m_second" INTEGER NOT NULL,
    "m_third" INTEGER NOT NULL,
    "m_fourth" INTEGER NOT NULL,
    "m_fifth" INTEGER NOT NULL,
    "m_sixth" INTEGER NOT NULL,
    "m_seventh" INTEGER NOT NULL,
    "h_first" INTEGER NOT NULL,
    "h_second" INTEGER NOT NULL,
    "h_third" INTEGER NOT NULL,
    "h_fourth" INTEGER NOT NULL,
    "h_fifth" INTEGER NOT NULL,
    "h_sixth" INTEGER NOT NULL,
    "h_seventh" INTEGER NOT NULL,

    CONSTRAINT "skandi_pkey" PRIMARY KEY ("sk_id")
);
