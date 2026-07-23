import { test, expect } from '@playwright/test' 

///AAA - Arrange, Act, Assert

test('test', async ({ page }) => {
  //Arrange - Preparação
  await page.goto('http://localhost:5173/') 
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint') 
  await page.getByRole('link', { name: 'Consultar Pedido' }).click() 
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido') 
  
  //Act - Ação
  await page.getByTestId('search-order-id').fill('VLO-FFITWU') 
  //await page.getByTestId('search-order-button').click() 
  await page.getByRole('button', { name: 'Buscar Pedido' }).click() 

  //Assert - Verificação  

  //DESAFIO - Remover os dois datatestes order-result-id e order-result-status do arquivo OrderLookup.tsx
  //e automatizar o teste para verificar se o pedido foi aprovado
  
 
  await expect(page.getByText('VLO-FFITWU')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-FFITWU')).toContainText('VLO-FFITWU');
  //await expect(page.getByText('VLO-FFITWU')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-FFITWU')).toContainText('APROVADO');

   
   
 // await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 30000}) 
  //await expect(page.getByTestId('order-result-id')).toContainText('VLO-FFITWU') 

  
  //await expect(page.getByTestId('order-result-status')).toBeVisible() 
  //await expect(page.getByTestId('order-result-status')).toContainText('APROVADO') 




}) 

 