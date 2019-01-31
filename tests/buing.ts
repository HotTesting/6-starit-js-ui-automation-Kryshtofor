import { expect } from 'chai';

describe ('Guest shopping', function () {

    it('Buy yellow duck', function() {
        browser.url('/');
        $('#campaign-products [alt="Yellow Duck"]').click();
        $('.form-control [value="Small"]').click();
        $('[name="quantity"]').setValue(2);
        $('.btn-success').click();
        const newImage = $('img[src="http://ip-5236.sunline.net.ua:38015/includes/templates/default.catalog/images/cart_filled.svg"]').isVisible();
        expect(newImage).to.be.true;
        browser.pause(5000);
    })
})