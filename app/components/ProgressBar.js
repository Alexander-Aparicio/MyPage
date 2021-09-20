const ProgressBar = async()=>{


    const url = 'https://alexander-aparicio.github.io/app/json/Specialties.json'

    await fetch(url).then((res)=>{

        return res.ok ? res.json() : Promise.reject(error)

    }).then((res)=>{

        const temas = res.specialties

        temas.forEach(el => {

            const idP = `${el.tema}`.replace(/\s+/g, '')
            
            const percentage = document.getElementById(idP)
            const bar = document.querySelector(`.${idP}`)
            
            let meter = 1

            let habilidad = `${el.nivel}`.slice(0,-1)
    
            const id = setInterval(() => {
    
                if( meter >= Number(habilidad)){

                    percentage.textContent = `${el.nivel}`
                    bar.style.setProperty('width',`${el.nivel}`)
                    clearInterval(id)

                }else{
    
                    meter++
    
                    bar.style.width = meter +'%'
                    percentage.textContent = `${meter}%`
                }
                
            }, 25)
    
        })
    })
}

export {ProgressBar}