const parrafo = (clas,text,id)=>{

    const p = document.createElement('p')
    p.setAttribute('class',`${clas}`)
    p.textContent = text
    if(id){p.setAttribute('id',`${id}`)}

    return p
    
}

const image = (alt,url,clas,id)=>{

    const img = document.createElement('img')
    img.setAttribute('alt',alt)
    img.setAttribute('src', url)
    if(clas){img.setAttribute('class', `${clas}`)}
    if(id){img.setAttribute('id',`${id}`)}
    
    return img

}

const button = (clas,text,id)=>{

    const button = document.createElement('button')
    button.setAttribute('id',id)
    button.setAttribute('class',clas)
    button.textContent = text

    return button

}

const div = (clas,id)=>{

    const box = document.createElement('div')
    box.setAttribute('class',clas)
    if(id){box.setAttribute('id',id)}

    return box
}

const enlace = (text,url,styleClass,id,target,rel)=>{

    const a = document.createElement('a')
    a.textContent = text
    a.setAttribute('href',`${url}`)
    if(styleClass) a.setAttribute('class',`${styleClass}`)
    if(id) a.setAttribute('id',`${id}`)
    if(target) a.setAttribute('target',`${target}`)
    if(rel) a.setAttribute('rel',`${rel}`)

    return a
    
}

const figc = (text, styleClass, id)=>{

    const figcaption = document.createElement('figcaption')
    figcaption.textContent = text
    if(styleClass) figcaption.setAttribute('class',`${styleClass}`)
    if(id) figcaption.setAttribute('id',`${id}`)
    
    return figcaption

}

const figure = (styleClass, id)=>{

    const figure = document.createElement('figure')
    if(styleClass) figure.setAttribute('class',`${styleClass}`)
    if(id) figure.setAttribute('id',`${id}`)
    
    return figure

}

export { parrafo, image, button, div, enlace, figc, figure }