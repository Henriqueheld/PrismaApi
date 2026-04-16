-- CreateTable
CREATE TABLE "Alunos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "genero" TEXT,
    "gmail" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_id_key" ON "Alunos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_cpf_key" ON "Alunos"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_gmail_key" ON "Alunos"("gmail");
