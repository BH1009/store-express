const editform = document.getElementById('edit-form')

editform.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log("clicked ")
    const id = editform.id.value
    const name = editform.name.value
    const price = editform.price.value
    const currency = editform.currency.value
    // console.log(JSON.stringify({id, name, price, currency}))
    try {
        await fetch(`/product/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,price,currency})
        })
    } catch (err) {
        console.log(err)
    }
})