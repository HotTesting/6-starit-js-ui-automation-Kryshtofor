export class Checkout {
    saveChanges(): any {
        const saveCustomerBtn = '#box-checkout-customer [name="save_customer_details"]'
        $(saveCustomerBtn).click();
    }
    typePhone(phone: string): any {
        $('[name=phone]').setValue(phone);
    }
    typeEmail(email: string): any {
        $('.row [name=email]').setValue(email);
    }
    selectCoutry(): any {
        const coutryUA = '[value=UA]'
        $(coutryUA).click();
    }
    typeCity(city: string): any {
        $('[name=city]').setValue(city);
    }
    typePostCode(postCode: string): any {
        $('[name=postcode]').setValue(postCode);
    }
    typeAddress2(address2: string): any {
        $('[name=address2]').setValue(address2);   
    }
    typeAddress1(address1: string): any {
        $('[name=address1]').setValue(address1);
    }
    typeLastName(lastName: string): any {
        $('[name=lastname]').setValue(lastName);
    }
    typeFirstName(name: string): any {
        $('[name=firstname]').setValue(name);
    }
    typeTaxId(taxId: string): any {
        $('[name=tax_id]').setValue(taxId);
    }
    typeCompany(company: string): any {
        $('[name=company]').setValue(company);
    }

}