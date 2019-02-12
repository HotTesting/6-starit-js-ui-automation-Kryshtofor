export class BuyPopularProducts {
    buyRedDucks(quantity: number): any {
        popularDucks.selectRedDuck();
        popularDucks.setQuantity(quantity);
        popularDucks.addToCart();
        popularDucks.closeProductWindow();
    }
    buyYellowDucks(quantity: number): any {
        popularDucks.selectYellowDuck();
        popularDucks.selectSmallSize();
        popularDucks.setQuantity(quantity);
        popularDucks.addToCart();
        popularDucks.closeProductWindow();
    }
    clickCartBtn(): any {
        $('#cart img[src*="/includes/templates/default.catalog/images/cart_filled.svg"]').click();
    }
    selectRedDuck(): any {
        $('#popular-products [alt="Red Duck"]').click();
    }
    closeProductWindow(): any {
        $('.featherlight .featherlight-close').click();
    }
    addToCart(): any {
        $('.btn-success').click();
    }
    setQuantity(numb: number): any {
        $('[name="quantity"]').setValue(numb);
    }
    selectSmallSize(): any {
        $('.form-control [value="Small"]').click();
    }
    selectYellowDuck(): any {
        $('#popular-products [alt="Yellow Duck"]').click();
    }
    selectTabPopularProducts(): any {
        $('a[href="#popular-products"]').click();
    }
    
}

export const popularDucks = new BuyPopularProducts();
