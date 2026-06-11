import { test, expect } from '@playwright/test';

test.describe('Painel CRM - Busca de Hóspede', () => {

  test('deve buscar um hóspede pelo nome com sucesso', async ({ page }) => {

    // Acessa a aplicação
    await page.goto('/');

    // Abre o Painel CRM
    await page.getByRole('link', { name: 'Painel CRM' }).click();

    // Campo de busca
    const searchInput = page.getByPlaceholder('Buscar por nome do hóspede');

    // 4. Preenche busca
    await searchInput.fill('Carlos Almeida');

    // 5. Validação do resultado
    await expect(page.getByText('Carlos Almeida')).toBeVisible();

  });

});