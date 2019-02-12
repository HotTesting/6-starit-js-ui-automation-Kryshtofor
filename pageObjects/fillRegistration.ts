export class FillRegistration {
    fillRegistration(fillRegistration: IFillRegistration): any {
        this.typeCompany(fillRegistration.company);
        this.typeTaxID(fillRegistration.taxID);
        this.typeFirstName(fillRegistration.firstName);
        this.typeLastName(fillRegistration.lastName);
        this.typeAddress1(fillRegistration.address1);
        this.typeAddress2(fillRegistration.address2);
        this.typePostCode(fillRegistration.postCode);
        this.typeCity(fillRegistration.city);
        this.selectCountryUS();
        this.selectStateHI();
        this.typeEmail(fillRegistration.email);
        this.typePhone(fillRegistration.phone);
        this.typePassword(fillRegistration.password);
        this.typeConfirmPassword(fillRegistration.confirmPassword);
        this.selectNewsletter();
        this.clickCreateAccountBtn();
    }
    clickCreateAccountBtn(): any {
        $('[name=create_account]').click();
    }
    selectNewsletter(): any {
        $('[name=newsletter]').click();    
    }
    typeConfirmPassword(confirmPassword: string): any {
        $('.row [name=confirmed_password]').setValue(confirmPassword);
    }
    typePassword(password: string): any {
        $('.row [name=password]').setValue(password);
    }
    typePhone(phone: string): any {
        $('[name=phone]').setValue(phone);
    }
    typeEmail(email: string): any {
        $('.row [name=email]').setValue(email);
    }
    selectStateHI(): any {
        $('[value=HI]').click();
    }
    selectCountryUS(): any {
        $('[value=US]').click();
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
    typeFirstName(firstName: string): any {
        $('[name=firstname]').setValue(firstName);
    }
    typeTaxID(taxID: string): any {
        $('[name=tax_id]').setValue(taxID);
    }
    typeCompany(company: string): any {
        $('[name=company]').setValue(company); 
    }

}
interface IFillRegistration {
    firstName: string
    lastName: string
    address1: string
    address2: string
    postCode: string
    city: string
    email: string
    phone: string
    password: string
    confirmPassword: string
    company?: string
    taxID?: string
    country?: string
    state?: string
}

export const registration = new FillRegistration();
