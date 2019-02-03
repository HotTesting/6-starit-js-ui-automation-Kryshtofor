import { expect } from 'chai';

describe('Test sign in form', function () {
    
    it('Lost your password', function() {
        browser.url('/');
        $('.dropdown-toggle .fa-user').click();
        $('a[href="http://ip-5236.sunline.net.ua:38015/reset_password"]').click();
        const recoveryPass = browser.getUrl();
        expect(recoveryPass).to.equal('http://ip-5236.sunline.net.ua:38015/reset_password');
    })

      it('New customers click here', function() {
        browser.url('/');
        $('.dropdown-toggle .fa-user').click();
        $('a[href="http://ip-5236.sunline.net.ua:38015/create_account"]').click();
        const signup = browser.getUrl();
        expect(signup).to.equal('http://ip-5236.sunline.net.ua:38015/create_account');
    })

    it('Sign in', function () {
        browser.url('/login');
        $('.account.dropdown a.dropdown-toggle').click();
        $('.dropdown-menu [type=email]').setValue('kryshtofor90@gmail.com');
        $('.form-group [type=password]').setValue('qwerty');
        $('.btn-group [type=submit]').click();
        browser.pause(2000)
        const userName = $('.account.dropdown a.dropdown-toggle').getText();
        expect(userName).to.equal('Dmitriy');
    })

    



})