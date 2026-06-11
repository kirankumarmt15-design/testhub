// signin.page.js
class signin {
    constructor(page) {
        this.emailTF = page.locator('input[name="email"]')
        this.pwdTF = page.locator('input[name="password"]')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }
}

export default signin