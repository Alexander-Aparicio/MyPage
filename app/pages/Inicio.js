import { Menu } from "../components/Menu.js"

const Inicio = ()=>{

    const d = document

    const home = d.createElement('article')
    home.setAttribute('class','home')
    home.setAttribute('id','home')

    const banner = d.createElement('section')
    banner.setAttribute('class','banner flex boxShadowMild')

    const containerLogo = d.createElement('div')
    containerLogo.setAttribute('class','logo')

    const sheet = d.createElement('div')
    sheet.setAttribute('class','sheet')

    const img = d.createElement('img')
    img.setAttribute('src','app/assets/alexander-meza-frontend.png')
    img.setAttribute('alt','Alexander-Aparicio')
    img.setAttribute('class','imgW boxShadowMild')

// --------------------------------------------
    sheet.appendChild(img)
    containerLogo.appendChild(sheet)
// -------------------------------------------

    const containerPerfil = d.createElement('div')
    containerPerfil.setAttribute('class','headerPerfil flex')

    const name = d.createElement('h2')
    name.setAttribute('class','name')
    name.textContent = 'Alexander Aparicio M.'

    const ad = d.createElement('p')
    ad.setAttribute('class','ad')
    ad.textContent = 'Desarrollador FrontEnd & SEO'

    const containerTech = d.createElement('div')
    containerTech.setAttribute('class','tech flex')

    const imgs = [
        {name:'wordpress_icon.png', id:''},
        {name:'javascript_logo.svg', id:''},
        {name:'react_original_logo.svg', id:'react'},
        {name:'firebase_logo.svg', id:''}
    ]

    const imgFragment = d.createDocumentFragment() 

    imgs.forEach((tech)=>{

        const img = d.createElement('img')
        img.setAttribute('src',`app/assets/logos-svg/${tech.name}`)

        if(tech.id != ''){img.setAttribute('id',`${tech.id}`)}

        imgFragment.appendChild(img)

    })
// ---------------------------------------------
    containerTech.appendChild(imgFragment)
    containerPerfil.appendChild(name)
    containerPerfil.appendChild(ad)

    containerPerfil.appendChild(containerTech)

// --------------------------------------------
    const imgWelcome = document.createElement('img')
    imgWelcome.setAttribute('src','app/assets/logos-svg/youtube_desk_workspace.svg')
    imgWelcome.setAttribute('class','imgWelcome')

// -------------------------------------------

    banner.appendChild(containerLogo)
    banner.appendChild(containerPerfil)
    home.appendChild(banner)
    home.appendChild(Menu())
    home.appendChild(imgWelcome)

    return home
    
}

export {Inicio}