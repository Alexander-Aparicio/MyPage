import { addClass } from "./helpers/AddRemoveClass.js"

const MenuMobile = ()=>{

    const d = document

    const $nav = d.getElementById('idMenu')
    
    addClass($nav,'none')

}

export { MenuMobile }