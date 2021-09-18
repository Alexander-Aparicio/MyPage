import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const ProjectCards = async()=>{

    const d = document,
        $aplic = d.querySelector('.aplic'),
        $dioses = d.querySelector('.dioses'),
        $sumini = d.querySelector('.sumini'),
        $blog = d.querySelector('.blog'),
        $nameBlog = d.getElementById('openProjectBlog'),
        $nameDioses = d.getElementById('openProjectDioses'),
        $nameSumini = d.getElementById('openProjectSumini'),
        $nameAplic = d.getElementById('openProjectAplic'),
        $closeBlog = d.getElementById('closeProjectBlog'),
        $closeDioses = d.getElementById('closeProjectDioses'),
        $closeSumini = d.getElementById('closeProjectSumini'),
        $closeAplic = d.getElementById('closeProjectAplic')
        

    const card = (active,url,leyenda)=>{

        const card = d.createElement('figure')
        card.setAttribute('class',`card ${active} none slide ${leyenda}`)

        const img = d.createElement('img')
        img.setAttribute('class','img-card box-shadow')
        img.setAttribute('src',`${url}`)

        card.appendChild(img)

        const figc = d.createElement('figcaption')
        figc.setAttribute('class','leyenda')
        figc.textContent = `${leyenda}`

        card.appendChild(figc)

        return card
    }

    const URL = 'http://localhost:5500/app/json/cards.json'

    await fetch(URL).then((res)=>{

        return res.ok ? res.json() : Promise.reject(error)
    }).then((res)=>{

        const projects = res.projects

        projects.forEach(el => {

            const cards = el.cards
            const fragment = d.createDocumentFragment() 
            
            cards.forEach((input)=>{
 
                fragment.appendChild(card(`${input.class}`,`${input.url}`,`${input.leyenda}`))
            
            })

            let project = el.id

            switch (project) {

                case 'aplic':
                    $aplic.appendChild(fragment)
                    break;

                case 'blog':
                    $blog.appendChild(fragment)
                    break;

                case 'dioses':
                    $dioses.appendChild(fragment)
                    break;

                case 'sumini':
                    $sumini.appendChild(fragment)
                    break;
            
                default:
                    break;
            }
        })
    })

    const slider = (openElement,closeElement,element,el)=>{

        const $page = d.getElementById('portfolioPage')
        const avatar = d.querySelector('.imgs-projects')

        openElement.classList.add('none')
        closeElement.classList.remove('none')
        closeElement.style.setProperty('background','var(--bgBody)')
        closeElement.style.setProperty('border','solid 2px var(--cWhite)')
        addClass(closeElement,'boxShadowStrong')
        element.classList.remove('none')
        addClass(avatar,'none')

        const $cards = d.querySelectorAll( `.${el} >.card`)
        $cards[0].classList.add('active')

        let i = 0

        let slider = setInterval(()=>{
                
            $cards[i].classList.remove('active')
            // $cards[i].classList.remove('transition')
            i++

            if(i >= $cards.length){
                i = 0
            }

            $cards[i].classList.add('active')
            // $cards[i].classList.add('transitionSlider')

        },2000)

        $page.addEventListener('click', (e)=>{

            if(e.target && e.target.tagName === 'BUTTON'){

                element.classList.add('none')
                closeElement.classList.add('none')
                openElement.classList.remove('none')
                clearInterval(slider)
                removeClass(avatar,'none')
                $cards.forEach((el)=>{
    
                    if(el.classList.contains('active')) el.classList.remove('active')

                })
            }else if(e.target && e.target === 'P'){

                clearInterval(slider)
            }
        })
    }

    d.addEventListener('click',(e)=>{

        if(e.target === $nameBlog){

            addClass($dioses,'none')
            addClass($sumini,'none')
            addClass($aplic,'none')
            removeClass($blog,'none')
            
            slider($nameBlog,$closeBlog,$blog,'blog')

        }

        if(e.target === $nameSumini){

            addClass($dioses,'none')
            addClass($blog,'none')
            addClass($aplic,'none')
            removeClass($sumini,'none')

            slider($nameSumini,$closeSumini,$sumini,'sumini')
            
        }

        if(e.target === $nameAplic){

            addClass($dioses,'none')
            addClass($sumini,'none')
            addClass($blog,'none')
            removeClass($aplic,'none')

            slider($nameAplic,$closeAplic,$aplic,'aplic')
            
        }

        if(e.target === $nameDioses){

            addClass($blog,'none')
            addClass($sumini,'none')
            addClass($aplic,'none')
            removeClass($dioses,'none')

            slider($nameDioses,$closeDioses,$dioses,'dioses')

        }
    })
}
export { ProjectCards }