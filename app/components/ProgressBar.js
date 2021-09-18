const ProgressBar = ()=>{

    const effect = ()=>{

        const temas = [

            {tema: 'Javascript', nivel:75, faltante:'25%'},
            {tema: 'Css', nivel:70, faltante:'30%'},
            {tema: 'Styled Components', nivel:70, faltante:'30%'},
            {tema: 'Firebase', nivel:40, faltante:'60%'},
            {tema: 'Html', nivel:85, faltante:'15%'},
            {tema: 'React', nivel:55, faltante:'45%'},
            {tema: 'SEO', nivel:60, faltante:'40%'},
            {tema: 'Figma', nivel:60, faltante:'40%'},
            {tema: 'WordPress', nivel:80, faltante:'20%'},
            {tema: 'Git & Github', nivel:45, faltante:'55%'},
            {tema: 'Marketing Digital', nivel:65, faltante:'35%'}
    
        ]        


        temas.forEach(el => {
            
            const bar = document.getElementById(`${el.tema}`)

            let width = 1

            const id = setInterval(() => {

                if(width >= `${el.nivel}`){
                    clearInterval(id)
                }else{

                    width++

                    bar.style.width = width + '%'
                }
                
            }, 25);

        });
        

    }

    setTimeout(effect(),5)

}

export {ProgressBar}