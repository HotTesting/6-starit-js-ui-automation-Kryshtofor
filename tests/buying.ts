import { expect } from 'chai';
import { checkout } from '../pageObjects/checkout';
import { popularDucks } from '../pageObjects/buyPopularProducts';
import { confirmation } from '../pageObjects/confirmation';

describe ('Guest shopping', function () {

    it('Buy yellow and red ducks', function() {
        browser.url('/');
        popularDucks.selectTabPopularProducts();
        popularDucks.buyYellowDucks(2);
        popularDucks.buyRedDucks(2);
        popularDucks.clickCartBtn();
        const checkoutUser = browser.getUrl();
        expect(checkoutUser).to.equal('http://ip-5236.sunline.net.ua:38015/checkout');

        checkout.fillCostomerDetails({
            company: "Umbrella",
            taxID: "333",
            firstName: "Dmitriy",
            lastName: "kryshtofor",
            address1: "Parkovaya str",
            address2: "Vokzalnaya str",
            postalCode: "02000",
            city: "Kyiv",
            email: "Kryshtofor90@gmail.com",
            phone: "+380660846270"
        });  

        expect(confirmation.alertForExistingAccount()).to.equal('We found an existing customer account that will be used for this order');
        expect(confirmation.alertForConfirmOrder()).to.equal('By proceeding you hereby confirm and accept the Terms and Conditions of Purchase.');

        confirmation.confirmBtn();
        const orderSuccess = browser.getUrl();
        expect(orderSuccess).to.equal('http://ip-5236.sunline.net.ua:38015/order_success');
    })
})