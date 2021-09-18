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

export { parrafo, image, button, div}