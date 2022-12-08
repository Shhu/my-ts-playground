-- CreateTable
CREATE TABLE "Player"
(
    "id"         uuid         NOT NULL,
    "email"      VARCHAR      NOT NULL,
    "name"       VARCHAR      NOT NULL,
    "password"   VARCHAR      NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player" ("email");
