const Navigation = ()=>{

    const d = document

    console.log('estoy en navigation')

    d.addEventListener('click',(e)=>{

        const $conocimientos = d.getElementById('Conocimientos')
        const $portafolio = d.getElementById('Portafolio')
        const $sobreMi = d.getElementById('Sobremí')
        const $home = d.getElementById('Inicio')

       if(e.target === $conocimientos){

        window.location.hash = '#/Conocimientos'

       }
       if(e.target === $portafolio){

        window.location.hash = '#/Portafolio'

       }
       if(e.target === $sobreMi){

        window.location.hash = '#/Sobre-mi'

       }
       if(e.target === $home){

        window.location.hash = '#/'

       }

    })


}

export { Navigation }