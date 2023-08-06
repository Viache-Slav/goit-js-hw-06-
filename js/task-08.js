const inputEl = document.querySelector('.login-form')

inputEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert("proszę wypełnić wszystkie pola")
    }
    const userDetails = { email: email.value, Password: password.value }

console.log(userDetails)
event.currentTarget.reset()
}
