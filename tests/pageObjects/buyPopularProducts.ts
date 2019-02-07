export class BuyPopularProducts {
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