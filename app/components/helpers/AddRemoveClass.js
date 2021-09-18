const addClass = (element,classStyle)=>{

    if(!element.classList.contains(classStyle)){element.classList.add(classStyle)}

}

const removeClass = (element,classStyle)=>{

    if(element.classList.contains(classStyle)){element.classList.remove(classStyle)}

}

export { addClass, removeClass }