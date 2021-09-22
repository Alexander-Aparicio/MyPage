import { TitleOfPages } from "../components/helpers/Titles.js"

const Conocimientos = async()=>{

    const d = document

    // ---------------------------------------------------------------------
    const conocimientos = d.createElement('article')
    conocimientos.setAttribute('class','conocimientosPage')
    conocimientos.setAttribute('id','conocimientosPage')

    conocimientos.appendChild(TitleOfPages('Mis conocimientos'))
    
// ----------------------------------------------------------------------------

    const url = 'https://alexander-aparicio.github.io/app/json/Specialties.json'

    const fragmentBar = d.createDocumentFragment()

    await fetch(url).then((res)=>{

        return res.ok ? res.json() : Promise.reject(error)

    }).then((res)=>{

        const temas = res.specialties

        temas.forEach(el => {

            const container = d.createElement('div')
            container.setAttribute('class','containerSpecialty')

            const barBox  = d.createElement('div')
            barBox.setAttribute('class','barBox')

            const idP = `${el.tema}`.replace(/\s+/g, '')
    
            const bar = d.createElement('div')
            bar.setAttribute('class',`bar ${idP} boxShadowStrong`)
        

            const p = d.createElement('p')
            p.setAttribute('id',idP)
            p.setAttribute('class','percentage')

            const containerName = d.createElement('div')
            containerName.setAttribute('class','specialty')

            const name = d.createElement('p')
            name.setAttribute('class','nameSpecialty')
            name.textContent = el.tema

            const img = d.createElement('img')
            img.setAttribute('class','logoSpecialty')
            img.setAttribute('src',`${el.img}`)
            if(el.id) img.setAttribute('id', `${el.id}`)

            container.appendChild(barBox)
            barBox.appendChild(bar)
            bar.appendChild(p)

            containerName.appendChild(name)
            containerName.appendChild(img)

            container.appendChild(containerName)
    
            fragmentBar.appendChild(container)
    
        })
    })

    

    conocimientos.appendChild(fragmentBar)

// ----------------------------------------------------------------------------

    return conocimientos
}

export { Conocimientos }