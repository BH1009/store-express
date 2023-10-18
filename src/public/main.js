const deleteButton = document.querySelector('button.delete')
const editButton = document.querySelector('button.edit')
const form = document.querySelector('form')
const inputName = document.getElementById('name')

deleteButton.addEventListener("click", async (e) => {
    const id = deleteButton.dataset.id
    try {
        await fetch(`/product/${id}`, {
            method: 'delete'
        })
        location.reload()
    } catch (err) {
        console.log(err)
    }
})

