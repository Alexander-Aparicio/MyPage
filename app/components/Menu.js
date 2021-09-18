import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const Menu = ()=>{

    const d = document

    const nav = d.createElement('nav')
    nav.setAttribute('class','menu grid boxShadowStrong slantedMenu')
    nav.setAttribute('id','idMenu')

    const menu = [
        {page:'Inicio', emoji:'🏠'},
        {page:'Portafolio', emoji:'📂'},
        {page:'Conocimientos', emoji:'📒'},
        {page:'Sobre mí', emoji:'🧑'}

    ]

    const menuFragment = d.createDocumentFragment()

    menu.forEach((el)=>{

        const option = d.createElement('p')
        option.setAttribute('class','linkM option')
        let nameNoSpace = `${el.page}`.replace(/\s+/g,'')

        option.setAttribute('id',`${nameNoSpace}`)
        option.textContent = `${el.page} ${el.emoji}`

        menuFragment.appendChild(option)

    })

    const tumbtack = d.createElement('p')
    tumbtack.textContent = '📌'
    tumbtack.setAttribute('class','tumbtack')
// -------------------------------------------
    nav.appendChild(menuFragment)
    nav.appendChild(tumbtack)

    return nav

}

const MenuTop = ()=>{

    const d = document
    const $main = d.getElementById('root') 
    
    $main.appendChild(Menu())

    const $nav = d.querySelector('.menu')
    addClass($nav,'menuTop')
    removeClass($nav,'slantedMenu')
    removeClass($nav,'boxShadowStrong')
    removeClass($nav,'grid')
    removeClass($nav,'none')
  
    setTimeout(()=>{
        const $tumbtack = d.querySelector('.tumbtack') 
        addClass($tumbtack,'none')
    },5)
   
}

export { Menu, MenuTop }