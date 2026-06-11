import { test, expect } from '@playwright/test';

test.describe('Portal de Reservas - Criar Reserva', () => {

  test('deve criar uma reserva com sucesso', async ({ page }) => {

    // Acessa a aplicação
    await page.goto('/');

    // Abre fluxo de reserva
    await page.getByRole('link', { name: 'Portal de Reservas' }).click();

    // Seleciona datas
    await page.locator('input[placeholder="Check-in"]').fill('2026-06-15');
    await page.locator('input[placeholder="Check-out"]').fill('2026-06-17');

    // Seleciona quantidade de hóspedes e tipo de quarto
    await page.getByPlaceholder('Quantidade de hóspedes').fill('1');    
    await page.locator('select').selectOption('deluxe');

    // Preenche os dados do hóspede
    await page.getByPlaceholder('Nome completo').fill('Pedro Henrique');
    await page.getByPlaceholder('E-mail').fill('pedrohenrique@email.com');
    await page.getByPlaceholder('Telefone').fill('51999999991');

    // Confirmar reserva
    await page.getByRole('button', { name: 'Confirmar Reserva' }).click();
    
    // Validação do sucesso
    await expect(page.getByText('Reserva confirmada com sucesso!')).toBeVisible();

  });

});