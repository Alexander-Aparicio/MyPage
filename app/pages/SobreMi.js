import { addClass } from "../components/helpers/AddRemoveClass.js"
import { button, div, image } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"
const SobreMi = ()=>{

    const d = document
// ---------------------------------------------------------------------
    
// ---------------------------------------------------------------------
    const SobreMi = d.createElement('article')
    SobreMi.setAttribute('class','sobreMiPage')
    SobreMi.setAttribute('id','sobreMiPage')

// ----------------------------------------------------------------------
    SobreMi.appendChild(TitleOfPages('¡Hola, mucho gusto!'))
// ----------------------------------------------------------------------------

    const avatar = image('avatar de alexander','app/assets/avatar-alex3.png','avatarSobreMi')

    SobreMi.appendChild(avatar)

// ----------------------------------------------------------------
    const box = d.createElement('section')
    box.setAttribute('class','boxList')


    const listBox = d.createElement('ul')
    listBox.setAttribute('class','p list')

    const list = [
        'Soy de caracter tranquilo 🙂.',
        'Me interesa la programación y SEO 🤩.',
        'Estoy formandome como FrontEnd pero luego pienso expandirme al BackEnd 🗃️.',
        'Los lenguajes en los que quiero ser un crack son Javascript, Typescript y Python 🧰.',
        'Me gusta ver You tube o escuchar Spotify sobre temas de SEO 🚀 y desarrollo web.💻',
        'Me encanta jugar y enseñar sobre Tenis de mesa 🏓.',
        'Mi mayor fortaleza es la perseverancia 💪.',
        'Suelo dar la impresión de ser muy serio pero soy amigable 😄.',
        'Poseo un Bachiller en economía 👨‍🎓.'
    ]

    list.forEach((el)=>{

        const li = d.createElement('li')
        li.textContent = el

        listBox.appendChild(li)

    })

    box.appendChild(SubTitlesOfPages('Te cuento esto sobre mí'))
    box.appendChild(listBox)
    SobreMi.appendChild(box)
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

    const box2 = d.createElement('div')
    box2.setAttribute('class','boxList2')

    box2.appendChild(SubTitlesOfPages('Mis fuentes de aprendizaje 🧐','title2'))

    const webDevelopment = [

        {teacher:'Jon Mircha', web:'https://jonmircha.com/', canal:'Canal de You Tube & blog.', specialty:'Javascript & React'},
        {teacher:'Ignacio Gutiérrez', web:'https://bluuweb.github.io/',canal:'Canal de You Tube & blog.', specialty:'Git & Github'},
        {teacher:'Css-Tricks', web:'https://css-tricks.com/', canal:'Documentación de CSS.',specialty:'Css'},
        {teacher:'MDN Web Docs', web:'https://developer.mozilla.org/',canal:'Documentación de consulta.', specialty:'Documentación de consulta'},
        {teacher:'W3 Schools', web:'https://www.w3schools.com/',canal:'Documentación práctica de consulta', specialty:'Documentación de consulta'},
        {teacher:'Firebase', web:'https://firebase.google.com/?hl=es',canal:'Documentación de su SDK.', specialty:'Documentación de Firebase'}

    ]

    const ul = d.createElement('ul')
    ul.setAttribute('class','p list')

    webDevelopment.forEach((el)=>{

        const li = d.createElement('li')
        
        const bibliography = `
        <p><strong>${el.teacher}:</strong> ${el.canal}</p>
        `
        li.innerHTML= bibliography

        ul.appendChild(li)

    })

    box2.appendChild(SubTitlesOfPages('En Desarrollo Web:'))

    box2.appendChild(ul)

// --------------------------------------------------------------------------


    const seo = [

        {teacher:'Antonio López', web:'https://www.elblogdelseo.com/', program:'Blog.'},
        {teacher:'Romuald Fons', web:'https://romualdfons.com/', program:'You Tube.'},
        {teacher:'Emilio García', web:'https://campamentoweb.com/', program:'Spotify.'},
        {teacher:'Andres Kloster', web:'https://andreskloster.com/', program:'Spotify.'}

    ]

    const ulSeo = d.createElement('ul')
    ulSeo.setAttribute('class','p list')

    seo.forEach((el)=>{

        const li = d.createElement('li')
        
        const bibliography = `
        <p><strong>${el.teacher}:</strong> ${el.program}</p>
        `
        li.innerHTML= bibliography

        ulSeo.appendChild(li)

    })

    box2.appendChild(SubTitlesOfPages('En SEO:'))

    box2.appendChild(ulSeo)

// --------------------------------------------------------------------------
    const estudios = [

        {materia:'Curso de extensión de Marketing Digital.', institucion:'IPM', web:'https://ipm.com.pe/'},
        {materia:'Curso Fundamentos de Marketing Digital.', institucion:'Google Actívate', web:'https://learndigital.withgoogle.com/activate'},
        {materia:'Carrera de Economía.', institucion:'UNALM', web:'http://www.lamolina.edu.pe/'},

    ]

    const ulEstudios = d.createElement('ul')
    ulEstudios.setAttribute('class','p list')

    estudios.forEach((el)=>{

        const li = d.createElement('li')
        
        const bibliography = `
        <p><strong>${el.institucion}:</strong> ${el.materia}</p>
        `
        li.innerHTML= bibliography

        ulEstudios.appendChild(li)

    })

    box2.appendChild(SubTitlesOfPages('En Marketing y Economía'))

    box2.appendChild(ulEstudios)

// --------------------------------------------------------------------------

    SobreMi.appendChild(box2)

// -----------------------------------------------------------------------


    return SobreMi

}

export { SobreMi }
