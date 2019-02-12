import { expect } from 'chai';
import { registration } from '../pageObjects/fillRegistration';


describe('Registration on the site', function () {

    it('Filling registration', function () {
        browser.url('/create_account');
        registration.fillRegistration({
            firstName: "Dmitriy",
            lastName: "Kryshtofor",
            address1: "Parkovaya str",
            address2: "Basseinaya str",
            postCode: "02000",
            city: "kyiv",
            email: "kryshtofor90@gmail.com",
            phone: "+180660846270",
            company: "Umbrella",
            taxID: "777",
            password: "qwerty",
            confirmPassword: "qwerty"
        })

        let errMessage = browser.getText('.alert-danger');
        expect(errMessage).to.equal('×\nThe email address already exists in our customer database. Please login or select a different email address.');

    })

})

