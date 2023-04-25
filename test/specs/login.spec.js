import KeyPressesPage from '../pageobjects/key_press.page.js'

describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    xit('should fail to login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'wrong');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });


    xit('should logout', async () => {
    await LoginPage.open();

    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
    
    await SecurePage.logout();
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');

    
});

});

