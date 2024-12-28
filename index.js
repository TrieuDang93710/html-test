
const ul_menu = document.getElementById('ul_menu')
const li_menu = document.getElementsByClassName('li_menu')
console.log('li_menu: ',li_menu)
for (let index = 0; index < li_menu.length; index++) {
    const element = li_menu[index];
    element.addEventListener('click', ()=> {
        for (let i = 0; i < li_menu.length; i++) {
            const el = li_menu[i];
            li_menu[i].classList.remove('active')
        }
        element.classList.add('active')
    })
}

const toggle = document.getElementById('toggle')
const modal = document.getElementById('modal')
const close_modal = document.getElementById('close_modal')
toggle.addEventListener('click', () => {
    modal.style.display = 'block'
})
close_modal.addEventListener('click', () => {
    modal.style.display = 'none'
})