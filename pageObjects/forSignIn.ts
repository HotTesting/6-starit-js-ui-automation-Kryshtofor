export class SignIn {
    fillSignInForm(fillSignInForm: IFillSignInForm): any {
        browser.url('/login');
        signin.clickSignInBtn();
        signin.typeEmail(fillSignInForm.email);
        signin.typePassword(fillSignInForm.password);
        signin.clickSignInConfirmBtn()
    }
    clickSignInConfirmBtn(): any {
        $('.btn-group [type=submit]').click();
    }
    typePassword(password: string): any {
        $('.form-group [type=password]').setValue(password);
    }
    typeEmail(email: string): any {
        $('.dropdown-menu [type=email]').setValue(email);
    }
    clickNewCustomerBtn(): any {
        $('a[href="http://ip-5236.sunline.net.ua:38015/create_account"]').click();
    }
    clickLostYourPasswordBtn(): any {
        $('a[href="http://ip-5236.sunline.net.ua:38015/reset_password"]').click();
    }
    clickSignInBtn(): any {
        $('.dropdown-toggle .fa-user').click();
    }

}
export const signin = new SignIn();

interface IFillSignInForm {
    email: string
    password: string
}