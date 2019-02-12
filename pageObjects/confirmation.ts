export class Confirmation {
    alertForExistingAccount(): any {
        return $('.alert-info').getText();
    }

    alertForConfirmOrder(): any {
        return $('.terms-of-purchase').getText();
    }
    
    confirmBtn(): any {
        $('.col-md-3 .btn').click();
    }
}

export const confirmation = new Confirmation();
