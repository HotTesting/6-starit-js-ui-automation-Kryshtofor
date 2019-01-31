import { expect } from 'chai';


describe('Registration on the site', function () {

    it('Filling registration', function () {
        browser.url('/create_account');

        $('[name=company]').setValue("Umbrella"); 
        $('[name=tax_id]').setValue("777");
        $('[name=firstname]').setValue("Dmitriy");
        $('[name=lastname]').setValue("Kryshtofor");
        $('[name=address1]').setValue('Borisa Gmury str');
        $('[name=address2]').setValue('Parkovaya str');   
        $('[name=postcode]').setValue('02140');
        $('[name=city]').setValue('Kyiv');
        $('[value=US]').click();
        $('[value=HI]').click();
        $('.row [name=email]').setValue('kryshtofor90@gmail.com');
        $('[name=phone]').setValue('+180660846270');
        $('.row [name=password]').setValue('qwerty');
        $('.row [name=confirmed_password]').setValue('qwerty');
        $('[name=newsletter]').click();    
        $('[name=create_account]').click();

        let errMessage = browser.getText('.alert-danger');
        expect(errMessage).to.equal('×\nThe email address already exists in our customer database. Please login or select a different email address.');

    })

})

