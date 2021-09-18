import { TitleOfPages } from "../components/helpers/Titles.js"

const Conocimientos = ()=>{

    const d = document

    // ---------------------------------------------------------------------
    const conocimientos = d.createElement('article')
    conocimientos.setAttribute('class','conocimientosPage')
    conocimientos.setAttribute('id','conocimientosPage')

    conocimientos.appendChild(TitleOfPages('Mis conocimientos'))
    
// ----------------------------------------------------------------------------

    const temas = [

        {tema: 'Javascript', nivel:'75%', faltante:'25%'},
        {tema: 'Css', nivel:'70%', faltante:'30%'},
        {tema: 'Styled Components', nivel:'70%', faltante:'30%'},
        {tema: 'Firebase', nivel:'40%', faltante:'60%'},
        {tema: 'Html', nivel:'85%', faltante:'15%'},
        {tema: 'React', nivel:'55%', faltante:'45%'},
        {tema: 'SEO', nivel:'60%', faltante:'40%'},
        {tema: 'Figma', nivel:'60%', faltante:'40%'},
        {tema: 'WordPress', nivel:'80%', faltante:'20%'},
        {tema: 'Git & Github', nivel:'45%', faltante:'55%'},
        {tema: 'Marketing Digital', nivel:'65%', faltante:'35%'}

    ]

    const fragmentBar = d.createDocumentFragment()

    temas.forEach(el => {
        
        const barBox  = d.createElement('div')
        barBox.setAttribute('class','barBox')

        const bar = d.createElement('div')
        bar.setAttribute('class','bar')
        bar.setAttribute('data-nivel', `${el.nivel}`)
        bar.setAttribute('id',`${el.tema}`)
        // bar.style.setProperty('width',`${el.nivel}`)

        barBox.appendChild(bar)

        fragmentBar.appendChild(barBox)

    });

    conocimientos.appendChild(fragmentBar)





// ----------------------------------------------------------------------------

    return conocimientos
}

export { Conocimientos }