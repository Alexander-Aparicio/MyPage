import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const MenuMobile = ()=>{

    const d = document
    const $main = d.getElementById('root')
    const $nav = d.getElementById('idMenu')

    addClass($nav,'menuMobile')

    const $menuMobile = d.querySelector('.menuMobile')
    console.log($menuMobile)
    const containerHamburguer = d.createElement('div')
    containerHamburguer.setAttribute('class','boxHamburguer boxShadowStrong')
    
    const openMobile = d.createElement('img')
    openMobile.setAttribute('src','app/assets/logos-svg/open-hamburger.svg')
    openMobile.setAttribute('class','btnHamburguer openHamburguer')

    const closeMobile = d.createElement('img')
    closeMobile.setAttribute('src','app/assets/logos-svg/close-hamburguer.svg')
    closeMobile.setAttribute('class','btnHamburguer none closeHamburguer')

    containerHamburguer.appendChild(openMobile)
    containerHamburguer.appendChild(closeMobile)
    $main.appendChild(containerHamburguer)

    d.addEventListener('click', (e)=>{

        const $btnOpen = d.querySelector('.openHamburguer')
        const $btnClose = d.querySelector('.closeHamburguer')

        if(e.target === $btnOpen ){

            addClass($btnOpen,'opacity-off-btn')
            addClass($menuMobile,'transtion')

            setTimeout(()=>{

                addClass($btnOpen,'none')
                removeClass($btnOpen,'opacity-off-btn')
                
                $menuMobile.style.setProperty('display','grid')
                removeClass($menuMobile,'transtion')

                removeClass($btnClose,'none')
                addClass($btnClose,'opacity-on-btn')
            },500)

        }

        if(e.target === $btnClose ){

            addClass($btnClose,'opacity-off-btn')
            addClass($menuMobile,'transtion-off')
            setTimeout(()=>{

                addClass($btnClose,'none')
                removeClass($btnClose,'opacity-off-btn')

                $menuMobile.style.setProperty('display','none')
                removeClass($menuMobile,'transtion-off')

                removeClass($btnOpen,'none')
                addClass($btnOpen,'opacity-on-btn')

            },500)

        }

    })
}

export { MenuMobile }