
const ul_menu = document.getElementById('ul_menu')
const li_menu = document.getElementsByClassName('li_menu')
const feature_item = document.getElementsByClassName('feature_item')

for (let inde = 0; inde < feature_item.length; inde++) {
    const f = feature_item[inde];
    for (let index = 0; index < li_menu.length; index++) {
        const element = li_menu[index];
        element.addEventListener('click', ()=> {
            for (let i1 = 0; i1 < feature_item.length; i1++) {
                const el1 = feature_item[i1];
                for (let i = 0; i < li_menu.length; i++) {
                    const el = li_menu[i];
                    li_menu[i].classList.remove('active')
                    feature_item[i1].classList.remove('show')
                }
            }
            element.classList.add('active')
            f.classList.add('show')
        })
    }
}
// for (let index = 0; index < li_menu.length; index++) {
//     const element = li_menu[index];
//     element.addEventListener('click', ()=> {
//         for (let i = 0; i < li_menu.length; i++) {
//             const el = li_menu[i];
//             li_menu[i].classList.remove('active')
//         }
//         element.classList.add('active')
//     })
// }

// for (let index = 0; index < feature_item.length; index++) {
//     const element = feature_item[index];
//     element.addEventListener('click', () => {
//         for (let i = 0; i < feature_item.length; i++) {
//             const el = feature_item[i];
//             feature_item[i].classList.remove('show')
//         }
//         element.classList.add('show')
//     })
// }

const toggle = document.getElementById('toggle')
const modal = document.getElementById('modal')
const close_modal = document.getElementById('close_modal')
toggle.addEventListener('click', () => {
    modal.style.display = 'block'
})
close_modal.addEventListener('click', () => {
    modal.style.display = 'none'
})