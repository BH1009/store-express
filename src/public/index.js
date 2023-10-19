const deleteButton = document.querySelector('button.delete')

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


