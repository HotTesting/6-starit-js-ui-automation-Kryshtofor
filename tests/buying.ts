import { expect } from 'chai';

describe ('Guest shopping', function () {

    it('Buy yellow and red ducks', function() {
        browser.url('/');
        $('a[href="#popular-products"]').click();
        $('#popular-products [alt="Yellow Duck"]').click();
        $('.form-control [value="Small"]').click();
        $('[name="quantity"]').setValue(2);
        $('.btn-success').click();
        $('.featherlight .featherlight-close').click();
        $('#popular-products [alt="Red Duck"]').click();
        $('[name="quantity"]').setValue(2);
        $('.btn-success').click();
        $('.featherlight .featherlight-close').click();

        $('#cart img[src="http://ip-5236.sunline.net.ua:38015/includes/templates/default.catalog/images/cart_filled.svg"]').click();
        const checkoutUser = browser.getUrl();
        expect(checkoutUser).to.equal('http://ip-5236.sunline.net.ua:38015/checkout');

        $('[name=company]').setValue("Umbrella"); 
        $('[name=tax_id]').setValue("777");
        $('[name=firstname]').setValue("Dmitriy");
        $('[name=lastname]').setValue("Kryshtofor");
        $('[name=address1]').setValue('Borisa Gmury str');
        $('[name=address2]').setValue('Parkovaya str');   
        $('[name=postcode]').setValue('02140');
        $('[name=city]').setValue('Kyiv');
        $('[value=UA]').click();
        $('.row [name=email]').setValue('kryshtofor90@gmail.com');
        $('[name=phone]').setValue('+380660846270');
        $('#box-checkout-customer [name="save_customer_details"]').click();

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