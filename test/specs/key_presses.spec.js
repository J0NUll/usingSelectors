import KeyPressesPage from '../pageobjects/key_press.page.js'

describe('My Key Press application', () => {
    it('should display what is entered into the input', async () => {
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('C');

        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: C');
    });
});