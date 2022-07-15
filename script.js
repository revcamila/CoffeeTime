
const clients = document.querySelectorAll('.client');

clients.forEach((client) => {
    client.addEventListener('click',() =>{
        removeActiveClasses()
        client.classList.add('active')
    })
})

function removeActiveClasses(){
    clients.forEach(client =>{
        client.classList.remove('active')
    })
}