import { addClass,removeClass } from "./helpers/AddRemoveClass.js"

const MenuEffects = ()=>{

    const d = document
    const $menu = d.querySelector('.menu')

    $menu.addEventListener("mouseover", ()=>{

        addClass($menu,'menuEffect')
        removeClass($menu,'slantedMenu')   
        $menu.style.setProperty('animation','revert')   

    })
    $menu.addEventListener("mouseout", ()=>{
      
        removeClass($menu,'menuEffect')
        $menu.style.setProperty('animation','rotate-menu 1.8s linear')
        setTimeout(()=>{

           addClass($menu,'slantedMenu')

        },1800)
    })

}

export { MenuEffects }