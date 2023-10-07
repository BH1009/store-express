const deleteButton = document.querySelector('button.delete')
const editButton = document.querySelector('button.edit')

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

editButton.addEventListener('click', () => {
    console.log("clicked button edit")
})