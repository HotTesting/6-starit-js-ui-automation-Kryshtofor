import { expect } from 'chai';
import { Checkout } from './pageObjects/checkout';
import { BuyPopularProducts } from './pageObjects/buyPopularProducts';

describe ('Guest shopping', function () {

    it('Buy yellow and red ducks', function() {
        browser.url('/');
        const popularDucks = new BuyPopularProducts();
        popularDucks.selectTabPopularProducts();
        popularDucks.selectYellowDuck();
        popularDucks.selectSmallSize();
        popularDucks.setQuantity(2);
        popularDucks.addToCart();
        popularDucks.closeProductWindow();
        popularDucks.selectRedDuck();
        popularDucks.setQuantity(2);
        popularDucks.addToCart();
        popularDucks.closeProductWindow();

        const cart = $('#cart img[src="http://ip-5236.sunline.net.ua:38015/includes/templates/default.catalog/images/cart_filled.svg"]').click();
        const checkoutUser = browser.getUrl();
        expect(checkoutUser).to.equal('http://ip-5236.sunline.net.ua:38015/checkout');

        const checkout = new Checkout()
        checkout.typeCompany("Umbrella");
        checkout.typeTaxId("777");
        checkout.typeFirstName("Dmitriy");
        checkout.typeLastName("Kryshtofor");
        checkout.typeAddress1("Borisa Gmuri str");
        checkout.typeAddress2("Parkovaya str");
        checkout.typePostCode("02140");
        checkout.typeCity("Kyiv");
        checkout.selectCoutry();
        checkout.typeEmail("kryshtofor90@gmail.com");
        checkout.typePhone("+380660846270");
        checkout.saveChanges();

        const alertForExsistingAccount = $('.alert-info').getText();
        expect(alertForExsistingAccount).to.equal('We found an existing customer account that will be used for this order');
        const alertForConfirmOrder = $('.terms-of-purchase').getText();
        expect(alertForConfirmOrder).to.equal('By proceeding you hereby confirm and accept the Terms and Conditions of Purchase.');

        $('.col-md-3 .btn').click();
        const orderSuccess = browser.getUrl();
        expect(orderSuccess).to.equal('http://ip-5236.sunline.net.ua:38015/order_success');
        browser.pause(2000);
    })
})