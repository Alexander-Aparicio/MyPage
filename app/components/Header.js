const Header = ()=>{

    const d = document
    const $header = d.getElementById('header')

    const divBranding = d.createElement('div')
    divBranding.setAttribute('class','boxShadowMild divBranding flex')

    const nameAuthor = d.createElement('p')
    nameAuthor.setAttribute('class','branding')
    nameAuthor.textContent = 'Frontend'

    const raqueta = d.createElement('img')
    raqueta.setAttribute('src','app/assets/logos-svg/raqueta.svg')
    raqueta.setAttribute('class','raqueta')
 //--------------------------------------------
 divBranding.appendChild(raqueta)
    divBranding.appendChild(nameAuthor)
    
 //-------------------------------------------- 

    $header.appendChild(divBranding)

}

export { Header }