import { test, expect } from '@playwright/test';

test.describe('Painel CRM - Alterar status do hóspede', () => {

  test('deve alterar status de Pendente para Confirmado', async ({ page }) => {

    // Acessa CRM
    await page.goto('/');
    await page.getByRole('link', { name: 'Painel CRM' }).click();

    // Busca hóspede
    const searchInput = page.getByPlaceholder('Buscar por nome do hóspede');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('Carlos Almeida');

    // Localiza linha do hóspede
    const guestRow = page.getByRole('row').filter({
      hasText: 'Carlos Almeida'
    });

    await expect(guestRow).toBeVisible();

    // Altera status
    const statusSelect = guestRow.locator('select');

    await statusSelect.selectOption('Confirmado');

    // Validação funcional
    await expect(statusSelect).toHaveValue('Confirmado');

  });

});