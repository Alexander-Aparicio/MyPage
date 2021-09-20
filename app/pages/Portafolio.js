import { addClass } from "../components/helpers/AddRemoveClass.js"
import { button, div, enlace, figc, figure, image } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"

const Portafolio = ()=>{

    const d = document

// ---------------------------------------------------------------------

    const portafolio = d.createElement('article')
    portafolio.setAttribute('class','portfolioPage')
    portafolio.setAttribute('id','portfolioPage')

    portafolio.appendChild(TitleOfPages('Proyectos Realizados'))

// ------------------------------------APLIC----------------------------------------

    const btnOpenAplic = button('btnSlider flex boxShadowMid','SPA con Javascript y Firebase ⬇📸','openProjectAplic')
    const btnCloseAplic = button('btnSlider flex none boxShadowMid','SPA con Javascript y Firebase ⬆','closeProjectAplic')
    const sliderAplic = div('slider aplic none')

    const techAplic = [

        {
            name: 'firebase_logo.svg',
            alt: 'logo-firebase',
            id:''
        },
        {
            name: 'file_type_html.svg',
            alt: 'logo-html',
            id:''
        },
        {
            name: 'css.svg',
            alt: 'logo-css',
            id:''
        },
        {
            name: 'javascript_logo.svg',
            alt: 'logo-javascript',
            id:''
        }
    
    ]

    const fragmenAplic = d.createDocumentFragment()

    techAplic.forEach((el)=>{

        const img = image(`${el.alt}`,`app/assets/logos-svg/${el.name}`,'', `${el.id}`)
        fragmenAplic.appendChild(img)

    })

// ------------------------------------------------------------

    const boxTechAplic = d.createElement('div')
    boxTechAplic.setAttribute('class','technologies flex')
    
    boxTechAplic.appendChild(fragmenAplic)

    portafolio.appendChild(btnOpenAplic)
    portafolio.appendChild(btnCloseAplic)
    portafolio.appendChild(boxTechAplic)
    portafolio.appendChild(sliderAplic)
    
// ---------------------------------------------------------

// -----------------------------------BLOG-------------------------------------------

    const btnOpenBlog = button('btnSlider flex boxShadowMid','Página en HTML-CSS-Javascript ⬇📸','openProjectBlog')
    const btnCloseBlog = button('btnSlider flex none boxShadowMid','Página en HTML-CSS-Javascript ⬆','closeProjectBlog')
    const sliderBlog = div('slider blog none')

    const techBlog = [

        {
            name: 'firebase_logo.svg',
            alt: 'logo-firebase',
            id:''
        },
        {
            name: 'file_type_html.svg',
            alt: 'logo-html',
            id:''
        },
        {
            name: 'css.svg',
            alt: 'logo-css',
            id:''
        },
        {
            name: 'javascript_logo.svg',
            alt: 'logo-javascript',
            id:''
        }
    
    ]
    const fragmenBlog = d.createDocumentFragment()

    techBlog.forEach((el)=>{

        const img = image(`${el.alt}`,`app/assets/logos-svg/${el.name}`,'', `${el.id}`)
        fragmenBlog.appendChild(img)

    })

// ---------------------------------------------------------

    const boxTechBlog = d.createElement('div')
    boxTechBlog.setAttribute('class','technologies flex')
    
    boxTechBlog.appendChild(fragmenBlog)

// ----------------------------------------------------------

    portafolio.appendChild(btnOpenBlog)
    portafolio.appendChild(btnCloseBlog)
    portafolio.appendChild(boxTechBlog)
    portafolio.appendChild(sliderBlog)

// -----------------------------------------------------------

// -----------------------------------------------DIOSES---------------------------------------------------

    const btnOpenDioses = button('btnSlider flex boxShadowMid','Wordpress - Mod. Afiliados ⬇📸','openProjectDioses')
    const btnCloseDioses = button('btnSlider flex none boxShadowMid','Wordpress - Mod. Afiliados ⬆','closeProjectDioses')
    const sliderDioses = div('slider dioses none')

    const techDioses = [

        {
            name: 'wordpress_icon.png',
            alt: 'logo-wordpress',
            id:''
        },
        {
            name: 'generatepress-logo.svg',
            alt: 'logo-generatepress',
            id:'generatepress'
        }

    ]

    const fragmenDioses = d.createDocumentFragment()

    techDioses.forEach((el)=>{

        const img = image(`${el.alt}`,`app/assets/logos-svg/${el.name}`,'', `${el.id}`)
        fragmenDioses.appendChild(img)

    })

// ------------------------------------------------------------------------------

    const boxTechDioses = d.createElement('div')
    boxTechDioses.setAttribute('class','technologies flex')

    boxTechDioses.appendChild(fragmenDioses)


    portafolio.appendChild(btnOpenDioses)
    portafolio.appendChild(btnCloseDioses)
    portafolio.appendChild(boxTechDioses)
    portafolio.appendChild(sliderDioses)

// -------------------------------------------------------------------------------

// -------------------------------------------------SUMINI---------------------------------------------------

    const btnOpenSumini = button('btnSlider flex boxShadowMid','Wordpress - Mod. Catálogo ⬇📸','openProjectSumini')
    const btnCloseSumini = button('btnSlider flex none boxShadowMid','Wordpress - Mod. Catálogo ⬆','closeProjectSumini')
    const sliderSumini = div('slider sumini none')

    const techSumini = [
        
        {
            name: 'wordpress_icon.png',
            alt: 'logo-wordpress',
            id:''
        },
        {
            name: 'generatepress-logo.svg',
            alt: 'logo-generatepress',
            id:'generatepress'
        }

    ]

    const fragmenSumini = d.createDocumentFragment()

    techSumini.forEach((el)=>{

        const img = image(`${el.alt}`,`app/assets/logos-svg/${el.name}`,'', `${el.id}`)
        fragmenSumini.appendChild(img)

    })

// --------------------------------------------------------------

    const boxTechSumini = d.createElement('div')
    boxTechSumini.setAttribute('class','technologies flex')

    boxTechSumini.appendChild(fragmenSumini)

// ---------------------------------------------------------------

    portafolio.appendChild(btnOpenSumini)
    portafolio.appendChild(btnCloseSumini)
    portafolio.appendChild(boxTechSumini)
    portafolio.appendChild(sliderSumini)

// ----------------------------------------------------------------

// ---------------------------------------------IMGS COLUM2-------------------------------------------------------

    const containerImg  = div('imgs-projects')
    // const subtitle  = SubTitlesOfPages('Pronto con React')
    const figmaImg  = image('logo-de-figma','app/assets/logos-svg/figma_logo.svg')
    const visualImg  = image('logo-de-visual-studio-code','app/assets/logos-svg/visual_studio_code.svg')
    const avatarImg  = image('avatar-alex','app/assets/avatar-alex2.png','avatarProjects')

    const boxGithub = enlace('', 'https://github.com/Alexander-Aparicio?tab=repositories', 'enlaceGithub boxShadowStrong','','_blank','nofollow')

    const cardGithub = figure('cardGithub')
    const imgGithub = image('logo-github','app/assets/logos-svg/github_original.svg','imgRepositorio')
    const figcGithub = figc('Mis repositorios - React','figcGithub')

    cardGithub.appendChild(imgGithub)
    cardGithub.appendChild(figcGithub)

    boxGithub.appendChild(cardGithub)

    // containerImg.appendChild(subtitle)
    containerImg.appendChild(figmaImg)
    containerImg.appendChild(visualImg)
    containerImg.appendChild(avatarImg)
    containerImg.appendChild(boxGithub)

    portafolio.appendChild(containerImg)

// ------------------------------------------------------------------------------

    return portafolio

}

export { Portafolio }