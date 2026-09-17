import { test, expect } from "@playwright/test";

test("login inválido mostra erro", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("E-mail").fill("ana@inss.gov.mz");
  await page.getByLabel("Senha").fill("errada");
  await page.getByRole("button", { name: "Entrar" }).click();
  await expect(page.getByRole("alert"))
    .toContainText(/inválidos/i);
});

test("login válido abre a lista", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("E-mail").fill("ana@inss.gov.mz");
  await page.getByLabel("Senha").fill("1234");
  await page.getByRole("button", { name: "Entrar" }).click();
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { name: "Portal INSS" }))
    .toBeVisible();
});