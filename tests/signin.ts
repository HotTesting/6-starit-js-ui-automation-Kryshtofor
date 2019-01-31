import { expect } from 'chai';

describe('Test sign in form', function () {
    
    it('Lost your password', function() {
        browser.url('/');
        $('.dropdown-toggle .fa-user').click();
        try {
            $('a[href="http://ip-5236.sunline.net.ua:38015/reset_password"]').click();
        } catch (err) {
            '"Lost your password" button does not work or work incorrect'
        }
    })

      it('New customers click here', function() {
        browser.url('/');
        $('.dropdown-toggle .fa-user').click();
        try {
        $('a[href="http://ip-5236.sunline.net.ua:38015/create_account"]').click();
        } catch(err) {
            '"New customers click here" button does not work or work incorrect'
        }
    })

    it('Sign in', function () {
        browser.url('/login');
        $('.dropdown-toggle .fa-user').click();
        $('.dropdown-menu [type=email]').setValue('kryshtofor90@gmail.com');
        $('.form-group [type=password]').setValue('qwerty');
        $('.btn-group [type=submit]').click();
        const userName = $('.dropdown-toggle .fa-user').getText();
        expect(userName).to.equal('Dmitriy');          //error: return empty string. Cannot fix this problem
    })

    



})