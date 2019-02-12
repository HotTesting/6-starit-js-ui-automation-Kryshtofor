import { expect } from 'chai';
import { signin } from '../pageObjects/forSignIn';

describe('Test sign in form', function () {
    
    it('Lost your password', function() {
        browser.url('/');
        signin.clickSignInBtn();
        signin.clickLostYourPasswordBtn();
        const recoveryPass = browser.getUrl();
        expect(recoveryPass).to.equal('http://ip-5236.sunline.net.ua:38015/reset_password');
    })

      it('New customers click here', function() {
        browser.url('/');
        signin.clickSignInBtn();
        signin.clickNewCustomerBtn();
        const signup = browser.getUrl();
        expect(signup).to.equal('http://ip-5236.sunline.net.ua:38015/create_account');
    })

    it('Sign in', function () {
        signin.fillSignInForm({
            email: 'kryshtofor90@gmail.com',
            password: 'qwerty'
        });
        const userName = $('.account.dropdown a.dropdown-toggle').getText();
        expect(userName).to.equal('Dmitriy');
    })

    



})