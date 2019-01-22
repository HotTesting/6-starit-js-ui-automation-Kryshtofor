import { create } from "domain";

describe('WDIO', function () {
    it('Should be alive', function () {
      browser.url('/')
      console.log('--Test passed!')
 
    })

    it('Filling registration', function () {
        browser.url('/create_account')

        const inputCompany = $('[name=company]')
        inputCompany.click()
        inputCompany.addValue("Umbrella")
        browser.pause(1000)
     
        const inputTaxId = $('[name=tax_id]')
        inputTaxId.click()
        inputTaxId.addValue("777")
        browser.pause(1000)
    
        const inputName = $('[name=firstname]')
        inputName.click()
        inputName.addValue("Dmitriy")
        browser.pause(1000)

        const inputLastname = $('[name=lastname]')
        inputLastname.click()
        inputLastname.addValue("Kryshtofor")
        browser.pause(1000)

        const inputFirstAddress = $('[name=address1]')
        inputFirstAddress.click()
        inputFirstAddress.addValue('Borisa Gmury str')
        browser.pause(1000)

        const inputSecondAddress = $('[name=address2]')
        inputSecondAddress.click()
        inputSecondAddress.addValue('Parkovaya str')
        browser.pause(1000)
        
        const inputPostcode = $('[name=postcode]')
        inputPostcode.click()
        inputPostcode.addValue('02140')
        browser.pause(1000)

        const inputCity = $('[name=city]')
        inputCity.click()
        inputCity.addValue('Kyiv')
        browser.pause(1000)

        const selectCoutry = $('[value=US]')
        selectCoutry.click()
        browser.pause(1000)

        const selectState = $('[value=HI]')
        selectState.click()
        browser.pause(1000)

        const inputEmail = $('.row [name=email]')
        inputEmail.click()
        inputEmail.addValue('kryshtofor90@gmail.com')
        browser.pause(1000)

        const inputPhone = $('[name=phone]')
        inputPhone.click()
        inputPhone.addValue('+180660846270')
        browser.pause(1000)

        const inputPassword = $('.row [name=password]')
        inputPassword.click()
        inputPassword.addValue('qwerty')
        browser.pause(1000)

        const inputConfirmPassword = $('.row [name=confirmed_password]')
        inputConfirmPassword.click()
        inputConfirmPassword.addValue('qwerty')
        browser.pause(1000)

        const confirmRules = $('[name=newsletter]')
        confirmRules.click()
        browser.pause(1000)

        const registerButton = $('[name=create_account]')
        registerButton.click()

        browser.pause(1000)
    })

    it('Sign in to account', function () {
        browser.url('/create_account')

        const signinButton = $('')

    })
})

